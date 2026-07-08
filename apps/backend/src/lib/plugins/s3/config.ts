import { Plugin } from 'payload'
import { s3Storage, S3StorageOptions } from '@payloadcms/storage-s3'
import { S3_ACCESS_KEY_ID, S3_BUCKET_MEDIA, S3_ENDPOINT, S3_REGION, S3_SECRET_ACCESS_KEY } from '@/lib/constants/env'

const config: S3StorageOptions['config'] = {
  credentials: {
    accessKeyId: S3_ACCESS_KEY_ID,
    secretAccessKey: S3_SECRET_ACCESS_KEY,
  },
  region: S3_REGION,
  endpoint: S3_ENDPOINT,
  forcePathStyle: true,
}

export const S3Config: Plugin[] = [
  s3Storage({
    config,
    clientUploads: true,
    bucket: S3_BUCKET_MEDIA,
    collections: { media: true }
  }),
]
