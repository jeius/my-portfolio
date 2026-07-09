import type { CollectionSlug, FindOptions as PayloadFindOptions, SelectType } from 'payload';

export type FindOptions = Pick<
  PayloadFindOptions<CollectionSlug, SelectType>,
  'depth' | 'limit' | 'pagination' | 'sort'
>;
