/// <reference types="vite/client" />

import { QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import {
  createRootRouteWithContext,
  HeadContent,
  Link,
  Outlet,
  Scripts,
} from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
import { DefaultCatchBoundary } from '~/components/DefaultCatchBoundary';
import { NotFound } from '~/components/NotFound';
import { Button } from '~/components/ui/button';
import { Separator } from '~/components/ui/separator';
import { TooltipProvider } from '~/components/ui/tooltip';
import appCss from '~/styles/app.css?url';
import { getSiteSettings } from '~/utils/api/siteSettings';
import { seo } from '~/utils/seo';

export const Route = createRootRouteWithContext<{
  queryClient: QueryClient;
}>()({
  loader: () => getSiteSettings(),
  head: ({ loaderData: settings }) => {
    return {
      meta: [
        {
          charSet: 'utf-8',
        },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1',
        },
        ...seo({ ...settings?.meta }),
      ],
      links: [
        { rel: 'stylesheet', href: appCss },
        {
          rel: 'apple-touch-icon',
          sizes: '192x192',
          href: '/apple-touch-icon.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '21x21',
          href: '/favicon-21x21.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '32x32',
          href: '/favicon-32x32.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '64x64',
          href: '/favicon-64x64.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '384x384',
          href: '/favicon-384x384.png',
        },
        { rel: 'manifest', href: '/site.webmanifest', color: '#fffff' },
        { rel: 'icon', href: '/favicon.ico' },
      ],
    };
  },
  errorComponent: (props) => {
    return (
      <RootDocument>
        <DefaultCatchBoundary {...props} />
      </RootDocument>
    );
  },
  notFoundComponent: () => <NotFound />,
  component: RootComponent,
});

function RootComponent() {
  return (
    <RootDocument>
      <Outlet />
    </RootDocument>
  );
}

function RootDocument({ children }: { children: React.ReactNode }) {
  const settings = Route.useLoaderData();

  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body className="min-h-screen bg-background text-foreground font-sans antialiased flex flex-col selection:bg-primary selection:text-primary-foreground">
        <TooltipProvider>
          <div className='progress-bar' />
          
          {/* Sticky, Frosted Glass Navbar */}
          <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
            <div className="container mx-auto p-4 flex justify-between items-center max-w-5xl">
              <Link to="/" className="hover:opacity-80 transition-opacity">
                <img
                  src={'/favicon-384x384.png'}
                  className="rounded-full w-16 aspect-square object-cover"
                />
              </Link>
              <nav className="flex gap-6 items-center">
                <Link
                  to="/about"
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors [&.active]:text-foreground"
                >
                  About
                </Link>
                <Link
                  to="/projects"
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors [&.active]:text-foreground"
                >
                  Projects
                </Link>
                <Link
                  to="/contact"
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors [&.active]:text-foreground"
                >
                  Contact
                </Link>
                {settings?.githubUrl && (
                  <Button variant="outline" size="sm" className="hidden sm:inline-flex">
                    <a href={settings.githubUrl} target="_blank" rel="noreferrer">
                      GitHub
                    </a>
                  </Button>
                )}
              </nav>
            </div>
          </header>

          <main className="flex-1">{children}</main>

          <footer className="container mx-auto max-w-5xl p-4 mt-auto">
            <Separator className="mb-8" />
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground pb-8">
              <p>© {new Date().getFullYear()} Julius Pahama. All rights reserved.</p>
              <div className="flex gap-6">
                {settings.linkedinUrl && (
                  <a
                    href={settings?.linkedinUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-foreground transition-colors"
                  >
                    LinkedIn
                  </a>
                )}
                <a
                  href={`mailto:${settings.email}`}
                  className="hover:text-foreground transition-colors"
                >
                  Email
                </a>
              </div>
            </div>
          </footer>

          <TanStackRouterDevtools position="bottom-right" />
          <ReactQueryDevtools buttonPosition="bottom-left" />
          <Scripts />
        </TooltipProvider>
      </body>
    </html>
  );
}
