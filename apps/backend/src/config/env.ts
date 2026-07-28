import { z } from 'zod';

const envSchema = z.object({
  DATABASE_URL: z.string(),
  PAYLOAD_SECRET: z.string(),
  S3_ACCESS_KEY_ID: z.string(),
  S3_SECRET_ACCESS_KEY: z.string(),
  S3_REGION: z.string(),
  S3_ENDPOINT: z.string(),
  S3_BUCKET_MEDIA: z.string(),
  COOLIFY_URL: z.url().nullish(),
  NODE_ENV: z.enum(['development', 'production']).nullish(),
});

const clientEnvSchema = z.object({
  NEXT_PUBLIC_SUPABASE_URL: z.url(),
  NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL: z.url().nullish(),
  NEXT_PUBLIC_VERCEL_URL: z.url().nullish(),
});

/**
 * For Cloudflare workers and other edge runtimes
 */
export function getServerEnv() {
  return envSchema.parse(process.env);
}

export const serverEnv = envSchema.parse(process.env);

export const clientEnv = clientEnvSchema.parse(process.env);
