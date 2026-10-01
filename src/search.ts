import { Bible, IPage, Topics } from '../models/Pages';
import { IResource, ResourceLink, Resources } from '../models/Resources';
import { transformQuery } from './utils';

/**
 * Transforms a topic into a resource link
 */
const topicToLink = (topic: IPage): ResourceLink => ({
  _id: topic._id,
  platform: 'topic',
  url: `/topic/${topic._id}`,
  displayText: `${topic.title} - Topic`,
});
/**
 * Transforms a resource into a resource link
 */
const resourceToLink = (resource: IResource): ResourceLink => ({
  _id: resource._id,
  platform: 'solomon',
  url: `/resource/${resource._id}`,
  displayText: resource.creator
    ? `${resource.name} by ${resource.creator} - Resource`
    : `${resource.name} - Resource`,
});
/**
 * Transforms Bible information into a resource link
 */
const bibleBookToLink = (bibleInfo: IPage): ResourceLink => ({
  _id: bibleInfo._id,
  platform: 'bible',
  url: `/bible/book/${bibleInfo._id}`,
  displayText: `Book of ${bibleInfo.title}`,
});

const searchTopics = async (query: string): Promise<IPage[]> => {
  const parsedQuery = transformQuery(query);
  // Finds topics by either an ID or title match
  return Topics.find({
    $or: [{ _id: parsedQuery }, { title: { $regex: query, $options: 'i' } }],
  });
};
const searchResources = async (query: string): Promise<IResource[]> => {
  const parsedQuery = transformQuery(query);
  // Finds resources by either an ID or name match
  return Resources.find({
    $or: [
      { _id: parsedQuery },
      { name: { $regex: query, $options: 'i' } },
      { creator: { $regex: query, $options: 'i' } },
    ],
  });
};
const searchBible = async (query: string): Promise<IPage[]> => {
  const parsedQuery = transformQuery(query);
  // Finds Bible information by either an ID or title match
  return Bible.find({
    $or: [{ _id: parsedQuery }, { title: { $regex: query, $options: 'i' } }],
  });
};

/**
 * Searches Solomon for relevant resources to the given query.
 * I might make this more powerful in the future by searching within topics, but for now it's okay
 */
const search = async (query: string): Promise<ResourceLink[]> => {
  let results = [];

  const queriedTopics = await searchTopics(query);
  const queriedResources = await searchResources(query);
  const queriedBible = await searchBible(query);

  if (queriedTopics) {
    results.push(...queriedTopics.map((t) => topicToLink(t)));
  }
  if (queriedResources) {
    results.push(...queriedResources.map((r) => resourceToLink(r)));
  }
  if (queriedBible) {
    // TODO: This will need to be separated once sections and books of the bible are separated.
    results.push(...queriedBible.map((b) => bibleBookToLink(b)));
  }
  // Maybe relevant pages too?

  return results;
};
export default search;
