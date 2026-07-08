import path from 'path';
import fs from 'fs';
import { CollectionSlug, PayloadRequest } from 'payload';
import {
  BACKEND_SKILLS,
  BIO,
  EMAIL,
  FRONTEND_SKILLS,
  FULL_STACK_MOBILE_DEVELOPER,
  GITHUB_URL,
  INTERN_WEB_DEVELOPER,
  LACTALINK,
  LINKEDIN_URL,
  PHONE,
  TMS,
} from './data';
import { getServerSideURL } from '@/lib/utils/getURL';

export async function seedHandler(req: PayloadRequest, signal: AbortSignal) {
  const { payload } = req;

  // 1. Clear existing data (optional, but good for idempotent seeding)
  const collectionsToDelete: CollectionSlug[] = ['projects', 'skills', 'experiences', 'media'];
  await Promise.all(
    collectionsToDelete.map((collection) =>
      payload.delete({
        collection,
        where: {},
      })
    )
  );

  // 2. Seed Skills
  const skillDocs: Record<string, number> = {};

  for (const skill of FRONTEND_SKILLS) {
    const doc = await payload.create({
      collection: 'skills',
      data: { name: skill, category: 'FRONTEND' },
    });
    skillDocs[skill] = doc.id;
  }

  for (const skill of BACKEND_SKILLS) {
    const doc = await payload.create({
      collection: 'skills',
      data: { name: skill, category: 'BACKEND' },
    });
    skillDocs[skill] = doc.id;
  }

  // 3. Handle Media Uploads
  const createMedia = async (filename: string, mimetype: string, alt: string) => {
    const filePath = path.join(process.cwd(), 'public', 'seed-images', filename);
    payload.logger.info(`Filepath: ${filePath}`)

    if (!fs.existsSync(filePath)) {
      console.warn(`File not found: ${filePath}. Skipping media upload.`);
      return null;
    }

    const fileData = fs.readFileSync(filePath);
    const stat = fs.statSync(filePath);

    const mediaDoc = await payload.create({
      collection: 'media',
      data: { alt },
      file: {
        data: fileData,
        mimetype: mimetype,
        name: filename,
        size: stat.size,
      },
    });

    return mediaDoc.id;
  };

  const avatarId = await createMedia('avatar.jpg', 'image/jpeg', 'Profile Picture');
  const lactalinkThumbId = await createMedia('lactalink.png', 'image/png', 'Lactalink App');
  const tmsThumbId = await createMedia('tms.png', 'image/png', 'Thesis Management System');

  // 4. Seed Globals
  await payload.updateGlobal({
    slug: 'profile',
    data: {
      _status: 'published',
      name: 'Julius Pahama',
      headline: 'Full Stack Developer crafting fast, scalable web and mobile apps.',
      bio: {
        root: {
          direction: 'ltr',
          format: '',
          indent: 0,
          type: 'root',
          version: 1,
          children: [
            {
              direction: 'ltr',
              format: '',
              indent: 0,
              type: 'paragraph',
              version: 1,
              children: [
                {
                  detail: 0,
                  format: 0,
                  mode: 'normal',
                  style: '',
                  text: BIO,
                  type: 'text',
                  version: 1,
                },
              ],
            },
          ],
        },
      },
      location: 'DBAN, Calamba, Misamis Occidental',
      willingToRelocate: true,
      avatar: avatarId ? avatarId : undefined,
    },
  });

  await payload.updateGlobal({
    slug: 'site-settings',
    data: {
      email: EMAIL,
      phone: PHONE,
      githubUrl: GITHUB_URL,
      linkedinUrl: LINKEDIN_URL,
    },
  });

  // 5. Seed Projects
  if (lactalinkThumbId) {
    await payload.create({
      collection: 'projects',
      data: {
        ...LACTALINK,
        description: {
          root: {
            direction: 'ltr',
            format: '',
            indent: 0,
            type: 'root',
            version: 1,
            children: [
              {
                direction: 'ltr',
                format: '',
                indent: 0,
                type: 'paragraph',
                version: 1,
                children: [
                  {
                    detail: 0,
                    format: 0,
                    mode: 'normal',
                    style: '',
                    text: LACTALINK.description,
                    type: 'text',
                    version: 1,
                  },
                ],
              },
            ],
          },
        },
        relatedSkills: [...FRONTEND_SKILLS, ...BACKEND_SKILLS].map((skill) => skillDocs[skill]),
        thumbnail: lactalinkThumbId,
      },
    });
  }

  if (tmsThumbId) {
    await payload.create({
      collection: 'projects',
      data: {
        ...TMS,
        description: {
          root: {
            direction: 'ltr',
            format: '',
            indent: 0,
            type: 'root',
            version: 1,
            children: [
              {
                direction: 'ltr',
                format: '',
                indent: 0,
                type: 'paragraph',
                version: 1,
                children: [
                  {
                    detail: 0,
                    format: 0,
                    mode: 'normal',
                    style: '',
                    text: TMS.description,
                    type: 'text',
                    version: 1,
                  },
                ],
              },
            ],
          },
        },
        relatedSkills: [skillDocs['React'], skillDocs['Next.js']].filter(Boolean),
        thumbnail: tmsThumbId,
      },
    });
  }

  // 6. Seed Experiences
  await payload.create({
    collection: 'experiences',
    data: {
      ...FULL_STACK_MOBILE_DEVELOPER,
      responsibilities: {
        root: {
          direction: 'ltr',
          format: '',
          indent: 0,
          type: 'root',
          version: 1,
          children: [
            {
              direction: 'ltr',
              format: '',
              indent: 0,
              type: 'paragraph',
              version: 1,
              children: [
                {
                  detail: 0,
                  format: 0,
                  mode: 'normal',
                  style: '',
                  text: FULL_STACK_MOBILE_DEVELOPER.responsibilities,
                  type: 'text',
                  version: 1,
                },
              ],
            },
          ],
        },
      },
    },
  });

  await payload.create({
    collection: 'experiences',
    data: {
      ...INTERN_WEB_DEVELOPER,
      responsibilities: {
        root: {
          direction: 'ltr',
          format: '',
          indent: 0,
          type: 'root',
          version: 1,
          children: [
            {
              direction: 'ltr',
              format: '',
              indent: 0,
              type: 'paragraph',
              version: 1,
              children: [
                {
                  detail: 0,
                  format: 0,
                  mode: 'normal',
                  style: '',
                  text: INTERN_WEB_DEVELOPER.responsibilities,
                  type: 'text',
                  version: 1,
                },
              ],
            },
          ],
        },
      },
    },
  });

  return { success: true, message: 'Database seeded successfully!' };
}
