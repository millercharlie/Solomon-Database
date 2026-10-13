import { Everything, EverythingType } from '../models/Everything';
import { Bible, ICategory, IPage, IRow, UnparsedPage } from '../models/Pages';
import { IResource, MiscLinks, ResourceLink } from '../models/Resources';
import { dummyResource, dummyResourceLink } from './dummy';
import { resourceType } from './enums';
import { parseRows } from './pageLogic';

/**
 * Translate's an `UnparsedPage` to an `IResource`. It's a little janky but is primarily for displaying topics as cards.
 * @param pageData UnparsedPage
 * @returns IResource
 */
export const pageDataToResource = (
  topic: UnparsedPage,
  resourceType: resourceType
): IResource => {
  return {
    _id: topic._id,
    name: topic.title,
    color: topic.color,
    resourceType: resourceType,
    shortDesc: topic.shortDesc,
    longDesc: topic.longDesc,
    badges: [], // TODO: I might add badges to pages later
  };
};

/**
 * Converts every type of data (except miscellaneous links) into a resource.
 */
export const everythingToResource = (data: EverythingType): IResource => {
  switch (data.type) {
    case 'bible':
      return pageDataToResource(data, resourceType.bibleBook);
    case 'topic':
    case 'page':
      return pageDataToResource(data, resourceType.topic);
    case 'resource':
      return data;
    case 'miscLink':
      throw new Error(`Link cannot be converted into a resource`);
  }
};

/**
 * Returns a resource/topic from the given model as an IResource
 */
export const getResourceById = async <T>(
  model: { findById: (id: string) => Promise<T> },
  id: string,
  conversion: (t: T) => IResource
): Promise<IResource> => {
  const data: T | null = (await model.findById(id)) as T;
  if (data === null) {
    console.error(`No topic or resource found`);
    return dummyResource;
  }
  return conversion(data);
};

/**
 * Translate's a Bible book's `IPage` to an `IResource`. It's a little janky but is primarily for displaying topics as cards.
 * @param pageData IPage
 * @returns IResource
 */
export const bibleBookToResource = (bibleBook: IPage): IResource => {
  return {
    _id: bibleBook._id,
    name: bibleBook.title,
    color: bibleBook.color,
    resourceType: resourceType.bibleBook,
    shortDesc: bibleBook.shortDesc,
    longDesc: bibleBook.longDesc,
    badges: [], // TODO: I might add badges to pages later
  };
};

/**
 * Finds a given resource in the data
 * @returns IResource
 */
export const findResourceInData = (
  data: IResource[],
  _id: string
): IResource => {
  const item = data.find((i) => i._id === _id);
  if (!item) {
    console.error(`ID "${_id}" not found in data`);
    throw new Error(`ID "${_id}" not found in data`);
  } else return item;
};

/**
 * Retrieves data by category
 * @returns Promise<IResource[]>
 */
export const getDataByCategory = async (
  category: ICategory,
  amount?: number,
  filterFn?: (r: EverythingType) => boolean
): Promise<EverythingType[]> => {
  let data = (await Everything.find({
    tags: category._id,
  })) as EverythingType[];
  if (filterFn) {
    data = data.filter(filterFn);
  }
  if (amount) {
    return data.slice(0, amount);
  }
  return data;
};

/**
 * Retrieves resource links in list form
 * @returns Promise<ResourceLink[]>
 */
export const getLinksByCategory = async (
  category: ICategory
): Promise<ResourceLink[]> => {
  const data = (await MiscLinks.find({
    tags: category._id,
  })) as ResourceLink[];
  return data;
};

/**
 * Retrieves resource links in list form given a category ID
 * @returns ResourceLink[]
 */
export const getLinksByCategoryId = async (
  categoryId: string
): Promise<ResourceLink[]> => {
  const data = (await MiscLinks.find({
    tags: categoryId,
  })) as ResourceLink[];
  return data;
};

/**
 * Takes in an ID for a topic/resource/Bible book and returns a ResourceLink
 */
