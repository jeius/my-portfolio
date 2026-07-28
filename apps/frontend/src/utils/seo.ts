import { SiteMeta } from '@jeius-portfolio/types/payload-types';
import { extractObject } from '@jeius-portfolio/utilities/extractors';

const DEFAULT_TITLE = 'Julius Pahama';
const DEFAULT_DESCRIPTION = `Julius Pahama is a mobile and web developer specializing in building modern web applications with React, TypeScript, and Node.js. He is passionate about creating user-friendly interfaces and scalable backend systems.`;

export const seo = ({
  title,
  description,
  keywords,
  image,
}: {
  keywords?: string;
} & SiteMeta) => {
  const imageUrl = extractObject(image)?.url;
  const seoTitle = title || DEFAULT_TITLE;
  const seoDescription = description || DEFAULT_DESCRIPTION;
  const tags = [
    { title: seoTitle },
    { name: 'description', content: seoDescription },
    { name: 'keywords', content: keywords },
    { name: 'twitter:title', content: seoTitle },
    { name: 'twitter:description', content: seoDescription },
    { name: 'og:type', content: 'website' },
    { name: 'og:title', content: seoTitle },
    { name: 'og:description', content: seoDescription },
    ...(imageUrl
      ? [
          { name: 'twitter:image', content: imageUrl },
          { name: 'twitter:card', content: 'summary_large_image' },
          { name: 'og:image', content: imageUrl },
        ]
      : []),
  ];

  return tags;
};
