import { queryOptions } from '@tanstack/react-query';
import { createServerFn } from '@tanstack/react-start';
import { apiClient } from '~/config/api';

export const getSiteSettings = createServerFn({ method: 'GET' }).handler(() =>
  apiClient.findGlobal({ slug: 'site-settings', depth: 3 })
);

export const siteSettingsQueryOption = queryOptions({
  queryKey: ['globals', 'site-settings'],
  queryFn: ({ signal }) => getSiteSettings({ signal }),
});
