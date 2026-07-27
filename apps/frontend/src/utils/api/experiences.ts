import { Experience } from '@jeius-portfolio/types/payload-types';
import { createServerFn, OptionalFetcher } from '@tanstack/react-start';
import type { PaginatedDocs } from 'payload';
import { apiClient, type FindOptions } from '~/config/api';

export const getExperiences: OptionalFetcher<
  undefined,
  (params?: FindOptions) => FindOptions,
  Promise<PaginatedDocs<Experience>>
> = createServerFn({ method: 'GET' })
  .validator((params: FindOptions = {}) => params)
  .handler(
    //@ts-expect-error Tanstack cant infer type on richtext field
    ({ data }) =>
      apiClient.find({
        ...data,
        collection: 'experiences',
        depth: data.depth || 3,
      })
  );
