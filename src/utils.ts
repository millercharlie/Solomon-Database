import { ICategory, IPage } from '../models/Pages';
import {
  IResource,
  MiscLinks,
  ResourceLink,
  Resources,
} from '../models/Resources';
import { pageType, resourceType } from './enums';

/**
 * Translate's an `IPage` to an `IResource`. It's a little janky but is primarily for displaying topics as cards.
 * @param pageData IPage
 * @returns IResource
 */
export const pageDataToResource = (pageData: IPage): IResource => {
  return {
    _id: pageData._id,
    name: pageData.title,
    color: pageData.color,
    type: resourceType.topic,
    shortDesc: pageData.shortDesc,
    longDesc: pageData.longDesc,
    badges: [], // TODO: I might add badges to pages later
    // links: pageData.
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
 * Retrieves resources by category
 * @returns Promise<IResource[]>
 */
export const getResourcesByCategory = async (
  category: ICategory
): Promise<IResource[]> => {
  const data = (await Resources.find({
    tags: category._id,
  })) as IResource[];
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
