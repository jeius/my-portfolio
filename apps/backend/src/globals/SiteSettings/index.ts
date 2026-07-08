import { admin } from '@/access';
import { GlobalConfig } from 'payload';

export const SiteSettings: GlobalConfig = {
  slug: 'site-settings',
  access: {
    read: () => true,
    update: admin,
  },
  fields: [
    { name: 'email', type: 'email', required: true },
    { name: 'phone', type: 'text' },
    { name: 'githubUrl', type: 'text' },
    { name: 'linkedinUrl', type: 'text' },
  ],
};
