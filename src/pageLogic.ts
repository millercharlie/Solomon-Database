import { resourceType, pageType, categoryType, badges } from './enums';
import {
  GlossaryData,
  GlossaryItem,
  GlossaryPage,
  ICategory,
  IPage,
  IRow,
  Topics,
} from '../models/Pages';
import { IResource, ResourceLink, Resources } from '../models/Resources';
import { defaultSidebar } from './sidebar';
import categories from '../data/categories';
import topics from '../data/topics';
import {
  findResourceInData,
  getLinksByCategory,
  getLinksByCategoryId,
  getResourcesByCategory,
  pageDataToResource,
} from './utils';
import { dummyResource } from './dummy';

const ids = [
  'nt_wright',
  'john_lennox',
  'trinity',
  'william_lane_craig',
  'gotquestions',
  'ot',
  'nt',
  'Jesus_resurrection',
  'bible_project',
  'inspiringphilosophy',
  'bible_thinker',
  'truth_unites',
  'gospel',
  'pauline_letters',
  'enduring_word',
];

// TODO: Right now, this is just a filter. In the future, all categories should be housed in the database
export const getCategoriesByPageAndType = (
  pageId: string,
  categoryType: categoryType
) => {
  return categories[pageId].filter((c: ICategory) => c.type === categoryType);
};

const getListRowContent = (
  data: { category: ICategory; resourceLinks: ResourceLink[] }[]
): IResource[] => {
  return data.map((set) => ({
    _id: set.category._id,
    name: set.category.pretty,
    links: set.resourceLinks,
    type: resourceType.placeholder,
    badges: [badges.placeholder],
  }));
};

export const findCategoryById = (categoryId: string): ICategory | undefined => {
  const newCategories = Object.values(categories).flat();
  return newCategories.find((c) => c._id === categoryId) as ICategory;
};

/**
 * Retrieves the necessary data for a full dashboard page.
 */
export const getDashboardRows = async (): Promise<IPage> => {
  const data = (await Resources.find({ _id: { $in: ids } })) as IResource[];
  const topics = (await Topics.find({ _id: { $in: ids } })) as IPage[];
  data.push(...topics.map((t): IResource => pageDataToResource(t)));

  const row1: IRow = {
    _id: 'theology_intro',
    name: 'Introduction to Theology',
    type: categoryType.card,
    content: [
      findResourceInData(data, 'nt_wright'),
      findResourceInData(data, 'john_lennox'),
      findResourceInData(data, 'trinity'),
      findResourceInData(data, 'william_lane_craig'),
    ],
  };
  const row2: IRow = {
    _id: 'bible_commentary_high_level',
    name: 'High-Level Bible Commentary',
    type: categoryType.card,
    content: [
      findResourceInData(data, 'gotquestions'),
      findResourceInData(data, 'pauline_letters'),
      findResourceInData(data, 'Jesus_resurrection'),
      findResourceInData(data, 'bible_project'),
    ],
  };
  const row3: IRow = {
    _id: 'apologetics_deep',
    name: 'Deeper Apologetics',
    type: categoryType.card,
    content: [
      findResourceInData(data, 'inspiringphilosophy'),
      findResourceInData(data, 'william_lane_craig'),
      findResourceInData(data, 'bible_thinker'),
      findResourceInData(data, 'truth_unites'),
    ],
  };
  const row4: IRow = {
    _id: 'topics_new_believers',
    name: 'Topics for New Believers',
    type: categoryType.card,
    content: [
      findResourceInData(data, 'Jesus_resurrection'),
      findResourceInData(data, 'gospel'),
      findResourceInData(data, 'ot'),
      findResourceInData(data, 'nt'),
    ],
  };

  return {
    _id: 'dashboard',
    title: 'Dashboard',
    pageType: pageType.DASHBOARD, // Dashboard will not have a description provided since it is hardcoded
    rows: [row1, row2, row3, row4],
    sidebarItems: defaultSidebar, // TODO: Sidebar isn't loading in the frontend? Also the YouTube API is calling when it shouldn't
  };
};

/**
 * Retrieves the necessary data for the theology page.
 */
export const getTheologyData = async (): Promise<IPage> => {
  const listCategories: ICategory[] = getCategoriesByPageAndType(
    'theology',
    categoryType.list
  );
  const cardCategories: ICategory[] = getCategoriesByPageAndType(
    'theology',
    categoryType.card
  );

  const truncatedListCategories = listCategories.slice(0, 4);
  const truncatedCardCategories = cardCategories.slice(0, 2);

  const getRows = async (): Promise<IRow[]> => {
    const row1Data = await Promise.all(
      truncatedListCategories.map(async (category) => {
        const resourceLinks = await getLinksByCategory(category);
        return {
          category,
          resourceLinks,
        };
      })
    );

    // Row 1 will only contain lists
    const row1: IRow = {
      _id: 'row1',
      content: getListRowContent(row1Data),
    };

    const row2: IRow = {
      _id: truncatedCardCategories[0]._id,
      name: truncatedCardCategories[0].pretty,
      type: categoryType.card,
      content: (await getResourcesByCategory(truncatedCardCategories[0])).slice(
        0,
        6
      ),
    };

    const row3: IRow = {
      _id: truncatedCardCategories[1]._id,
      name: truncatedCardCategories[1].pretty,
      type: categoryType.card,
      content: (await getResourcesByCategory(truncatedCardCategories[1])).slice(
        0,
        6
      ),
    };

    const rows = Promise.all([row1, row2, row3]);
    return rows;
  };

  const pageData: IPage = {
    _id: 'theology',
    title: 'Theology',
    pageType: pageType.THEOLOGY,
    longDesc:
      'Theology is the study of aspects of Scripture and God. Theologians pour over original manuscripts of the Bible to determine the precise meaning of certain passages or phrases. Theologians ask questions such as "what is the nature of God?" and "was Noah\'s flood localized to the Middle East or globally?". Below, you will find some resources on certain topics, in addition to sections of the Bible.',
    rows: await getRows(),
  };
  return Promise.resolve(pageData);
};

