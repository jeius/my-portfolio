import { admin } from '@/access';
import { GlobalConfig } from 'payload';

export const Profile: GlobalConfig = {
  slug: 'profile',
  access: {
    read: () => true,
    update: admin,
  },
  versions: { drafts: { autosave: true }, max: 10 },
  fields: [
    { name: 'name', type: 'text', required: true, defaultValue: 'Julius Pahama' },
    { name: 'headline', type: 'text', required: true },
    { name: 'bio', type: 'richText', required: true },
    { name: 'avatar', type: 'upload', relationTo: 'media', required: true },
    { name: 'location', type: 'text', defaultValue: 'Calamba, Misamis Occidental' },
    { name: 'willingToRelocate', type: 'checkbox', defaultValue: true },
  ],
};
