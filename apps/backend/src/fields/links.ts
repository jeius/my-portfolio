import { InternalLinks, LinkTypes } from '@/lib/constants/globals'
import { Field, GroupField, SelectField } from 'payload'

export function internalLink(
  overrides: Omit<Partial<SelectField>, 'type' | 'options' | 'hasMany' | 'validate'>,
): SelectField {
  return {
    name: 'internalLink',
    enumName: 'enum_internal_links',
    ...overrides,
    type: 'select',
    hasMany: false,
    options: InternalLinks,
  }
}

export function links({ admin }: Partial<Pick<GroupField, 'admin'>> = {}): GroupField {
  return {
    type: 'group',
    label: 'Link',
    admin: admin,
    fields: [
      {
        type: 'radio',
        name: 'linkType',
        label: 'Link Type',
        enumName: 'enum_link_type',
        required: true,
        options: Object.values(LinkTypes),
      },
      {
        type: 'text',
        name: 'externalLink',
        label: 'External Link',
        admin: {
          condition: (_data, siblingData) => siblingData.linkType === 'EXTERNAL',
        },
      },
      internalLink({
        name: 'internalLink',
        label: 'Internal Link',
        admin: {
          condition: (_data, siblingData) => siblingData.linkType === 'INTERNAL',
        },
      }),
    ],
  }
}
