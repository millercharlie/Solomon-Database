import { resourceType, pageType, categoryType, badges } from './enums';
import { ICategory, IPage, IRow } from '../models/Pages';
import {
  IResource,
  MiscLinks,
  ResourceLink,
  Resources,
} from '../models/Resources';
import { defaultSidebar } from './sidebar';
import categories from '../data/categories';
import topics from '../data/topics';

const ids = [
  'nt_wright',
  'john_lennox',
  'trinity',
  'william_lane_craig',
  'gotquestions',
  'ot',
  'nt',
  'resurrection',
  'bible_project',
  'inspiring_philosophy',
  'bible_thinker',
  'truth_unites',
  'gospel',
  'pauline_letters',
  'enduring_word',
];

const findById = (data: IResource[], _id: string): IResource => {
  const item = data.find((i) => i._id === _id);
  if (!item) {
    console.error(`ID "${_id}" not found in data`);
    throw new Error(`ID "${_id}" not found in data`);
  } else return item;
};

// TODO: Right now, this is just a filter. In the future, all categories should be housed in the database
export const getCategoriesByPageAndType = (
  pageId: string,
  categoryType: categoryType
) => {
  return categories[pageId].filter((c: ICategory) => c.type === categoryType);
};

/**
 * Retrieves resources by category
 * @param category
 * @returns
 */
const getResourcesByCategory = async (
  category: ICategory
): Promise<IResource[]> => {
  const data = (await Resources.find({
    categories: category._id,
  })) as IResource[];
  return data;
};
/**
 * Retrieves resource links in list form
 * @param category
 * @returns
 */
const getLinksByCategory = async (
  category: ICategory
): Promise<ResourceLink[]> => {
  const data = (await MiscLinks.find({
    categories: category._id,
  })) as ResourceLink[];
  return data;
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
  return newCategories.find((c) => c._id === categoryId);
};

/**
 * Retrieves the necessary data for a full dashboard page.
 */
export const getDashboardRows = async (): Promise<IPage> => {
  const data = (await Resources.find({ _id: { $in: ids } })) as IResource[];

  const row1: IRow = {
    _id: 'theology_intro',
    name: 'Introduction to Theology',
    type: categoryType.card,
    content: [
      findById(data, 'nt_wright'),
      findById(data, 'john_lennox'),
      // findById(data, 'trinity'),
      findById(data, 'william_lane_craig'),
    ],
  };
  const row2: IRow = {
    _id: 'bible_commentary_high_level',
    name: 'High-Level Bible Commentary',
    type: categoryType.card,
    content: [
      findById(data, 'gotquestions'),
      findById(data, 'pauline_letters'),
      findById(data, 'resurrection'),
      findById(data, 'bible_project'),
    ],
  };
  const row3: IRow = {
    _id: 'apologetics_deep',
    name: 'Deeper Apologetics',
    type: categoryType.card,
    content: [
      findById(data, 'inspiring_philosophy'),
      findById(data, 'william_lane_craig'),
      findById(data, 'bible_thinker'),
      findById(data, 'truth_unites'),
    ],
  };
  const row4: IRow = {
    _id: 'topics_new_believers',
    name: 'Topics for New Believers',
    type: categoryType.card,
    content: [
      findById(data, 'resurrection'),
      findById(data, 'gospel'),
      findById(data, 'ot'),
      findById(data, 'nt'),
    ],
  };

  return {
    _id: 'dashboard',
    title: 'Dashboard',
    pageType: pageType.DASHBOARD, // Dashboard will not have a description provided since it is hardcoded
    rows: [row1, row2, row3, row4],
    sidebarItems: defaultSidebar,
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

export const getTopicData = async (topicId: string): Promise<IPage> => {
  const topic = topics.find((t) => t._id === topicId) as unknown as IPage; // TODO: This sucks but prevents errors
  if (!topic) {
    console.error(`Topic "${topicId}" not found`);
    throw new Error(`Topic "${topicId}" not found.`);
  }

  const parsedRows: IRow = topic.rows.map((r: IRow) => {
    if (r.type === categoryType.list) {
      const newContent: IResource[] = Promise.all(
        r.content.map(async (c: IResource) => {
          const category = findCategoryById(c._id);
          if (category) {
            const newLinks = await getLinksByCategory(category);
            return { ...c, links: newLinks };
          }
        })
      );
      return { ...r, content: newContent };
    } else {
      if (r._id === 'sub' || r._id === 'related') {
        // Invariance: This will be a string
        r.content.map((c: unknown) => {});
      }
    }
  });
  console.log(parsedRows);

  return { ...topic, rows: parsedRows };
};
