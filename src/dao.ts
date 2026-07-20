import { IResource, Resources } from '../models/Resources';

interface SolomonDao {
  getAllResources(): Promise<IResource[]>;
  getResourceById(id: string): Promise<IResource | null>;
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
}
export const solomonDao = new SolomonDaoImplementation();
