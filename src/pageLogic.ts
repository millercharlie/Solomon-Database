import { resourceType, pageType, categoryType, badges } from './enums';
import {
  Bible,
  GlossaryData,
  GlossaryItem,
  GlossaryPage,
  ICategory,
  IPage,
  IRow,
  Topics,
  UnparsedPage,
  UnparsedRow,
} from '../models/Pages';
import { IResource, ResourceLink, Resources } from '../models/Resources';
import { getSidebarData } from './sidebar';
import categories from '../data/categories';

import {
  getLinksByCategory,
  getDataByCategory,
  pageDataToResource,
  getLinksByCategoryId,
  getDataByID,
  idToLink,
  everythingToResource,
} from './utils';
import { dummyResource } from './dummy';
import { Everything, EverythingType } from '../models/Everything';

// TODO: Right now, this is just a filter. In the future, all categories should be housed in the database
export const getCategoriesByPageAndType = (
  pageType: pageType,
  categoryType: categoryType
) => {
  return categories[pageType].filter((c: ICategory) => c.type === categoryType);
};

const getListRowContent = (
  data: { category: ICategory; resourceLinks: ResourceLink[] }[]
): IResource[] => {
  return data.map((set) => ({
    _id: set.category._id,
    name: set.category.pretty,
    shortDesc: set.category.shortDesc,
    links: set.resourceLinks,
    resourceType: resourceType.placeholder,
    badges: [badges.placeholder],
  }));
};

export const findCategoryById = (categoryId: string): ICategory | undefined => {
  const newCategories = Object.values(categories).flat();
  return newCategories.find((c) => c._id === categoryId) as ICategory;
};

/**
 * Builds a row with a list of resources based on its type
 */
const buildRowResources = async (
  resourceIds: string[],
  type: 'related' | 'sub'
): Promise<IRow> => {
  const content = await Promise.all(
    resourceIds.map(async (id: string) => {
      // Here, related resources and sub-topics can be resources, Bible books, or topics.
      const data = (await Everything.findById(
        id
      ).lean()) as EverythingType | null;
      if (!data) {
        console.error(`No data found with ID ${id}`);
        return dummyResource;
      } else {
        switch (data.type) {
          case 'resource':
            return data;
          case 'miscLink':
            throw new Error('Link cannot be within a card row');
          case 'bible':
            return pageDataToResource(data, resourceType.bibleBook);
          case 'page':
          case 'topic':
            return pageDataToResource(data, resourceType.topic);
          default:
            return dummyResource;
        }
      }
    })
  );
  return {
    _id: type,
    type: categoryType.card,
    title: type === 'related' ? 'Related Topics' : 'Sub-Topics',
    content,
  };
};

/**
 * Retrives the sub-topics and related topics rows.
 */
const getAdditionalRows = async (
  sub?: string[],
  related?: string[]
): Promise<IRow[]> => {
  const additionalRows: IRow[] = [];
  if (sub) {
    const subRow = await buildRowResources(sub, 'sub');
    additionalRows.push(subRow);
  }
  if (related) {
    const relatedRow = await buildRowResources(related, 'related');
    additionalRows.push(relatedRow);
  }
  return additionalRows;
};

/**
 * Parses an array of unparsed rows by populating the row content.
 */
export const parseRows = async (
  rows: UnparsedRow[],
  related?: string[],
  sub?: string[]
): Promise<IRow[]> => {
  const parsedRows: IRow[] = await Promise.all(
    rows.map(async (r: UnparsedRow) => {
      // Runs for rows of lists. An unparsed list row will always consist of IResource, but further parsing of content is needed.
      if (r.type === categoryType.list) {
        const content: IResource[] = await Promise.all(
          r.content.map(async (c: IResource): Promise<IResource> => {
            if (c.links && c.links.length > 0) {
              // Runs if links are already given as IResource or string IDs
              const parsedLinks: ResourceLink[] = await Promise.all(
                c.links.map(async (l) => {
                  if (typeof l === 'string') {
                    return await idToLink(l);
                  } else return l;
                })
              );
              return { ...c, links: await Promise.all(parsedLinks) };
            } else {
              // Unparsed row content is a string of IDs representing categories
              const category = findCategoryById(c._id);
              if (category) {
                // Populates the content with ResourceLink[] corresponding to the category ID
                // This will run for the dashboard, theology, apologetics, and Bible commentary pages
                const links = await getLinksByCategoryId(c._id);
                return {
                  _id: category._id,
                  name: category.pretty,
                  resourceType: resourceType.topic,
                  badges: [],
                  links,
                };
              } else {
                // This will be called for topic pages only.
                const links = await getLinksByCategoryId(c._id);
                return { ...c, links };
              }
            }
          })
        );
        return { ...r, content };
      }
      // Runs for rows of cards. Essentially just parses each row's content into an IResource
      else {
        const content: IResource[] = await Promise.all(
          r.content.map(async (c: string) => {
            return (await getDataByID(c, true)) as IResource; // TODO: This sucks
          })
        );
        return { ...r, content };
      }
    })
  );

  const additionalRows = await getAdditionalRows(sub, related);
  const allRows = [...parsedRows, ...additionalRows];
  return allRows;
};

