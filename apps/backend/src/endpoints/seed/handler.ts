import fs from 'fs';
import path from 'path';
import { CollectionSlug, PayloadRequest } from 'payload';
import {
  BIO,
  EMAIL,
  FULL_STACK_MOBILE_DEVELOPER,
  GITHUB_URL,
  INTERN_WEB_DEVELOPER,
  LACTALINK,
  LACTALINK_SKILLS,
  LINKEDIN_URL,
  PHONE,
  TECHNICAL_SKILLS,
  TMS,
  TMS_SKILLS,
} from './data';

export async function seedHandler(req: PayloadRequest, signal: AbortSignal) {
  const { payload } = req;

  // 1. Clear existing data (optional, but good for idempotent seeding)
  const collectionsToDelete: CollectionSlug[] = [
    'payload-preferences',
    'payload-locked-documents',
    'projects',
    'skills',
    'skill-categories',
    'experiences',
    'media',
  ];

  await Promise.all(
    collectionsToDelete.map((collection) =>
      payload.delete({
        collection,
        where: {},
      })
    )
  );

  // 2. Seed Skills
  const skillDocs: Map<string, number> = new Map();

  await Promise.all(
    TECHNICAL_SKILLS.map(async ({ category, skills }) => {
      const categoryDoc = await payload.create({
        collection: 'skill-categories',
        data: { name: category },
      });
      return Promise.all(
        skills.map(async (skill) => {
          const skillDoc = await payload.create({
            collection: 'skills',
            data: { category: categoryDoc.id, name: skill },
          });
          skillDocs.set(skill, skillDoc.id);
          return skillDoc;
        })
      );
    })
  );

  // 3. Handle Media Uploads
  const createMedia = async (filename: string, mimetype: string, alt: string) => {
    const filePath = path.join(process.cwd(), 'public', 'seed-images', filename);

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

  const avatarId = await createMedia('avatar.png', 'image/png', 'Profile Picture');
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
          type: 'root',
          format: '',
          indent: 0,
          version: 1,
          children: [
            {
              tag: 'h3',
              type: 'heading',
              format: '',
              indent: 0,
              version: 1,
              children: [
                {
                  mode: 'normal',
                  text: BIO,
                  type: 'text',
                  style: '',
                  detail: 0,
                  format: 0,
                  version: 1,
                },
              ],
              direction: null,
            },
          ],
          direction: 'ltr',
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
                tag: 'p',
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
        relatedSkills: LACTALINK_SKILLS.map((s) => skillDocs.get(s)).filter(Boolean) as number[],
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
                tag: 'p',
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
        relatedSkills: TMS_SKILLS.map((s) => skillDocs.get(s)).filter(Boolean) as number[],
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
