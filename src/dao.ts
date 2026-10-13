import { IResource, ResourceLink, Resources } from '../models/Resources';
import {
  Bible,
  GlossaryPage,
  ICategory,
  IPage,
  SidebarItem,
} from '../models/Pages';
import {
  findCategoryById,
  getCategoriesByPageAndType,
  getDashboardData,
  getGlossaryData,
  getTheologyData,
  getTopicData,
  getCommentaryData,
  getApologeticsData,
} from './pageLogic';
import { categoryType, pageType } from './enums';
import search from './search';
import { getBibleBookData, getBibleInfoData } from './utils';
import { getYoutubeDataForCreator, YouTubeData } from './youtube';
import { getSidebarData } from './sidebar';

interface SolomonDao {
  getAllResources(): Promise<IResource[]>;
  getResourceById(id: string): Promise<IResource | null>;
  addResource(resource: IResource): any;
  getDashboard(): Promise<IPage>;
  getTheology(): Promise<IPage>;
  getCommentary(): Promise<IPage>;
  getGlossary(): Promise<GlossaryPage>;
  getTopic(topicId: string): Promise<IPage>;
  findCategoryById(categoryId: string): Promise<ICategory | null>;
  getCategoriesByPageAndType(
    pageId: string,
    categoryId: categoryType
  ): Promise<ICategory[]>;
  search(query: string): Promise<ResourceLink[]>;
  getYoutubeDataForCreator(userId: string): Promise<YouTubeData>;
  getSidebarData(pageId: pageType): Promise<SidebarItem[] | null>;
}

/**
 * Dao implementation
 */
class SolomonDaoImplementation implements SolomonDao {
  async getAllResources(): Promise<IResource[]> {
    return Resources.find();
  }
  async getResourceById(id: string): Promise<IResource> {
    return Resources.findById(id);
  }
  async addResource(resource: IResource): Promise<IResource> {
    return Resources.create(resource);
  }

  async getDashboard(): Promise<IPage> {
    return getDashboardData();
  }
  async getTheology(): Promise<IPage> {
    return getTheologyData();
  }
  async getCommentary(): Promise<IPage> {
    return getCommentaryData();
  }
  async getApologetics(): Promise<IPage> {
    return getApologeticsData();
  }
  async getGlossary(): Promise<GlossaryPage> {
    return getGlossaryData();
  }

  async getTopic(topicId: string): Promise<IPage> {
    return getTopicData(topicId);
  }
  async getBibleInfo(dataId: string): Promise<IPage> {
    return getBibleInfoData(dataId);
  }
  async getBibleBook(bookId: string): Promise<IPage> {
    return getBibleBookData(bookId);
  }
  async getAllBibleBooks(): Promise<IPage[]> {
    return Bible.find();
  }

  async findCategoryById(categoryId: string): Promise<ICategory | null> {
    const category = findCategoryById(categoryId);
    if (!category) return null;
    return category;
  }
  async search(query: string): Promise<ResourceLink[]> {
    return search(query);
  }
  async getSidebarData(pageType: pageType): Promise<SidebarItem[] | null> {
    const data = getSidebarData(pageType);
    if (!data) return null;
    return data;
  }

  async getYoutubeDataForCreator(userId: string): Promise<YouTubeData> {
    return getYoutubeDataForCreator(userId);
  }

  async getCategoriesByPageAndType(
    pageId: pageType,
    categoryType: categoryType
  ): Promise<ICategory[]> {
    return getCategoriesByPageAndType(pageId, categoryType);
  }
}
export const solomonDao = new SolomonDaoImplementation();
