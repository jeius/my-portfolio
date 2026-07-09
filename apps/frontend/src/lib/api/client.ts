import { PayloadSDK } from '@jeius-portfolio/api';
import { Config } from '@jeius-portfolio/types/payload-types';
import { API_URL } from '~/constants/env';

export const apiClient = new PayloadSDK<Config>({
  baseURL: API_URL,
})
