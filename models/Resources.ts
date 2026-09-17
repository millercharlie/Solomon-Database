import mongoose from 'mongoose';
const { Schema } = mongoose;
import { badges, platforms, resourceType, apiSource } from '../src/enums';

/**
 * Resource link which includes a platform and the actual link.
 */
export type ResourceLink = {
  _id?: string;
  platform: string;
  url: string;
  displayText: string;
  tooltip?: string;
  priority?: boolean;
};
export interface IResource {
  _id: string;
  icon?: string;
  name: string;
  creator?: string;
  type: resourceType;
  shortDesc?: string;
  longDesc?: string;
  badges: badges[];
  links: ResourceLink[];
}

/**
 * Example Category:
 *  {
 *    _id: theology_intro,
 *    pages: ['theology'],
 *    pretty: 'Introduction to Theology'
 *  }
 */

/**
 * API to be called. Can only be YouTube for now.
 */
const resourceAPISchema = new Schema({
  platform: { type: String, enum: apiSource },
  queryParam: { type: String, required: true }, // For YouTube, this will be a username
});

export const resourceLinkSchema = new Schema({
  _id: String,
  platform: { type: String, enum: platforms },
  url: { type: String, required: true },
  displayText: String,
  tooltip: String,
  priority: Boolean,
  categories: [{ type: String, required: true }],
});

export const resourceSchema = new Schema({
  _id: { type: String, required: true },
  icon: String,
  name: { type: String, required: true },
  creator: String,
  type: { type: String, enum: resourceType },
  shortDesc: String,
  longDesc: String,
  badges: [{ type: String, enum: badges }],
  links: [resourceLinkSchema],
  color: String,
  api: resourceAPISchema,
  categories: [String], // Categories here will be a list of IDs extracted when each resource is created and categories are selected
});

export const MiscLinks = mongoose.model('MiscLinks', resourceLinkSchema);
export const Resources = mongoose.model('Resource', resourceSchema);