export const idToLink = async (id: string): Promise<ResourceLink> => {
  const data = (await Everything.findOne({
    _id: id,
  }).lean()) as EverythingType | null;
  if (!data) {
    console.error(`Resource/Topic not found with id ${id}`);
    return dummyResourceLink;
  }
  switch (data.type) {
    case 'resource':
      return {
        _id: data._id,
        platform: 'solomon',
        url: `/resource/${id}`,
        displayText: data.name,
        tooltip: data.shortDesc,
      };
    case 'miscLink':
      return data;
    case 'bible':
      return {
        _id: data._id,
        platform: 'solomon',
        url: `/bible/book/${id}`,
        displayText: data.title,
        tooltip: data.shortDesc,
      };
    case 'page':
    case 'topic':
      return {
        _id: data._id,
        platform: 'solomon',
        url: `/topic/${id}`,
        displayText: data.title,
        tooltip: data.shortDesc,
      };
    default:
      return dummyResourceLink;
  }
};

/**
 * Transforms a user query into a usable ID lookup
 * @param query
 */
export const transformQuery = (query: string): string => {
  return query.toLocaleLowerCase().replace(' ', '_');
};

export const getDataByID = async (
  id: string,
  convertToResource?: boolean
): Promise<UnparsedPage | IResource | ResourceLink | null> => {
  const data = (await Everything.findById(id).lean()) as EverythingType | null;
  if (!data || data === null) {
    console.error(`No data found matching the ID "${id}"`);
    // return null; TODO: Temporary - should be removed once Solomon's data is more robust
    return dummyResource;
  }
  switch (data.type) {
    case 'resource':
      return {
        _id: data._id,
        icon: data.icon,
        name: data.name,
        color: data.color,
        creator: data.creator,
        resourceType: data.resourceType,
        shortDesc: data.shortDesc,
        longDesc: data.longDesc,
        badges: data.badges,
        links: data.links,
        api: data.api,
      };
    case 'miscLink':
      return {
        _id: data._id,
        platform: data.platform,
        url: data.url,
        displayText: data.displayText,
        tooltip: data.tooltip,
        priority: data.priority,
      };
    case 'bible':
      if (convertToResource) {
        return pageDataToResource(data, resourceType.bibleBook);
      }
      return {
        _id: data._id,
        title: data.title,
        longTitle: data.longTitle,
        color: data.color,
        rows: data.rows,
        pageType: data.pageType,
        shortDesc: data.shortDesc,
        longDesc: data.longDesc,
        sidebarItems: data.sidebarItems,
        needsHelp: data.needsHelp,
        related: data.related,
        sub: data.sub,
      };
    case 'page':
      return {
        _id: data._id,
        title: data.title,
        longTitle: data.longTitle,
        color: data.color,
        rows: data.rows,
        pageType: data.pageType,
        shortDesc: data.shortDesc,
        longDesc: data.longDesc,
        sidebarItems: data.sidebarItems,
        needsHelp: data.needsHelp,
        related: data.related,
        sub: data.sub,
      };
    case 'topic':
      if (convertToResource) {
        return pageDataToResource(data, resourceType.topic);
      }
      return {
        _id: data._id,
        title: data.title,
        longTitle: data.longTitle,
        color: data.color,
        rows: data.rows,
        pageType: data.pageType,
        shortDesc: data.shortDesc,
        longDesc: data.longDesc,
        sidebarItems: data.sidebarItems,
        needsHelp: data.needsHelp,
        related: data.related,
        sub: data.sub,
      };
    default:
      return dummyResource;
  }
};

export const getBibleInfoData = async (dataId: string): Promise<IPage> => {
  const info = (await Bible.findOne({ _id: dataId })
    .populate('rows.content')
    .lean()) as unknown as UnparsedPage;
  if (!info) {
    console.error(`Bible topic "${dataId}" not found`);
    throw new Error(`Bible topic "${dataId}" not found.`);
  }
  const rows: IRow[] = await parseRows(info.rows);
  return { ...info, rows };
};
export const getBibleBookData = async (bookId: string): Promise<IPage> => {
  const book = (await Bible.findOne({ _id: bookId })
    .populate('rows.content')
    .lean()) as unknown as UnparsedPage;
  if (!book) {
    console.error(`Bible book "${bookId}" not found`);
    throw new Error(`Bible book "${bookId}" not found.`);
  }
  const rows: IRow[] = await parseRows(book.rows);
  return { ...book, rows };
};
