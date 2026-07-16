import mongoose from 'mongoose';
const { Schema } = mongoose;

enum resourceTypes {
  'person',
  'historical-figure',
  'ministry',
}
enum badges {
  'video',
  'website',
  'book',
  'podcast',
  'apologetics',
  'theology',
  'ministry',
  'church',
}
enum platforms {
  'youtube',
  'facebook',
  'x',
  'twitter',
  'instagram',
  'linktree',
  'personal',
  'podcast',
  'book',
}

/**
 * Resource link which includes a platform and the actual link.
 */
export type ResourceLink = {
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
  type: resourceTypes;
  shortDesc?: string;
  longDesc?: string;
  badges: badges;
  links: ResourceLink;
}

export const resourceLinkSchema = new Schema({
  platform: { type: String, enum: platforms },
  url: { type: String, required: true },
  displayText: String,
  tooltip: String,
  priority: Boolean,
});

export const resourceSchema = new Schema({
  _id: { type: String, required: true },
  icon: String,
  name: { type: String, required: true },
  type: { type: String, enum: resourceTypes },
  shortDesc: String,
  longDesc: String,
  badges: [{ type: String, enum: badges }],
  links: [resourceLinkSchema],
});

export const Resources = mongoose.model('Resource', resourceSchema);
