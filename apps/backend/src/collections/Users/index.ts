import type { CollectionConfig } from 'payload'
import { Roles } from '@jeius-portfolio/enums'

export const Users: CollectionConfig<'users'> = {
  slug: 'users',
  labels: { singular: 'User', plural: 'Users' },
  admin: {
    useAsTitle: 'email',
  },
  auth: true,
  fields: [
    {
      type: 'row',
      fields: [
        {
          type: 'text',
          name: 'firstName',
          label: 'First Name',
          required: true,
          admin: { width: '50%' },
        },
        {
          type: 'text',
          name: 'lastName',
          label: 'Last Name',
          required: true,
          admin: { width: '50%' },
        },
        {
          type: 'text',
          name: 'fullName',
          label: 'Full Name',
          virtual: true,
          hooks: {
            afterRead: [
              ({ data }) => {
                if (!data?.firstName || !data?.lastName) return null
                return `${data.firstName} ${data.lastName}`
              },
            ],
          },
          admin: { position: 'sidebar', readOnly: true },
        },
      ],
    },
    {
      type: 'select',
      name: 'role',
      required: true,
      options: Object.values(Roles),
      admin: {
        description: 'Select the role for this user',
      },
    },
  ],
}
