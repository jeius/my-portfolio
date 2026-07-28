import { admin } from '@/access';
import type { CollectionConfig } from 'payload';

export const Media: CollectionConfig<'media'> = {
  slug: 'media',
  access: {
    read: () => true,
    create: admin,
    update: admin,
    delete: admin,
  },
  fields: [
    {
      type: 'text',
      name: 'alt',
      admin: {
        description: `If the image fails to load, write a 2-5 words description of the image to load in place.`,
      },
    },
  ],
  upload: {
    adminThumbnail: 'thumbnail',
    focalPoint: true,
    displayPreview: true,
    bulkUpload: true,
    mimeTypes: ['image/*', 'video/*'],
    imageSizes: [
      {
        name: 'thumbnail',
        width: 400,
        height: 300,
        formatOptions: { format: 'webp', options: { quality: 80 } },
        withoutEnlargement: false,
        admin: {
          disableGroupBy: true, // hide from list view groupBy options
          disableListColumn: true, // hide from list view columns
          disableListFilter: true, // hide from list view filters
        },
      },
    ],
  },
};
