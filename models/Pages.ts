import mongoose, { Schema } from 'mongoose';
import {
  IResource,
  ResourceLink,
  resourceLinkSchema,
  resourceSchema,
} from './Resources';
import { pageType, categoryType } from '../src/enums';

export interface IRow {
  _id: string;
  name?: string;
  type?: categoryType;
  content: IResource[];
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
}
export interface ICategory {
  _id: string;
  pretty: string;
  description?: string;
  type: categoryType;
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
  content: { type: [resourceSchema], required: true },
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

export const Pages = mongoose.model('Pages', pageSchema);
