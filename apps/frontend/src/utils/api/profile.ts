import { queryOptions } from '@tanstack/react-query';
import { createServerFn } from '@tanstack/react-start';
import { apiClient } from '~/lib/api';

//@ts-expect-error Tanstack cant infer type on richtext field
export const getProfile = createServerFn({ method: 'GET' }).handler(() =>
  apiClient.findGlobal({ slug: 'profile', depth: 3, draft: false })
);

export const profileQueryOptions = queryOptions({
  queryKey: ['globals', 'profile'],
  queryFn: ({ signal }) => getProfile({ signal }),
});
