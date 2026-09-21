import mongoose, { Schema } from 'mongoose';
import { IResource, ResourceLink, resourceLinkSchema } from './Resources';
import { pageType, categoryType } from '../src/enums';

export interface IRow {
  _id: string;
  name?: string;
  type?: categoryType;
  content: IResource[] | string[];
}
/**
 * Data that makes up a sidebar item
 */
export interface SidebarItem {
  _id: string;
  title: string;
  icon: string;
  content: ResourceLink[];
}
export interface IPage {
  _id: string;
  title: string;
  color?: string;
  rows: IRow[];
  pageType: pageType;
  shortDesc?: string;
  longDesc?: string;
  sidebarItems?: SidebarItem[];
  needsHelp?: boolean;
  related?: string[];
  sub?: string[];
}
export interface ICategory {
  _id: string;
  pretty: string;
  description?: string;
  type: categoryType;
}

export interface GlossaryItem {
  _id: string;
  pretty: string;
  type?: string;
}
export interface GlossaryData {
  letter: string;
  content: GlossaryItem[];
}
export interface GlossaryPage {
  _id: string;
  data: { resources: GlossaryData[]; topics: GlossaryData[] };
}

const sidebarItemSchema = new Schema({
  _id: { type: String, required: true },
  title: { type: String, required: true },
  content: { type: [resourceLinkSchema], required: true },
});
const rowSchema = new Schema({
  _id: { type: String, required: true },
  name: String,
  type: { type: String, enum: categoryType }, // Default is "card"
  content: {
    type: Schema.Types.Union,
    of: [[resourceLinkSchema], [String]],
    required: true,
  },
});
export const categorySchema = new Schema({
  _id: { type: String, required: true },
  pretty: { type: String, required: true },
  type: { type: String, enum: categoryType, required: true },
});

export const pageSchema = new Schema({
  _id: { type: String, required: true },
  title: { type: String, required: true },
  rows: { type: [rowSchema], required: true },
  pageType: { type: String, enum: pageType },
  color: String,
  shortDesc: String,
  longDesc: String,
  sidebarItems: [sidebarItemSchema],
  needsHelp: Boolean,
});

export const Topics = mongoose.model('Topics', pageSchema);
export const Pages = mongoose.model('Pages', pageSchema);
