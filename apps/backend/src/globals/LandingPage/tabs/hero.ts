import { internalLink, links } from '@/fields/links'
import { ButtonVariants, LandingSloganTypes } from '@jeius-portfolio/enums/globals'
import { Tab } from 'payload'

export function heroTab(overrides: Partial<Pick<Tab, 'admin'>> = {}): Tab {
  return {
    name: 'hero',
    label: 'Hero',
    admin: overrides.admin,
    fields: [
      {
        type: 'text',
        name: 'title',
        label: 'Title',
        required: true,
      },
      {
        type: 'group',
        label: 'Slogan',
        fields: [
          {
            type: 'radio',
            name: 'sloganLineType',
            label: 'Line Type',
            required: true,
            enumName: 'enum_slogan_line_type',
            options: Object.values(LandingSloganTypes),
            defaultValue: LandingSloganTypes.SINGLE_LINE.value,
            admin: {
              description: `Select the type of slogan line to be displayed on the landing page.
                          Choose "Single Line" for a concise slogan or "Multi Line" for a more detailed message.`,
            },
          },
          {
            type: 'text',
            name: 'sloganLine',
            label: 'Slogan',
            required: true,
            admin: {
              condition: (_data, siblingData) =>
                siblingData.sloganLineType === LandingSloganTypes.SINGLE_LINE.value,
              description: `Add a single line for the slogan. This field is only visible when "Single Line" is 
                            selected as the Slogan Line Type.`,
            },
          },
          {
            type: 'array',
            name: 'sloganLines',
            labels: { plural: 'Slogan Lines', singular: 'Slogan Line' },
            admin: {
              condition: (_data, siblingData) =>
                siblingData.sloganLineType === LandingSloganTypes.MULTI_LINE.value,
              description: `Add multiple lines for the slogan. This field is only visible when "Multi Line" is 
                            selected as the Slogan Line Type.`,
            },
            fields: [
              {
                type: 'text',
                name: 'line',
                label: 'Line',
                required: true,
              },
            ],
          },
        ],
      },
      {
        type: 'upload',
        name: 'image',
        label: 'Hero Image',
        relationTo: 'media',
        required: true,
        admin: {
          description: `The featured image for the hero section of the landing page. 
                        This image should be high- quality and visually appealing, as it will be prominently
                        displayed at the top of the page.`,
        },
      },
      {
        type: 'array',
        name: 'ctas',
        labels: { singular: 'Call to Action', plural: 'Call to Actions' },
        required: true,
        minRows: 1,
        maxRows: 2,
        admin: {
          description: `The call-to-action buttons for the hero section. You can add up to two buttons, 
                        each with its own label and link. These buttons should be clear and compelling,
                        encouraging users to take action.`,
        },
        fields: [
          {
            type: 'text',
            name: 'label',
            required: true,
            admin: { description: 'Label for the button' },
          },
          {
            type: 'select',
            name: 'buttonVariant',
            label: 'Button Variant',
            enumName: 'enum_button_variants',
            options: Object.values(ButtonVariants),
            defaultValue: ButtonVariants.PRIMARY.value,
            required: true,
          },
          links()
        ],
      },
    ],
  }
}
