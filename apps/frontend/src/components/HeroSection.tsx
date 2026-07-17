import { Profile } from '@jeius-portfolio/types/payload-types';
import { convertLexicalToHTML } from '@payloadcms/richtext-lexical/html';
import { ArrowRightIcon } from 'lucide-react';
import AnimatedBorderWrapper from './AnimatedBorderWrapper';
import ButtonLink from './ButtonLink';
import { Badge } from './ui/badge';
import { P, H1 } from './ui/typography';

interface HeroSectionProps {
  profile: Profile;
  className?: string;
}

export function HeroSection({ profile, className }: HeroSectionProps) {
  const { name, bio, willingToRelocate } = profile;

  const bioHTML = convertLexicalToHTML({
    data: bio,
    disableContainer: true,
  });

  return (
    <section className={className}>
      <div className="relative flex flex-col space-y-8 max-w-xl z-10">
        <div className="relative space-y-2 animate-in fade-in slide-in-from-y-4 duration-700">
          {willingToRelocate && (
            <Badge
              variant="outline"
              className="px-4 py-2 text-sm border-primary/20 bg-primary/5 text-primary opacity-0 animate-in fade-in slide-in-from-y-4 duration-500 delay-100"
            >
              Available for relocation
            </Badge>
          )}
          <h1 className="text-4xl flex flex-col text-left gap-2 mb-4 opacity-0 animate-in fade-in slide-in-from-y-4 duration-700 delay-200">
            Hello I'm
            <strong className="text-6xl opacity-0 animate-in fade-in slide-in-from-x-4 duration-700 delay-300">{name}</strong>
            Full Stack Developer
          </h1>
          <div className="text-muted-foreground opacity-0 animate-in fade-in slide-in-from-y-4 duration-700 delay-400" dangerouslySetInnerHTML={{ __html: bioHTML }} />
        </div>

        <div className="flex flex-wrap gap-4 pt-4 opacity-0 animate-in fade-in slide-in-from-y-4 duration-700 delay-500">
          <ButtonLink to="/projects" size="lg">
            View My Work <ArrowRightIcon />
          </ButtonLink>
          <AnimatedBorderWrapper>
            <ButtonLink to="/contact" variant="secondary" size="lg">
              Get in Touch
            </ButtonLink>
          </AnimatedBorderWrapper>
        </div>
      </div>
    </section>
  );
}

interface HeroImageProps {
  url?: string | null;
  alt?: string | null;
}

export function HeroImage({ url: imageUrl, alt: imageAlt }: HeroImageProps) {
  return (
    <div className="absolute top-0 right-0 w-1/2 h-116 bg-accent rounded-bl-[128px] z-0 hidden lg:flex items-end overflow-hidden opacity-0 animate-in fade-in slide-in-from-y-4 duration-700 delay-600">
      <div className="pl-32 pr-6">
        {imageUrl && (
          <img
            src={imageUrl}
            alt={imageAlt || 'Profile Picture'}
            className="flex shrink-0 object-contain w-96 h-96 xl:w-116 xl:h-116 translate-y-12 opacity-0 animate-in fade-in slide-in-from-x-4 duration-700 delay-700"
          />
        )}
      </div>
    </div>
  );
}
