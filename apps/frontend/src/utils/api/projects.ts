import { Project } from '@jeius-portfolio/types/payload-types';
import { createServerFn, OptionalFetcher } from '@tanstack/react-start';
import type { PaginatedDocs } from 'payload';
import { apiClient, type FindOptions } from '~/lib/api';

//@ts-expect-error Tanstack cant infer type on richtext field
export const getFeaturedProjects = createServerFn({ method: 'GET' }).handler(async () => {
  const { docs } = await apiClient.find({
    collection: 'projects',
    where: { featured: { equals: true } },
    depth: 3,
    pagination: false,
  });

  return docs;
});

export const getProjects: OptionalFetcher<
  undefined,
  (params?: FindOptions) => FindOptions,
  Promise<PaginatedDocs<Project>>
> = createServerFn({ method: 'GET' })
  .validator((params: FindOptions = {}) => params)
  //@ts-expect-error Tanstack cant infer type on richtext field
  .handler(({ data }) =>
    apiClient.find({
      ...data,
      collection: 'projects',
      depth: data.depth || 3,
    })
  );
