// src/config/env.ts
import { z } from 'zod';

const envSchema = z.object({
  API_URL: z.url(),
});

const clientEnvSchema = z.object({
  VITE_API_URL: z.url(),
});

/**
 * For Cloudflare workers and other edge runtimes
 */
export function getServerEnv() {
  return envSchema.parse(process.env);
}

export const serverEnv = envSchema.parse(process.env);

// Validate client environment (build-time, always safe)
export const clientEnv = clientEnvSchema.parse(import.meta.env);
