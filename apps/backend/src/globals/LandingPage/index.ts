import { GlobalConfig } from 'payload'
import { GlobalGroups } from '@/lib/constants/globals'
import { heroTab } from './tabs/hero'
import { aboutTab } from './tabs/about'

export const LandingPage: GlobalConfig = {
  slug: 'landing-page',
  label: 'Landing Page',
  admin: {
    group: GlobalGroups.pages,
    description:
      'Configure the content of the landing page, including hero section, slogans, and featured images.',
  },
  fields: [
    {
      type: 'upload',
      name: 'logo',
      label: 'Logo',
      required: true,
      relationTo: 'media',
    },
    {
      type: 'checkbox',
      name: 'showAboutSection',
      label: 'Show About Section',
      defaultValue: true,
      admin: {
        position: 'sidebar',
        description: `Toggle the visibility of the About section on the landing page.`,
      },
    },
    {
      type: 'tabs',
      tabs: [
        heroTab(),
        aboutTab({
          admin: { condition: (_data, siblingData) => siblingData.showAboutSection === true },
        }),
      ],
    },
  ],
}
