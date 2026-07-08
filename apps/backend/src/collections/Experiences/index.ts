import { admin } from '@/access';
import { CollectionConfig } from 'payload';

export const Experiences: CollectionConfig = {
  slug: 'experiences',
  access: {
    read: () => true,
    create: admin,
    update: admin,
    delete: admin,
  },
  admin: { useAsTitle: 'role', defaultColumns: ['role', 'company', 'startDate', 'endDate'] },
  fields: [
    { name: 'company', type: 'text', required: true },
    { name: 'role', type: 'text', required: true },
    { name: 'startDate', type: 'date', required: true },
    { name: 'endDate', type: 'date' },
    { name: 'isCurrent', type: 'checkbox', defaultValue: false },
    { name: 'location', type: 'text' },
    { name: 'responsibilities', type: 'richText' },
  ],
};
