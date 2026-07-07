import { Config } from '@jeius-portfolio/types/payload-types';

declare module 'payload' {
  export interface GeneratedTypes extends Config {}
}