import { GlobalConfig } from "payload";

export const Footer: GlobalConfig = {
  slug: 'footer',
  label: 'Footer',
  fields: [
    {
      type: 'array',
      name: 'socials',
      labels: { singular: 'Social Media', plural: 'Social Media' },
      fields: [
        {
          type: 'text',
          name: 'name',
          label: 'Name',
          required: true,
        }
      ]
    }
  ]
}