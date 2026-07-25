import { SiteSetting } from '@jeius-portfolio/types/payload-types';
import { MailIcon, MapPinIcon, PhoneIcon } from 'lucide-react';
import { ExternalLink } from '~/components/ButtonLink';
import { Separator } from '~/components/ui/separator';
import { GithubIcon, LinkedinIcon } from './ui/icons';

interface FooterProps {
  settings?: {
    facebookUrl?: string;
  } & Pick<SiteSetting, 'email' | 'githubUrl' | 'linkedinUrl'>;
  siteName?: string;
  showSeparator?: boolean;
}

export default function Footer({
  settings = { email: 'pahamajulius@gmail.com' },
  siteName = 'Julius Pahama',
  showSeparator = true,
}: FooterProps) {
  const currentYear = new Date().getFullYear();
  const { email } = settings;
  const phone = '+63945-766-7954';
  const address = 'Calamba, Misamis Occidental';
  const addressLink = `https://www.google.com/maps/place/8%C2%B033'31.2%22N+123%C2%B038'37.9%22E/@8.5586593,123.6432203,19z/data=!3m1!4b1!4m4!3m3!8m2!3d8.558658!4d123.643864?entry=ttu&g_ep=EgoyMDI2MDcyMi4wIKXMDSoASAFQAw%3D%3D`;

  return (
    <footer>
      {showSeparator && <Separator className="mb-8" />}
      <div className="container mx-auto max-w-5xl flex flex-col sm:flex-row gap-4 pb-8 px-4">
        <div className="flex flex-col items-center sm:items-start h-fit sm:flex-1">
          <img src={'/favicon-64x64.png'} className="size-16" />
          <p className="text-xs sm:text-sm text-muted-foreground/80 mt-0 text-center sm:text-start">
            © {currentYear} {siteName}. All rights reserved.
          </p>
          <div className="flex gap-2 items-center mt-2">
            {settings.githubUrl && (
              <ExternalLink
                variant="ghost"
                href={settings.githubUrl}
                target="_blank"
                rel="noreferrer"
                size={'icon-lg'}
                className="fill-primary"
              >
                <GithubIcon className="size-6" />
              </ExternalLink>
            )}
            {settings.linkedinUrl && (
              <ExternalLink
                variant="ghost"
                href={settings.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                size={'icon-lg'}
                className="fill-primary"
              >
                <LinkedinIcon className="size-6" />
              </ExternalLink>
            )}
            {settings.facebookUrl && (
              <ExternalLink
                variant="link"
                href={settings.facebookUrl}
                target="_blank"
                rel="noreferrer"
              >
                Facebook
              </ExternalLink>
            )}
          </div>
        </div>
        <div className="flex flex-col items-center sm:items-start">
          <div className="flex flex-row items-center gap-1 text-muted-foreground text-sm">
            <PhoneIcon className="size-4" />
            <p className="mt-0" aria-label="Phone">
              {phone}
            </p>
          </div>
          <ExternalLink
            variant={'link'}
            className="px-0 justify-start text-muted-foreground"
            href={`mailto:${settings.email}`}
          >
            <MailIcon />
            <span>{email}</span>
          </ExternalLink>
          <ExternalLink
            variant={'link'}
            className="px-0 justify-start text-muted-foreground"
            href={addressLink}
          >
            <MapPinIcon />
            <span>{address}</span>
          </ExternalLink>
        </div>
      </div>
    </footer>
  );
}
