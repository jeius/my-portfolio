import { admin } from '@/access'
import { CollectionConfig } from 'payload'
import { SkillCategories } from '@jeius-portfolio/enums'

export const Skills: CollectionConfig = {
  slug: 'skills',
  access: {
    read: () => true,
    create: admin,
    update: admin,
    delete: admin,
  },
  admin: { useAsTitle: 'name', defaultColumns: ['name', 'category'] },
  fields: [
    { name: 'name', type: 'text', required: true, unique: true },
    {
      name: 'category',
      type: 'select',
      required: true,
      enumName: 'enum_skills_category',
      options: Object.values(SkillCategories),
    },
  ],
}