import { IPage, IRow } from '../models/Pages';
import { IResource } from '../models/Resources';
import { pageType, resourceType } from './enums';

export const dummyTopic: IPage = {
  _id: 'dummy',
  title: 'Dummy Topic',
  rows: [],
  pageType: pageType.TOPIC,
};

export const dummyResource: IResource = {
  _id: 'dummy',
  name: 'Dummy Resource',
  type: resourceType.placeholder,
  badges: [],
};

export const dummyRow: IRow = {
  _id: 'dummy',
  content: [],
};
