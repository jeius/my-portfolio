import {
  forwardRef,
  HTMLAttributes,
  type PropsWithChildren,
} from "react";
import { cn } from "~/lib/utils";

type TypographyProps<T extends object> = PropsWithChildren<
  HTMLAttributes<T> & {
    className?: string;
  }
>;

export const H1 = forwardRef<
  HTMLHeadingElement,
  TypographyProps<HTMLHeadingElement>
>(({ children, className, ...props }, ref) => {
  return (
    <h1
      {...props}
      ref={ref}
      className={cn(
        "scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance",
        className,
      )}
    >
      {children}
    </h1>
  );
});
H1.displayName = "H1";

export const H2 = forwardRef<
  HTMLHeadingElement,
  TypographyProps<HTMLHeadingElement>
>(({ children, className, ...props }, ref) => {
  return (
    <h2
      {...props}
      ref={ref}
      className={cn(
        "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0",
        className,
      )}
    >
      {children}
    </h2>
  );
});
H2.displayName = "H2";

export const H3 = forwardRef<
  HTMLHeadingElement,
  TypographyProps<HTMLHeadingElement>
>(({ children, className, ...props }, ref) => {
  return (
    <h3
      {...props}
      ref={ref}
      className={cn(
        "scroll-m-20 text-2xl font-semibold tracking-tight",
        className,
      )}
    >
      {children}
    </h3>
  );
});
H3.displayName = "H3";

export const H4 = forwardRef<
  HTMLHeadingElement,
  TypographyProps<HTMLHeadingElement>
>(({ children, className, ...props }, ref) => {
  return (
    <h4
      {...props}
      ref={ref}
      className={cn(
        "scroll-m-20 text-xl font-semibold tracking-tight",
        className,
      )}
    >
      {children}
    </h4>
  );
});
H4.displayName = "H4";

export const P = forwardRef<
  HTMLParagraphElement,
  TypographyProps<HTMLParagraphElement>
>(({ children, className, ...props }, ref) => {
  return (
    <p
      {...props}
      ref={ref}
      className={cn("leading-7 not-first:mt-6", className)}
    >
      {children}
    </p>
  );
});
P.displayName = "P";

export const Span = forwardRef<
  HTMLSpanElement,
  TypographyProps<HTMLSpanElement>
>(({ children, className, ...props }, ref) => {
  return (
    <span {...props} ref={ref} className={cn("leading-7", className)}>
      {children}
    </span>
  );
});
Span.displayName = "Span";

export const BlockQuote = forwardRef<
  HTMLQuoteElement,
  TypographyProps<HTMLQuoteElement>
>(({ children, className, ...props }, ref) => {
  return (
    <blockquote
      {...props}
      ref={ref}
      className={cn("mt-6 border-l-2 pl-6 italic", className)}
    >
      {children}
    </blockquote>
  );
});
BlockQuote.displayName = "BlockQuote";

export const InlineCode = forwardRef<
  HTMLScriptElement,
  TypographyProps<HTMLScriptElement>
>(({ children, className }, ref) => {
  return (
    <code ref={ref} className={cn("mt-6 border-l-2 pl-6 italic", className)}>
      {children}
    </code>
  );
});
InlineCode.displayName = "InlineCode";

export const SmallText = forwardRef<HTMLElement, TypographyProps<HTMLElement>>(
  ({ children, className, ...props }, ref) => {
    return (
      <small
        {...props}
        ref={ref}
        className={cn("text-sm leading-none font-medium", className)}
      >
        {children}
      </small>
    );
  },
);
SmallText.displayName = "SmallText";
