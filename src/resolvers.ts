import { IResource } from '../models/Resources';
import { solomonDao } from './dao';
import { categoryType } from './enums';

export function buildResolvers() {
  const dao = solomonDao;

  return {
    Query: {
      getAllResources: () => dao.getAllResources(),
      getResourceById: (id: string) => dao.getResourceById(id),
      getDashboard: () => dao.getDashboard(),
      getTheology: () => dao.getTheology(),
      getCommentary: () => dao.getCommentary(),
      getGlossary: () => dao.getGlossary(),
      getTopic: (topicId: string) => dao.getTopic(topicId),
      search: (query: string) => dao.search(query),
      findCategoryById: (categoryId: string) =>
        dao.findCategoryById(categoryId),
      getCategoriesByPageAndType: (
        pageId: string,
        categoryType: categoryType
      ) => dao.getCategoriesByPageAndType(pageId, categoryType),
    },
    Mutation: {
      addResource: (resource: IResource) => dao.addResource(resource),
    },
  };
}
