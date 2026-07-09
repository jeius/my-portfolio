import { admin } from '@/access'
import { CollectionConfig } from 'payload'

export const SkillCategories: CollectionConfig = {
  slug: 'skill-categories',
  access: {
    read: () => true,
    create: admin,
    update: admin,
    delete: admin,
  },
  admin: { useAsTitle: 'name', defaultColumns: ['name'], hidden: true },
  fields: [
    { name: 'name', type: 'text', required: true, unique: true },
  ],
}