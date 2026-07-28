import { clientEnv, serverEnv } from '@/config/env';
import canUseDOM from './canUseDOM';

const localHost = 'http://localhost:4000';

export const getClientSideURL = (): string => {
  if (!canUseDOM) return getServerSideURL();

  const protocol = window.location.protocol;
  const domain = window.location.hostname;
  const port = window.location.port;
  const origin = window.location.origin;

  return origin || `${protocol}//${domain}${port ? `:${port}` : ''}`;
};

export const getServerSideURL = (): string => {
  const vercelProdUrl = clientEnv.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL || clientEnv.NEXT_PUBLIC_VERCEL_URL;
  const coolifyUrl = serverEnv.COOLIFY_URL;

  if (vercelProdUrl) {
    return `https://${vercelProdUrl}`;
  } else if (coolifyUrl) {
    return coolifyUrl;
  }
  return localHost;
};

export function validateUrl(url: unknown): url is string {
  try {
    if (!url || typeof url !== 'string' || url.trim() === '') {
      return false;
    }

    const parsedUrl = new URL(url);
    return parsedUrl.protocol.includes('http:') || parsedUrl.protocol.includes('https:');
  } catch (_) {
    return false;
  }
}
