import { clientEnv, serverEnv } from '@/config/env';
import { s3Storage, S3StorageOptions } from '@payloadcms/storage-s3';
import { Plugin } from 'payload';

const config: S3StorageOptions['config'] = {
  credentials: {
    accessKeyId: serverEnv.S3_ACCESS_KEY_ID,
    secretAccessKey: serverEnv.S3_SECRET_ACCESS_KEY,
  },
  region: serverEnv.S3_REGION,
  endpoint: serverEnv.S3_ENDPOINT,
  forcePathStyle: true,
};

export const S3Config: Plugin[] = [
  s3Storage({
    config,
    clientUploads: true,
    bucket: serverEnv.S3_BUCKET_MEDIA,
    collections: {
      media: {
        disablePayloadAccessControl: true,
        generateFileURL: ({ filename, prefix }) => {
          const base = clientEnv.NEXT_PUBLIC_SUPABASE_URL;
          const bucket = serverEnv.S3_BUCKET_MEDIA;
          const path = prefix ? `${prefix}/${filename}` : filename;
          return `${base}/storage/v1/object/public/${bucket}/${path}`;
        },
      },
    },
  }),
];
