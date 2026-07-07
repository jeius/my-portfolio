import { internalLink, links } from '@/fields/links'
import { DEFAULT_EDITOR_FEATURES } from '@/lib/constants/editor'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { Tab } from 'payload'

export function aboutTab(overrides: Partial<Pick<Tab, 'admin'>> = {}): Tab {
  return {
    name: 'about',
    label: 'About',
    admin: overrides.admin,
    fields: [
      {
        type: 'text',
        name: 'title',
        label: 'Title',
        required: true,
        admin: {
          description: `The title for the About section of the landing page. This title should 
                        be concise and informative, providing a clear overview of the content in this section.`,
        },
      },
      {
        type: 'richText',
        name: 'description',
        label: 'Description',
        required: true,
        editor: lexicalEditor({ features: () => DEFAULT_EDITOR_FEATURES }),
        admin: {
          description: `The description for the About section of the landing page. This text should 
                        provide a detailed overview of the content in this section, highlighting key points and
                        engaging the reader.`,
        },
      },
      {
        type: 'group',
        name: 'image',
        label: 'Image',
        fields: [
          {
            type: 'upload',
            name: 'file',
            label: 'File',
            relationTo: 'media',
            required: true,
            admin: {
              description: `The image for the About section of the landing page. This image should 
                            be high-quality and visually appealing, complementing the content in this section.`,
            },
          },
          {
            type: 'text',
            name: 'caption',
            label: 'Image Caption',
            required: true,
          },
        ],
      },
      {
        type: 'array',
        name: 'services',
        minRows: 2,
        maxRows: 6,
        fields: [
          { 
            type: 'relationship',
            name: 'item',
            label: 'Item',
            relationTo: 'services',
            required: true,
          },
          links(),
        ]
      },
    ],
  }
}
