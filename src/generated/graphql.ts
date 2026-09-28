import { GraphQLResolveInfo } from 'graphql';
import { IResource } from '../../models/Resources';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Category = {
  __typename?: 'Category';
  _id: Scalars['String']['output'];
  description?: Maybe<Scalars['String']['output']>;
  pretty: Scalars['String']['output'];
  type?: Maybe<CategoryType>;
};

export enum CategoryType {
  Card = 'card',
  List = 'list'
}

export type Content = {
  __typename?: 'Content';
  _id: Scalars['ID']['output'];
  badges?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  desc?: Maybe<Scalars['String']['output']>;
  link: Scalars['String']['output'];
  thumbnail: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type GlossaryData = {
  __typename?: 'GlossaryData';
  resources: Array<GlossarySection>;
  topics: Array<GlossarySection>;
};

export type GlossaryItem = {
  __typename?: 'GlossaryItem';
  _id: Scalars['String']['output'];
  pretty: Scalars['String']['output'];
  type?: Maybe<Scalars['String']['output']>;
};

export type GlossaryPage = {
  __typename?: 'GlossaryPage';
  _id: Scalars['String']['output'];
  data: GlossaryData;
};

export type GlossarySection = {
  __typename?: 'GlossarySection';
  content: Array<GlossaryItem>;
  letter: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addResource?: Maybe<Resource>;
};


export type MutationAddResourceArgs = {
  resource: Resource;
};

export type Page = {
  __typename?: 'Page';
  _id: Scalars['String']['output'];
  color?: Maybe<Scalars['String']['output']>;
  longDesc?: Maybe<Scalars['String']['output']>;
  needsHelp?: Maybe<Scalars['Boolean']['output']>;
  pageType: PageType;
  related?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  rows: Array<Maybe<Row>>;
  shortDesc?: Maybe<Scalars['String']['output']>;
  sidebarItems?: Maybe<Array<Maybe<SidebarItem>>>;
  sub?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  title: Scalars['String']['output'];
};

export enum PageType {
  About = 'about',
  Add = 'add',
  Apologetics = 'apologetics',
  Commentary = 'commentary',
  Dashboard = 'dashboard',
  Glossary = 'glossary',
  NotFound = 'notFound',
  Theology = 'theology',
  Topic = 'topic'
}

export type Query = {
  __typename?: 'Query';
  findCategoryById?: Maybe<Category>;
  getAllResources?: Maybe<Array<Maybe<Resource>>>;
  getCategoriesByPageAndType?: Maybe<Array<Maybe<Category>>>;
  getDashboard?: Maybe<Page>;
  getGlossary?: Maybe<GlossaryPage>;
  getResourceById?: Maybe<Resource>;
  getTheology?: Maybe<Page>;
  getTopic?: Maybe<Page>;
};


export type QueryGetCategoriesByPageAndTypeArgs = {
  categoryType?: InputMaybe<CategoryType>;
  pageId: Scalars['String']['input'];
};


export type QueryGetResourceByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryGetTopicArgs = {
  topicId: Scalars['ID']['input'];
};

export type Resource = {
  __typename?: 'Resource';
  _id: Scalars['ID']['output'];
  badges?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  doubleWidth?: Maybe<Scalars['String']['output']>;
  favorite?: Maybe<Scalars['Boolean']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  links?: Maybe<Array<Maybe<ResourceLink>>>;
  longDesc?: Maybe<Scalars['String']['output']>;
  ministry?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  primLink?: Maybe<Scalars['String']['output']>;
  rating?: Maybe<Scalars['Int']['output']>;
  recentContent?: Maybe<Array<Maybe<Content>>>;
  recommendedContent?: Maybe<Array<Maybe<Content>>>;
  shortDesc?: Maybe<Scalars['String']['output']>;
  type?: Maybe<ResourceType>;
};

export type ResourceLink = {
  __typename?: 'ResourceLink';
  _id: Scalars['ID']['output'];
  displayText: Scalars['String']['output'];
  icon?: Maybe<Scalars['String']['output']>;
  link: Scalars['String']['output'];
  platform: Scalars['String']['output'];
  priority?: Maybe<Scalars['Boolean']['output']>;
};

export type ResourceRowContent = {
  __typename?: 'ResourceRowContent';
  content: Array<Resource>;
};

export enum ResourceType {
  Content = 'content',
  HistoricalFigure = 'historicalFigure',
  Ministry = 'ministry',
  Person = 'person',
  Placeholder = 'placeholder',
  Question = 'question',
  Topic = 'topic'
}

export type Row = {
  __typename?: 'Row';
  _id: Scalars['String']['output'];
  content: RowContent;
  name?: Maybe<Scalars['String']['output']>;
  type?: Maybe<CategoryType>;
};

export type RowContent = ResourceRowContent | StringRowContent;

export type SidebarItem = {
  __typename?: 'SidebarItem';
  _id: Scalars['String']['output'];
  content: Array<ResourceLink>;
  icon: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type StringRowContent = {
  __typename?: 'StringRowContent';
  content: Array<Scalars['String']['output']>;
};

export type Text = {
  __typename?: 'Text';
  value?: Maybe<Scalars['String']['output']>;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = Record<PropertyKey, never>, TContext = Record<PropertyKey, never>, TArgs = Record<PropertyKey, never>> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = Record<PropertyKey, never>, TContext = Record<PropertyKey, never>, TArgs = Record<PropertyKey, never>> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = Record<PropertyKey, never>, TContext = Record<PropertyKey, never>> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = Record<PropertyKey, never>, TContext = Record<PropertyKey, never>> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = Record<PropertyKey, never>, TParent = Record<PropertyKey, never>, TContext = Record<PropertyKey, never>, TArgs = Record<PropertyKey, never>> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping of union types */
export type ResolversUnionTypes<_RefType extends Record<string, unknown>> = {
  RowContent:
    | ( Omit<ResourceRowContent, 'content'> & { content: Array<_RefType['Resource']> } )
    | ( StringRowContent )
  ;
};


/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Category: ResolverTypeWrapper<Category>;
  CategoryType: CategoryType;
  Content: ResolverTypeWrapper<Content>;
  GlossaryData: ResolverTypeWrapper<GlossaryData>;
  GlossaryItem: ResolverTypeWrapper<GlossaryItem>;
  GlossaryPage: ResolverTypeWrapper<GlossaryPage>;
  GlossarySection: ResolverTypeWrapper<GlossarySection>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Mutation: ResolverTypeWrapper<Record<PropertyKey, never>>;
  Page: ResolverTypeWrapper<Omit<Page, 'rows'> & { rows: Array<Maybe<ResolversTypes['Row']>> }>;
  PageType: PageType;
  Query: ResolverTypeWrapper<Record<PropertyKey, never>>;
  Resource: ResolverTypeWrapper<IResource>;
  ResourceLink: ResolverTypeWrapper<ResourceLink>;
  ResourceRowContent: ResolverTypeWrapper<Omit<ResourceRowContent, 'content'> & { content: Array<ResolversTypes['Resource']> }>;
  ResourceType: ResourceType;
  Row: ResolverTypeWrapper<Omit<Row, 'content'> & { content: ResolversTypes['RowContent'] }>;
  RowContent: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['RowContent']>;
  SidebarItem: ResolverTypeWrapper<SidebarItem>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  StringRowContent: ResolverTypeWrapper<StringRowContent>;
  Text: ResolverTypeWrapper<Text>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean']['output'];
  Category: Category;
  Content: Content;
  GlossaryData: GlossaryData;
  GlossaryItem: GlossaryItem;
  GlossaryPage: GlossaryPage;
  GlossarySection: GlossarySection;
  ID: Scalars['ID']['output'];
  Int: Scalars['Int']['output'];
  Mutation: Record<PropertyKey, never>;
  Page: Omit<Page, 'rows'> & { rows: Array<Maybe<ResolversParentTypes['Row']>> };
  Query: Record<PropertyKey, never>;
  Resource: IResource;
  ResourceLink: ResourceLink;
  ResourceRowContent: Omit<ResourceRowContent, 'content'> & { content: Array<ResolversParentTypes['Resource']> };
  Row: Omit<Row, 'content'> & { content: ResolversParentTypes['RowContent'] };
  RowContent: ResolversUnionTypes<ResolversParentTypes>['RowContent'];
  SidebarItem: SidebarItem;
  String: Scalars['String']['output'];
  StringRowContent: StringRowContent;
  Text: Text;
};

export type CategoryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Category'] = ResolversParentTypes['Category']> = {
  _id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  pretty?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['CategoryType']>, ParentType, ContextType>;
};

export type ContentResolvers<ContextType = any, ParentType extends ResolversParentTypes['Content'] = ResolversParentTypes['Content']> = {
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  badges?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  desc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  link?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  thumbnail?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type GlossaryDataResolvers<ContextType = any, ParentType extends ResolversParentTypes['GlossaryData'] = ResolversParentTypes['GlossaryData']> = {
  resources?: Resolver<Array<ResolversTypes['GlossarySection']>, ParentType, ContextType>;
  topics?: Resolver<Array<ResolversTypes['GlossarySection']>, ParentType, ContextType>;
};

export type GlossaryItemResolvers<ContextType = any, ParentType extends ResolversParentTypes['GlossaryItem'] = ResolversParentTypes['GlossaryItem']> = {
  _id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  pretty?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
};

export type GlossaryPageResolvers<ContextType = any, ParentType extends ResolversParentTypes['GlossaryPage'] = ResolversParentTypes['GlossaryPage']> = {
  _id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  data?: Resolver<ResolversTypes['GlossaryData'], ParentType, ContextType>;
};

export type GlossarySectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['GlossarySection'] = ResolversParentTypes['GlossarySection']> = {
  content?: Resolver<Array<ResolversTypes['GlossaryItem']>, ParentType, ContextType>;
  letter?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  addResource?: Resolver<Maybe<ResolversTypes['Resource']>, ParentType, ContextType, RequireFields<MutationAddResourceArgs, 'resource'>>;
};

export type PageResolvers<ContextType = any, ParentType extends ResolversParentTypes['Page'] = ResolversParentTypes['Page']> = {
  _id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  color?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  longDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  needsHelp?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  pageType?: Resolver<ResolversTypes['PageType'], ParentType, ContextType>;
  related?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  rows?: Resolver<Array<Maybe<ResolversTypes['Row']>>, ParentType, ContextType>;
  shortDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sidebarItems?: Resolver<Maybe<Array<Maybe<ResolversTypes['SidebarItem']>>>, ParentType, ContextType>;
  sub?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  findCategoryById?: Resolver<Maybe<ResolversTypes['Category']>, ParentType, ContextType>;
  getAllResources?: Resolver<Maybe<Array<Maybe<ResolversTypes['Resource']>>>, ParentType, ContextType>;
  getCategoriesByPageAndType?: Resolver<Maybe<Array<Maybe<ResolversTypes['Category']>>>, ParentType, ContextType, RequireFields<QueryGetCategoriesByPageAndTypeArgs, 'pageId'>>;
  getDashboard?: Resolver<Maybe<ResolversTypes['Page']>, ParentType, ContextType>;
  getGlossary?: Resolver<Maybe<ResolversTypes['GlossaryPage']>, ParentType, ContextType>;
  getResourceById?: Resolver<Maybe<ResolversTypes['Resource']>, ParentType, ContextType, RequireFields<QueryGetResourceByIdArgs, 'id'>>;
  getTheology?: Resolver<Maybe<ResolversTypes['Page']>, ParentType, ContextType>;
  getTopic?: Resolver<Maybe<ResolversTypes['Page']>, ParentType, ContextType, RequireFields<QueryGetTopicArgs, 'topicId'>>;
};

export type ResourceResolvers<ContextType = any, ParentType extends ResolversParentTypes['Resource'] = ResolversParentTypes['Resource']> = {
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  badges?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  doubleWidth?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  favorite?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  links?: Resolver<Maybe<Array<Maybe<ResolversTypes['ResourceLink']>>>, ParentType, ContextType>;
  longDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ministry?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  primLink?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  rating?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  recentContent?: Resolver<Maybe<Array<Maybe<ResolversTypes['Content']>>>, ParentType, ContextType>;
  recommendedContent?: Resolver<Maybe<Array<Maybe<ResolversTypes['Content']>>>, ParentType, ContextType>;
  shortDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['ResourceType']>, ParentType, ContextType>;
};

export type ResourceLinkResolvers<ContextType = any, ParentType extends ResolversParentTypes['ResourceLink'] = ResolversParentTypes['ResourceLink']> = {
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  displayText?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  icon?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  link?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  platform?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  priority?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
};

export type ResourceRowContentResolvers<ContextType = any, ParentType extends ResolversParentTypes['ResourceRowContent'] = ResolversParentTypes['ResourceRowContent']> = {
  content?: Resolver<Array<ResolversTypes['Resource']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RowResolvers<ContextType = any, ParentType extends ResolversParentTypes['Row'] = ResolversParentTypes['Row']> = {
  _id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  content?: Resolver<ResolversTypes['RowContent'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['CategoryType']>, ParentType, ContextType>;
};

export type RowContentResolvers<ContextType = any, ParentType extends ResolversParentTypes['RowContent'] = ResolversParentTypes['RowContent']> = {
  __resolveType: TypeResolveFn<'ResourceRowContent' | 'StringRowContent', ParentType, ContextType>;
};

export type SidebarItemResolvers<ContextType = any, ParentType extends ResolversParentTypes['SidebarItem'] = ResolversParentTypes['SidebarItem']> = {
  _id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  content?: Resolver<Array<ResolversTypes['ResourceLink']>, ParentType, ContextType>;
  icon?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type StringRowContentResolvers<ContextType = any, ParentType extends ResolversParentTypes['StringRowContent'] = ResolversParentTypes['StringRowContent']> = {
  content?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TextResolvers<ContextType = any, ParentType extends ResolversParentTypes['Text'] = ResolversParentTypes['Text']> = {
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Category?: CategoryResolvers<ContextType>;
  Content?: ContentResolvers<ContextType>;
  GlossaryData?: GlossaryDataResolvers<ContextType>;
  GlossaryItem?: GlossaryItemResolvers<ContextType>;
  GlossaryPage?: GlossaryPageResolvers<ContextType>;
  GlossarySection?: GlossarySectionResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Page?: PageResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Resource?: ResourceResolvers<ContextType>;
  ResourceLink?: ResourceLinkResolvers<ContextType>;
  ResourceRowContent?: ResourceRowContentResolvers<ContextType>;
  Row?: RowResolvers<ContextType>;
  RowContent?: RowContentResolvers<ContextType>;
  SidebarItem?: SidebarItemResolvers<ContextType>;
  StringRowContent?: StringRowContentResolvers<ContextType>;
  Text?: TextResolvers<ContextType>;
};

