import { admin } from '@/access';
import { CollectionConfig } from 'payload';

export const Projects: CollectionConfig = {
  slug: 'projects',
  access: {
    read: () => true,
    create: admin,
    update: admin,
    delete: admin,
  },
  admin: { useAsTitle: 'title', defaultColumns: ['title', 'description'] },
  fields: [
    { name: 'title', type: 'text', required: true },
    { name: 'slug', type: 'text', unique: true, required: true },
    { name: 'description', type: 'richText', required: true },
    { name: 'thumbnail', type: 'upload', relationTo: 'media', required: true },
    { name: 'relatedSkills', type: 'relationship', relationTo: 'skills', hasMany: true },
    { name: 'githubLink', type: 'text' },
    { name: 'liveLink', type: 'text' },
    { name: 'featured', type: 'checkbox', defaultValue: false, admin: { position: 'sidebar'} },
    { name: 'sortOrder', type: 'number', defaultValue: 0, admin: { position: 'sidebar'} },
    {
      name: 'features',
      type: 'array',
      labels: {
        singular: 'Feature',
        plural: 'Features',
      },
      admin: {
        initCollapsed: true, // Keeps the admin UI clean
      },
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea', // Textarea is usually better for short feature descriptions than richText
          required: true,
        },
        {
          name: 'images',
          type: 'upload',
          relationTo: 'media',
          required: true,
          hasMany: true,
        },
      ],
    },
  ],
};