const buildPageRows = async (pageType: pageType): Promise<IRow[]> => {
  const listCategories: ICategory[] = getCategoriesByPageAndType(
    pageType,
    categoryType.list
  );
  const cardCategories: ICategory[] = getCategoriesByPageAndType(
    pageType,
    categoryType.card
  );

  const truncatedListCategories = listCategories.slice(0, 4);
  const truncatedCardCategories = cardCategories.slice(0, 2);

  const row1Data = await Promise.all(
    truncatedListCategories.map(async (category) => {
      const resourceLinks = await getLinksByCategory(category);
      return {
        category,
        resourceLinks,
      };
    })
  );

  console.log(row1Data);

  // Row 1 will only contain lists
  const row1: IRow = {
    _id: 'row1',
    type: categoryType.list,
    content: getListRowContent(row1Data),
  };

  // Row content is initially of EverythingType (Bible books, topics, creators, etc.) and must be converted into IResource
  const row2Content: IResource[] = (
    await getDataByCategory(
      truncatedCardCategories[0],
      5,
      (r) => r.type !== 'miscLink'
    )
  ).map((i): IResource => everythingToResource(i));
  const row3Content: IResource[] = (
    await getDataByCategory(
      truncatedCardCategories[1],
      5,
      (r) => r.type !== 'miscLink'
    )
  ).map((i): IResource => everythingToResource(i));

  // Card rows
  const row2: IRow = {
    _id: truncatedCardCategories[0]._id,
    title: truncatedCardCategories[0].pretty,
    type: categoryType.card,
    content: row2Content,
  };
  const row3: IRow = {
    _id: truncatedCardCategories[1]._id,
    title: truncatedCardCategories[1].pretty,
    type: categoryType.card,
    content: row3Content,
  };

  const rows = Promise.all([row1, row2, row3]);
  return rows;
};

/**
 * Retrieves the necessary data for a full dashboard page.
 */
export const getDashboardData = async (): Promise<IPage> => {
  const row1: UnparsedRow = {
    _id: 'theology_intro',
    title: 'Introduction to Theology',
    type: categoryType.card,
    content: ['nt_wright', 'john_lennox', 'trinity', 'william_lane_craig'],
  };
  const row2: UnparsedRow = {
    _id: 'bible_commentary_high_level',
    title: 'High-Level Bible Commentary',
    type: categoryType.card,
    content: [
      'gotquestions',
      'pauline_letters',
      'Jesus_resurrection',
      'bible_project',
    ],
  };
  const row3: UnparsedRow = {
    _id: 'apologetics_deep',
    title: 'Deeper Apologetics',
    type: categoryType.card,
    content: [
      'inspiringphilosophy',
      'william_lane_craig',
      'bible_thinker',
      'truth_unites',
    ],
  };
  const row4: UnparsedRow = {
    _id: 'topics_new_believers',
    title: 'Topics for New Believers',
    type: categoryType.card,
    content: ['Jesus_resurrection', 'gospel', 'ot', 'nt'],
  };

  const parsedRows = await parseRows([row1, row2, row3, row4]);

  // Testing purposes ONLY
  // await new Promise((r) => setTimeout(r, 10000));

  return {
    _id: 'dashboard',
    title: 'Dashboard',
    pageType: pageType.dashboard, // Dashboard will not have a description provided since it is hardcoded
    rows: parsedRows,
    sidebarItems: getSidebarData(pageType.dashboard),
  };
};

/**
 * Retrieves the necessary data for the theology page.
 */
