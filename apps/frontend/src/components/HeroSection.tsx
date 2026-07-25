import { Profile } from '@jeius-portfolio/types/payload-types';
import { extractObject } from '@jeius-portfolio/utilities/extractors';
import { convertLexicalToHTML } from '@payloadcms/richtext-lexical/html';
import { ArrowRightIcon, PhoneIcon } from 'lucide-react';
import { motion, Transition, Variants } from 'motion/react';
import { cn } from '~/lib/utils';
import ButtonLink from './ButtonLink';
import { TechStack } from './TechStack';
import { Badge } from './ui/badge';

const transitionConfig: Transition = { duration: 0.5, ease: 'easeInOut' };

interface HeroSectionProps {
  profile: Profile;
  className?: string;
}

export function HeroSection({ profile, className }: HeroSectionProps) {
  const { name, bio, willingToRelocate, avatar } = profile;
  const avatarDoc = extractObject(avatar);
  const imageUrl = avatarDoc?.url;
  const imageAlt = avatarDoc?.alt;

  const bioHTML = convertLexicalToHTML({
    data: bio,
    disableContainer: true,
  });

  const animVariants = (delay: number): Variants => {
    return {
      hidden: { opacity: 0, translateX: -64 },
      visible: {
        opacity: 1,
        translateX: 0,
        transition: { ...transitionConfig, delay },
      },
    };
  };

  return (
    <section className="relative flex items-stretch flex-col">
      <HeroImage url={imageUrl} alt={imageAlt} />

      <div className={cn('flex flex-col items-center lg:items-start space-y-8 z-10', className)}>
        <motion.div initial="hidden" animate="visible" variants={animVariants(0.4)}>
          {willingToRelocate && (
            <Badge
              variant="outline"
              className="px-4 py-2 text-sm border-primary/20 bg-primary/5 text-primary"
            >
              Available for relocation
            </Badge>
          )}
        </motion.div>

        <motion.h1
          initial="hidden"
          animate="visible"
          variants={animVariants(0.7)}
          className="flex flex-col text-center lg:text-left gap-4"
        >
          <span className="text-2xl sm:text-4xl">Hello I'm</span>
          <strong className='sm:text-7xl'>{name}</strong>
          <span className="text-2xl sm:text-4xl">Full Stack Developer</span>
        </motion.h1>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={animVariants(0.9)}
          className="text-muted-foreground text-center lg:text-left max-w-xl"
          dangerouslySetInnerHTML={{ __html: bioHTML }}
        />

        <motion.div
          initial="hidden"
          animate="visible"
          variants={animVariants(1.3)}
          className="flex flex-wrap gap-4 pt-4 mb-24"
        >
          <ButtonLink to="/contact" size="lg">
            <PhoneIcon /> Hire me
          </ButtonLink>
          <ButtonLink to="/projects" variant="secondary" size="lg">
            My Projects <ArrowRightIcon />
          </ButtonLink>
        </motion.div>

        <TechStack />
      </div>
    </section>
  );
}

interface HeroImageProps {
  url?: string | null;
  alt?: string | null;
}

export function HeroImage({ url: imageUrl, alt: imageAlt }: HeroImageProps) {
  const containerHeight = 472;
  const translateY = 32;
  const imgOffset = 48;
  return (
    <motion.div
      initial={{ opacity: 0, height: containerHeight + translateY }}
      animate={{ opacity: 1, height: containerHeight }}
      transition={{ ...transitionConfig, delay: 1.8, delayChildren: 0.2 }}
      className="absolute top-0 right-0 w-1/2 bg-accent rounded-bl-[128px] z-0 hidden lg:flex items-end overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, translateY: translateY + imgOffset }}
        animate={{ opacity: 1, translateY: imgOffset }}
        transition={transitionConfig}
        className="pl-32 pr-6"
      >
        {imageUrl && (
          <img
            src={imageUrl}
            alt={imageAlt || 'Profile Picture'}
            className="flex shrink-0 object-contain w-96 h-96 xl:w-116 xl:h-116"
          />
        )}
      </motion.div>
    </motion.div>
  );
}
