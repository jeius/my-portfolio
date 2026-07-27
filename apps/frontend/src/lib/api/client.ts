import { PayloadSDK } from '@jeius-portfolio/api';
import { Config } from '@jeius-portfolio/types/payload-types';
import { serverEnv } from '~/config/env';

export function createServerApiClient() {
  return new PayloadSDK<Config>({
    baseURL: serverEnv.API_URL.trim() + '/api',
  });
}

export const apiClient = createServerApiClient();