export const getTheologyData = async (): Promise<IPage> => {
  const rows = await buildPageRows(pageType.theology);
  const pageData: IPage = {
    _id: 'theology',
    title: 'Theology',
    pageType: pageType.theology,
    longDesc:
      'Theology is the study of aspects of Scripture and God. Theologians pour over original manuscripts of the Bible to determine the precise meaning of certain passages or phrases. Theologians ask questions such as "what is the nature of God?" and "was Noah\'s flood localized to the Middle East or globally?". Below, you will find some resources on certain topics, in addition to sections of the Bible.',
    rows,
  };
  return Promise.resolve(pageData);
};

/**
 * Retrieves the necessary data for the Bible commentary page.
 */
export const getCommentaryData = async (): Promise<IPage> => {
  const rows = await buildPageRows(pageType.commentary);
  const pageData: IPage = {
    _id: 'commentary',
    title: 'Bible Commentary',
    pageType: pageType.commentary,
    longDesc:
      "The ESV Bible contains 756,846 words. Scholars have spent the past few thousand years trying to discern and truly understand every one of these words of God's divine speech in the form of Scripture. While the Bible remains the greatest and most popular book in history, many people, indeed most, don't really understand its contents. Verses are thrown around without context and its words are easily twisted by malicious actors. There is a greater need than ever to truly understand Scripture with the context of scholarship, church history, and orthodoxy.\n\nAnd while none of these can answer every single question we might have, many of the most common and misunderstood verses have clearer implications than ever. And as time goes on, we come ever closer to obtaining a richer understanding of Scripture than many of our predecessors had.\n\nBut, what exactly does the Bible say? What is the overarching message of Scripture? How much is it really about Jesus? This page contains commentary relating to every book of Scripture. Each book has its own page with apologetics, theology, and commentary resources to dive deeper.",
    rows,
  };
  return Promise.resolve(pageData);
};

/**
 * Retrieves the necessary data for the apologetics page.
 */
export const getApologeticsData = async (): Promise<IPage> => {
  const rows = await buildPageRows(pageType.apologetics);
  const pageData: IPage = {
    _id: 'apologetics',
    title: 'Apologetics',
    pageType: pageType.apologetics,
    longDesc:
      'Apologetics is the study of the truthfulness of Scripture and Christianity. This encapsulates answering common questions such as “does God exist?” and “did Jesus really rise from the dead?” Those who study apologetics, called apologists, use varying philosophical, scientific, historical, and logical arguments to defend the faith.',
    rows,
  };
  return Promise.resolve(pageData);
};

/**
 * Retrieves the necessary data for a topic page.
 */
export const getTopicData = async (topicId: string): Promise<IPage> => {
  let topic = (await Topics.findById(topicId)
    .populate('rows.content')
    .lean()) as unknown as UnparsedPage;
  if (!topic) {
    console.error(`Topic "${topicId}" not found`);
    throw new Error(`Topic "${topicId}" not found.`);
  }
  const rows = await parseRows(topic.rows, topic.sub, topic.related);
  return { ...topic, rows };
};

//? Glossary Page

const alphabet = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'];
const regex = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

/**
 * Returns model values that have an ID that begins with each letter of the alphabet
 * @param model
 * @param mapFn
 * @returns
 */
const getByLetter = async <T>(
  model: { find: (query: object) => Promise<T[]> },
  mapFn: (t: T) => GlossaryItem
): Promise<GlossaryData[]> => {
  return await Promise.all(
    alphabet.map(async (letter) => {
      const data = (await model.find({
        _id: { $regex: new RegExp(`^${regex(letter)}`, 'i') },
      })) as T[];
      const content: GlossaryItem[] = data.map((t) => mapFn(t));
      return {
        letter,
        content,
      };
    })
  );
};

/**
 * Retrieves all resources by letter.
 */
const getGlossaryResources = async (): Promise<GlossaryData[]> => {
  return await getByLetter<IResource>(Resources, (t: IResource) => ({
    _id: t._id,
    pretty: t.creator ? `${t.name} - ${t.creator}` : t.name,
    type: t.resourceType,
  }));
};
const getGlossaryTopics = async (): Promise<GlossaryData[]> => {
  return await getByLetter<IPage>(Topics, (t: IPage) => ({
    _id: t._id,
    pretty: t.title,
  }));
};
export const getGlossaryData = async (): Promise<GlossaryPage> => {
  const data = {
    resources: await getGlossaryResources(),
    topics: await getGlossaryTopics(),
  };
  return { _id: 'glossary_page', data };
};
