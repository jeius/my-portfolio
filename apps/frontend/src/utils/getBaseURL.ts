export function getBaseURL() {
  const localURL = 'http://localhost:3000';

  return process.env.URL || process.env.VERCEL_PRODUCTION_URL || process.env.COOLIFY_URL || localURL;
}