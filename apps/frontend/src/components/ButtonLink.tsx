import { createLink } from '@tanstack/react-router';
import { VariantProps } from 'class-variance-authority';
import { AnchorHTMLAttributes } from 'react';
import { cn } from '~/lib/utils';
import { buttonVariants } from './ui/button';

type ButtonLinkProps = VariantProps<typeof buttonVariants> &
  AnchorHTMLAttributes<HTMLAnchorElement>;

function Link({ className, variant, size, children, ...props }: ButtonLinkProps) {
  return (
    <a
      {...props}
      data-slot="button-link"
      className={cn(buttonVariants({ variant, size }), className)}
    >
      {children}
    </a>
  );
}

function ExternalLink({
  target = '_blank',
  rel = 'noopener noreferrer',
  ...props
}: ButtonLinkProps) {
  return <Link {...props} target={target} rel={rel} />;
}

const ButtonLink = createLink(Link);

export { ButtonLink, ExternalLink };

export default ButtonLink;
