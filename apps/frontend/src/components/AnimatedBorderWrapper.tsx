import { type PropsWithChildren } from 'react';

function AnimatedBorderWrapper({ children }: PropsWithChildren) {
  return (
    <div className="relative overflow-hidden rounded-full w-fit h-fit p-px">
      {/* The spinning gradient layer.
              We use an oversized width/height to ensure the gradient covers all corners of rectangular wrappers as it rotates.
            */}
      <div className="absolute top-1/2 left-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 bg-conic from-transparent to-primary from-70% to-100% animate-[spin_3s_linear_infinite]" />

      {/* The inner content layer.
              CRITICAL: The background color here (bg-white) must match your page's background.
            */}
      <div className="relative flex z-10 rounded-full bg-background">{children}</div>
    </div>
  );
}

export default AnimatedBorderWrapper;
