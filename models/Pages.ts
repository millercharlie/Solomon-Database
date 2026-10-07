import mongoose, { Schema } from 'mongoose';
import {
  IResource,
  ResourceLink,
  resourceLinkSchema,
  resourceSchema,
} from './Resources';
import { pageType, categoryType } from '../src/enums';
import { Everything } from './Everything';

// The only difference between an unparsed and parsed Row is that only string IDs are stored in the database. These
// get converted into resources for the frontend to properly display.

interface UnparsedCardRow {
  _id: string;
  title: string;
  type: categoryType.card;
  content: string[];
}
interface UnparsedListRow {
  _id: string;
  type: categoryType.list;
  content: IResource[];
}
export type UnparsedRow = UnparsedCardRow | UnparsedListRow;

interface CardRow {
  _id: string;
  title: string;
  type: categoryType.card;
  content: IResource[];
}
interface ListRow {
  _id: string;
  type: categoryType.list;
  content: IResource[];
}
export type IRow = CardRow | ListRow;
/**
 * Data that makes up a sidebar item
 */
export interface SidebarItem {
  _id: string;
  title: string;
  icon: string;
  content: ResourceLink[];
}

export interface UnparsedPage {
  _id: string;
  title: string;
  color?: string;
  rows: UnparsedRow[];
  pageType: pageType;
  shortDesc?: string;
  longDesc?: string;
  sidebarItems?: SidebarItem[];
  needsHelp?: boolean;
  tags?: string[];
  related?: string[];
  sub?: string[];
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

const rowSchema = new Schema(
  {
    _id: { type: String, required: true },
    title: String,
    type: { type: String, enum: categoryType, required: true },
    content: { type: [String], required: true },
  },
  { discriminatorKey: 'type', _id: false }
);
export const categorySchema = new Schema({
  _id: { type: String, required: true },
  pretty: { type: String, required: true },
  type: { type: String, enum: categoryType, required: true },
});

export const pageSchema = new Schema({
  _id: { type: String, required: true },
  title: { type: String, required: true },
  rows: { type: [rowSchema], required: true },
  sub: [String],
  tags: [String],
  related: [String],
  pageType: { type: String, enum: pageType },
  color: String,
  shortDesc: String,
  longDesc: String,
  sidebarItems: [sidebarItemSchema],
  needsHelp: Boolean,
});
const buildPageSchema = () => pageSchema;

// Handles the row type discriminator logic. Unparsed list rows will always be IResource[], while cards will be string[]
const rowPath = pageSchema.path('rows') as Schema.Types.DocumentArray;
rowPath.discriminator(
  categoryType.card,
  new Schema({
    title: { type: String, required: true },
    content: { type: [String], required: true },
  })
);
rowPath.discriminator(
  categoryType.list,
  new Schema({
    content: { type: [resourceSchema], required: true },
  })
);

export const Topics = Everything.discriminator('topic', buildPageSchema());
export const Bible = Everything.discriminator('bible', buildPageSchema());
export const Pages = Everything.discriminator('page', buildPageSchema());
