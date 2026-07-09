import { Skill } from '@jeius-portfolio/types/payload-types';
import { createServerFn } from '@tanstack/react-start';
import type { PaginatedDocs } from 'payload';
import { apiClient, type FindOptions } from '~/lib/api';

export const getSkills = createServerFn({ method: 'GET' })
  .validator((params: FindOptions = {}) => params)
  .handler(({ data }): Promise<PaginatedDocs<Skill>> =>
    apiClient.find({
      ...data,
      collection: 'skills',
      depth: data.depth || 3,
    })
  );
