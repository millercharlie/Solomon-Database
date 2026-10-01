import { IResource, ResourceLink, Resources } from '../models/Resources';
import { Bible, GlossaryPage, ICategory, IPage } from '../models/Pages';
import {
  findCategoryById,
  getCategoriesByPageAndType,
  getDashboardData,
  getGlossaryData,
  getTheologyData,
  getTopicData,
  getCommentaryData,
} from './pageLogic';
import { categoryType } from './enums';
import search from './search';
import { getBibleBookData, getBibleInfoData } from './utils';

interface SolomonDao {
  getAllResources(): Promise<IResource[]>;
  getResourceById(id: string): Promise<IResource | null>;
  addResource(resource: IResource): any;
  getDashboard(): Promise<IPage>;
  getTheology(): Promise<IPage>;
  getCommentary(): Promise<IPage>;
  getGlossary(): Promise<GlossaryPage>;
  getTopic(topicId: string): Promise<IPage>;
  findCategoryById(categoryId: string): Promise<ICategory>;
  getCategoriesByPageAndType(
    pageId: string,
    categoryId: categoryType
  ): Promise<ICategory[]>;
  search(query: string): Promise<ResourceLink[]>;
}

/**
 * Dao implementation
 */
class SolomonDaoImplementation implements SolomonDao {
  async getAllResources(): Promise<IResource[]> {
    return Resources.find();
  }
  async getResourceById(id: string): Promise<IResource | null> {
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

  async findCategoryById(categoryId: string): Promise<ICategory> {
    return findCategoryById(categoryId);
  }
  async search(query: string): Promise<ResourceLink[]> {
    return search(query);
  }

  async getCategoriesByPageAndType(
    pageId: string,
    categoryType: categoryType
  ): Promise<ICategory[]> {
    return getCategoriesByPageAndType(pageId, categoryType);
  }
}
export const solomonDao = new SolomonDaoImplementation();
