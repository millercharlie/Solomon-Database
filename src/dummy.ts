import { IPage, IRow } from '../models/Pages';
import { IResource, ResourceLink } from '../models/Resources';
import { categoryType, pageType, resourceType } from './enums';

export const dummyTopic: IPage = {
  _id: 'dummy',
  title: 'Dummy Topic',
  rows: [],
  pageType: pageType.topic,
};

export const dummyResource: IResource = {
  _id: 'dummy',
  name: 'Dummy Resource',
  type: resourceType.placeholder,
  badges: [],
};

export const dummyRow: IRow = {
  _id: 'dummy',
  type: categoryType.card,
  title: 'Dummy',
  content: [],
};

export const dummyResourceLink: ResourceLink = {
  platform: 'solomon',
  url: 'dummy',
  displayText: 'dummy',
};