const getResourceById = async (id: string): Promise<IResource> => {
  const topicPage: IPage | null = await Topics.findById(id);
  if (topicPage === null) {
    const resource: IResource | null = await Resources.findById(id);
    if (resource === null) {
      console.error(`Error: No topic or resource found`);
      return dummyResource;
    }
    return resource;
  }
  return pageDataToResource(topicPage);
};

const parseTopicRows = async (topic: IPage): Promise<IRow[]> => {
  const parsedRows: IRow[] = await Promise.all(
    topic.rows.map(async (r: IRow) => {
      if (r.type === categoryType.list) {
        const newContent: IResource[] = await Promise.all(
          r.content.map(async (c: IResource | string) => {
            if (typeof c === 'string') {
              // TODO: This needs to return an IResource[]
              const resource = await getResourceById(c);
              console.log(resource);
              // If this is a string, it will be a resource/topic that already exists
              return {
                _id: resource._id,
                platform: 'solomon',
                url: '', // TODO: I guess the frontend might calculate this? It feels terrible though
                displayText: resource.name,
                tooltip: resource.shortDesc,
              };
            }
            const links = await getLinksByCategoryId(c._id);
            return { ...c, links };
          })
        );
        return { ...r, content: newContent };
      } else {
        const newContent: IResource[] = await Promise.all(
          r.content.map(async (c: IResource | string) => {
            if (typeof c === 'string') {
              const res = await getResourceById(c);
              console.log(res);
              return res;
            } else {
              return c;
            }
          })
        );
        return { ...r, content: newContent };
      }
    })
  );
  const additionalRows: IRow[] = [];
  if (topic.sub) {
    const content = await Promise.all(
      topic.sub.map(async (id: string) => {
        // Find topic by ID
        const dataTopic: IPage | null = await Topics.findById(id);
        if (dataTopic === null) {
          console.error('Error: Topic does not exist in list.');
          return dummyResource; // TODO: This will certainly not be a dummy, but it exists for now until topics are done
        }
        return pageDataToResource(dataTopic);
      })
    );
    additionalRows.push({
      _id: 'sub_topics',
      name: 'Sub-Topics',
      type: categoryType.card,
      content,
    });
  }
  if (topic.related) {
    const content = await Promise.all(
      topic.related.map(async (id: string) => {
        // Find topic by ID
        const dataTopic: IPage | null = await Topics.findById(id);
        if (dataTopic === null) {
          console.error('Error: Topic does not exist in list.');
          return dummyResource;
        }
        return pageDataToResource(dataTopic);
      })
    );
    additionalRows.push({
      _id: 'related_topics',
      name: 'Related Topics',
      type: categoryType.card,
      content,
    });
  }
  const allRows = await Promise.all([...parsedRows, ...additionalRows]);
  return allRows;
};

export const getTopicData = async (topicId: string): Promise<IPage> => {
  const topic = topics.find((t) => t._id === topicId) as IPage;
  if (!topic) {
    console.error(`Topic "${topicId}" not found`);
    throw new Error(`Topic "${topicId}" not found.`);
  }
  const rows = await parseTopicRows(topic);
  return { ...topic, rows };
};

const alphabet = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'];
/**
 * Retrieves all resources by letter.
 */
const getGlossaryResources = async (): Promise<GlossaryData[]> => {
  return await Promise.all(
    alphabet.map(async (letter) => {
      const regex = letter.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const resources = (await Resources.find({
        _id: { $regex: new RegExp(`^${regex}`, 'i') },
      })) as IResource[];
      const content: GlossaryItem[] = resources.map((t) => ({
        _id: t._id,
        pretty: t.creator ? `${t.name} - ${t.creator}` : t.name,
        type: t.type,
      }));
      return {
        letter,
        content,
      };
    })
  );
};
/**
 * Retrieves all topics by letter.
 */
const getGlossaryTopics = async (): Promise<GlossaryData[]> => {
  return await Promise.all(
    alphabet.map(async (letter) => {
      const regex = letter.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const topics = (await Topics.find({
        _id: { $regex: new RegExp(`^${regex}`, 'i') },
      })) as IPage[];
      const content: GlossaryItem[] = topics.map((t) => ({
        _id: t._id,
        pretty: t.title,
      }));
      return {
        letter,
        content,
      };
    })
  );
};

export const getGlossaryData = async (): Promise<GlossaryPage> => {
  const data = {
    resources: await getGlossaryResources(),
    topics: await getGlossaryTopics(),
  };
  return { _id: 'glossary_page', data };
};
