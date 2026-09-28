import { IResource, Resources } from '../models/Resources';
import { GlossaryPage, ICategory, IPage } from '../models/Pages';
import {
  findCategoryById,
  getCategoriesByPageAndType,
  getDashboardRows,
  getGlossaryData,
  getTheologyData,
  getTopicData,
} from './pageLogic';
import { categoryType } from './enums';

interface SolomonDao {
  getAllResources(): Promise<IResource[]>;
  getResourceById(id: string): Promise<IResource | null>;
  addResource(resource: IResource): any;
  getDashboard(): Promise<IPage>;
  getTheology(): Promise<IPage>;
  getGlossary(): Promise<GlossaryPage>;
  getTopic(topicId: string): Promise<IPage>;
  findCategoryById(categoryId: string): Promise<ICategory>;
  getCategoriesByPageAndType(
    pageId: string,
    categoryId: categoryType
  ): Promise<ICategory[]>;
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
    return getDashboardRows();
  }
  async getTheology(): Promise<IPage> {
    return getTheologyData();
  }
  async getGlossary(): Promise<GlossaryPage> {
    return getGlossaryData();
  }

  async getTopic(topicId: string): Promise<IPage> {
    return getTopicData(topicId);
  }

  async findCategoryById(categoryId: string): Promise<ICategory> {
    return findCategoryById(categoryId);
  }

  async getCategoriesByPageAndType(
    pageId: string,
    categoryType: categoryType
  ): Promise<ICategory[]> {
    return getCategoriesByPageAndType(pageId, categoryType);
  }
}
export const solomonDao = new SolomonDaoImplementation();
