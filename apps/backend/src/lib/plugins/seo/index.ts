import { getServerSideURL } from '@/lib/utils/getURL';
import { extractObject } from '@jeius-portfolio/utilities/extractors';
import { seoPlugin } from '@payloadcms/plugin-seo';

export const seoPluginConfig = seoPlugin({
  globals: ['site-settings'],
  uploadsCollection: 'media',
  interfaceName: 'SiteMeta',
  generateImage: async ({ req }) => {
    const { payload } = req;
    const profile = await payload.findGlobal({ slug: 'profile' });
    const avatarDoc = extractObject(profile.avatar);
    return avatarDoc || getServerSideURL() + '/seed-images/avatar.jpg';
  },
  generateURL: () => getServerSideURL(),
  generateTitle: () => 'Julius P. Pahama | Full Stack Mobile & Web Developer',
  generateDescription: () =>
    'Julius Pahama is a mobile and web developer specializing in building modern web applications with React, TypeScript, and Node.js',
});
