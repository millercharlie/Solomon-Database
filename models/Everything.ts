import mongoose, { Schema } from 'mongoose';
import { UnparsedPage } from './Pages';
import { IResource, ResourceLink } from './Resources';

export type DataType = 'topic' | 'bible' | 'resource' | 'page' | 'miscLink';

export type EverythingType =
  | ({ type: 'topic' | 'bible' | 'page' } & UnparsedPage)
  | ({ type: 'resource' } & IResource)
  | ({ type: 'miscLink' } & ResourceLink);

const everythingSchema = new Schema(
  {
    _id: { type: String, required: true },
  },
  {
    discriminatorKey: 'type',
    _id: false,
  }
);

export const Everything = mongoose.model('Everything', everythingSchema);
