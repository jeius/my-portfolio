import { Code2Icon, DatabaseIcon, LucideIcon, LucideProps } from 'lucide-react';
import { motion, Variants } from 'motion/react';
import { createElement, FC, HTMLAttributes } from 'react';
import { cn, toSVGPolylineString, useElementRect } from '~/lib/utils';
import { DockerIcon, FigmaIcon, NodeJsIcon, ReactIcon } from './ui/icons';

const containerID = '_svg-container';
const upperLeftIconID = '_upper-left-icon';
const upperLeftPointID = '_upper-left-point';
const upperRightIconID = '_upper-right-icon';
const upperRightPointID = '_upper-right-point';
const middleLeftIconID = '_middle-left-icon';
const middleLeftInnerPointID = '_middle-left-inner-point';
const middleRightIconID = '_middle-right-icon';
const middleRightInnerPointID = '_middle-right-inner-point';
const middleLeftOuterPointID = '_middle-left-outer-point';
const middleRightOuterPointID = '_middle-right-outer-point';
const lowerLeftIconID = '_lower-left-icon';
const lowerLeftPointID = '_lower-left-point';
const lowerRightIconID = '_lower-right-icon';
const lowerRightPointID = '_lower-right-point';

const BASE_ANIMATION_DELAY = 2;

function PointGuide({ id }: { id: string }) {
  return <div id={id} className="size-0.5 rounded-full" />;
}

function Icon({
  as,
  className,
  ...props
}: { as: LucideIcon | FC<LucideProps> } & HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      {...props}
      className="flex items-center justify-center border rounded-lg p-2 sm:p-3 bg-card shadow"
    >
      {createElement(as, { className: cn('fill-foreground size-6 sm:size-8', className) })}
    </div>
  );
}

function LineShimmer({ id, direction = 'rtl' }: { id: string; direction?: 'rtl' | 'ltr' }) {
  const isRTL = direction === 'rtl';
  const variants: Variants = !isRTL
    ? {
        start: { x1: '100%', x2: '120%' },
        mid: { x1: '40%', x2: '60%' },
        end: { x1: '-20%', x2: '0%' },
      }
    : {
        start: { x1: '0%', x2: '-20%' },
        mid: { x1: '60%', x2: '40%' },
        end: { x1: '120%', x2: '100%' },
      };

  return (
    <defs>
      <motion.linearGradient
        id={id}
        className="transform-gpu"
        gradientUnits="userSpaceOnUse"
        initial="start"
        animate={['start', 'end']}
        transition={{
          delay: BASE_ANIMATION_DELAY + 1,
          duration: 3,
          repeat: Infinity,
          repeatType: 'loop',
          ease: 'linear',
        }}
        variants={variants}
      >
        <stop stopColor={isRTL ? 'var(--primary)' : 'var(--foreground)'} stopOpacity={0} />
        <stop stopColor={isRTL ? 'var(--primary)' : 'var(--foreground)'} />
        <stop offset="50%" stopColor="currentColor" />
        <stop offset="100%" stopColor="currentColor" stopOpacity={0} />
      </motion.linearGradient>
    </defs>
  );
}

function TechStackSVG({
  strokeWidth = 2,
  stroke = 'currentColor',
  className,
  containerClassName,
  ...props
}: LucideProps & { containerClassName?: string }) {
  const containerRect = useElementRect(containerID);
  const containerHeight = containerRect?.height ?? 182;
  const containerWidth = containerRect?.width ?? 992;

  const midPoint = { x: containerWidth / 2, y: containerHeight / 2 };
  const viewBox = `0 0 ${containerWidth} ${containerHeight}`;

  const baseStrokeOpacity = 0.75;

  const getRelativeMidPoint = (rect?: DOMRect | null) => {
    if (!rect) return { x: 0, y: 0 };
    const offsetX = containerRect?.x ?? 0;
    const offsetY = containerRect?.y ?? 0;
    const midX = Math.max(rect.x - offsetX, 0) + rect.width / 2;
    const midY = Math.max(rect.y - offsetY) + rect.height / 2;
    return { x: Math.round(midX), y: Math.round(midY) };
  };

  const upperLeftIconPoint = getRelativeMidPoint(useElementRect(upperLeftIconID));
  const upperLeftPoint = getRelativeMidPoint(useElementRect(upperLeftPointID));
  const upperRightIconPoint = getRelativeMidPoint(useElementRect(upperRightIconID));
  const upperRightPoint = getRelativeMidPoint(useElementRect(upperRightPointID));

  const midLeftIconPoint = getRelativeMidPoint(useElementRect(middleLeftIconID));
  const midLeftInnerPoint = getRelativeMidPoint(useElementRect(middleLeftInnerPointID));
  const midLeftOuterPoint = getRelativeMidPoint(useElementRect(middleLeftOuterPointID));
  const midRightIconPoint = getRelativeMidPoint(useElementRect(middleRightIconID));
  const midRightInnerPoint = getRelativeMidPoint(useElementRect(middleRightInnerPointID));
  const midRightOuterPoint = getRelativeMidPoint(useElementRect(middleRightOuterPointID));

  const lowerLeftIconPoint = getRelativeMidPoint(useElementRect(lowerLeftIconID));
  const lowerLeftPoint = getRelativeMidPoint(useElementRect(lowerLeftPointID));
  const lowerRightIconPoint = getRelativeMidPoint(useElementRect(lowerRightIconID));
  const lowerRightPoint = getRelativeMidPoint(useElementRect(lowerRightPointID));

  const createVariants = (staggerDelay: number, duration: number = 1): Variants => {
    return {
      initial: { pathLength: 0 },
      animate: {
        pathLength: 1,
        transition: {
          delay: (BASE_ANIMATION_DELAY + 0.6) + (duration * staggerDelay),
          ease: 'linear',
          duration,
        },
      },
    };
  };

  return (
    <div id={containerID} className={cn('size-full', containerClassName)}>
      <svg
        {...props}
        viewBox={viewBox}
        width={containerWidth}
        height={containerHeight}
        fill="none"
        strokeWidth={strokeWidth}
        stroke={stroke}
        xmlns="http://www.w3.org/2000/svg"
        className={cn('absolute inset-0', className)}
      >
        <motion.line
          initial="initial"
          animate="animate"
          variants={createVariants(0)}
          x1={midPoint.x}
          y1={midPoint.y}
          x2={midLeftIconPoint.x}
          y2={midLeftIconPoint.y}
          strokeOpacity={baseStrokeOpacity}
        />

        <line
          x1={midPoint.x}
          y1={midPoint.y}
          x2={midLeftIconPoint.x}
          y2={midLeftIconPoint.y}
          stroke="url('#middle_left_gradient')"
        />

        <LineShimmer id="middle_left_gradient" direction="ltr" />
      </svg>
      <svg
        {...props}
        viewBox={viewBox}
        width={containerWidth}
        height={containerHeight}
        fill="none"
        strokeWidth={strokeWidth}
        stroke={stroke}
        xmlns="http://www.w3.org/2000/svg"
        className={cn('absolute inset-0', className)}
      >
        <motion.polyline
          initial="initial"
          animate="animate"
          variants={createVariants(1.6, 0.45)}
          points={toSVGPolylineString([midLeftOuterPoint, upperLeftPoint, upperLeftIconPoint])}
          strokeOpacity={baseStrokeOpacity}
        />

        <polyline
          points={toSVGPolylineString([midLeftOuterPoint, upperLeftPoint, upperLeftIconPoint])}
          stroke="url('#upper_left_gradient')"
        />

        <LineShimmer id="upper_left_gradient" direction="ltr" />
      </svg>
      <svg
        {...props}
        viewBox={viewBox}
        width={containerWidth}
        height={containerHeight}
        fill="none"
        strokeWidth={strokeWidth}
        stroke={stroke}
        xmlns="http://www.w3.org/2000/svg"
        className={cn('absolute inset-0', className)}
      >
        <motion.polyline
          initial="initial"
          animate="animate"
          variants={createVariants(1.6, 0.45)}
          points={toSVGPolylineString([midRightOuterPoint, upperRightPoint, upperRightIconPoint])}
          strokeOpacity={baseStrokeOpacity}
        />

        <polyline
          points={toSVGPolylineString([midRightOuterPoint, upperRightPoint, upperRightIconPoint])}
          stroke="url('#upper_right_gradient')"
        />

        <LineShimmer id="upper_right_gradient" direction="rtl" />
      </svg>
      <svg
        {...props}
        viewBox={viewBox}
        width={containerWidth}
        height={containerHeight}
        fill="none"
        strokeWidth={strokeWidth}
        stroke={stroke}
        xmlns="http://www.w3.org/2000/svg"
        className={cn('absolute inset-0', className)}
      >
        <motion.line
          initial="initial"
          animate="animate"
          variants={createVariants(0)}
          x1={midPoint.x}
          y1={midPoint.y}
          x2={midRightIconPoint.x}
          y2={midRightIconPoint.y}
          strokeOpacity={baseStrokeOpacity}
        />

        <line
          x1={midPoint.x}
          y1={midPoint.y}
          x2={midRightIconPoint.x}
          y2={midRightIconPoint.y}
          stroke="url('#middle_right_gradient')"
        />

        <LineShimmer id="middle_right_gradient" direction="rtl" />
      </svg>
      <svg
        {...props}
        viewBox={viewBox}
        width={containerWidth}
        height={containerHeight}
        fill="none"
        strokeWidth={strokeWidth}
        stroke={stroke}
        xmlns="http://www.w3.org/2000/svg"
        className={cn('absolute inset-0', className)}
      >
        <motion.polyline
          initial="initial"
          animate="animate"
          variants={createVariants(1, 0.6)}
          points={toSVGPolylineString([midLeftInnerPoint, lowerLeftPoint, lowerLeftIconPoint])}
          strokeOpacity={baseStrokeOpacity}
        />

        <polyline
          points={toSVGPolylineString([midLeftInnerPoint, lowerLeftPoint, lowerLeftIconPoint])}
          stroke="url('#lower_left_gradient')"
        />

        <LineShimmer id="lower_left_gradient" direction="ltr" />
      </svg>
      <svg
        {...props}
        viewBox={viewBox}
        width={containerWidth}
        height={containerHeight}
        fill="none"
        strokeWidth={strokeWidth}
        stroke={stroke}
        xmlns="http://www.w3.org/2000/svg"
        className={cn('absolute inset-0', className)}
      >
        <motion.polyline
          initial="initial"
          animate="animate"
          variants={createVariants(1, 0.6)}
          points={toSVGPolylineString([midRightInnerPoint, lowerRightPoint, lowerRightIconPoint])}
          strokeOpacity={baseStrokeOpacity}
        />

        <polyline
          points={toSVGPolylineString([midRightInnerPoint, lowerRightPoint, lowerRightIconPoint])}
          stroke="url('#lower_right_gradient')"
        />
        <LineShimmer id="lower_right_gradient" direction="rtl" />
      </svg>
    </div>
  );
}

export function TechStack() {
  return (
    <motion.div
      initial={{ opacity: 0, translateY: 64 }}
      animate={{
        opacity: 1,
        translateY: 0,
        transition: { delay: BASE_ANIMATION_DELAY, duration: 1, ease: 'easeInOut' },
      }}
      className="relative flex w-full h-fit"
    >
      <TechStackSVG
        containerClassName="absolute inset-x-0 -z-1"
        className="transform-gpu text-border"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <div className="flex flex-col flex-1 gap-4">
        <div className="flex flex-row w-full h-fit gap-10 xs:gap-0">
          <div className="flex flex-1 items-center justify-between xs:justify-start xs:gap-14 sm:gap-20 md:gap-24">
            <Icon id={upperLeftIconID} as={DockerIcon} aria-label="Docker" />
            <PointGuide id={upperLeftPointID} />
          </div>
          <div className="flex flex-1 items-center justify-between xs:justify-end xs:gap-14 sm:gap-20 md:gap-24">
            <PointGuide id={upperRightPointID} />
            <Icon id={upperRightIconID} as={FigmaIcon} aria-label="Figma" />
          </div>
        </div>

        <div className="relative flex flex-row flex-1 items-center sm:px-18 md:px-24">
          <div className="flex flex-1 items-center justify-between xs:justify-start">
            <Icon
              id={middleLeftIconID}
              as={DatabaseIcon}
              aria-label="Database"
              className="fill-none stroke-foreground"
            />
            <div className="flex-1 xs:max-w-20 md:max-w-24" />
            <PointGuide id={middleLeftOuterPointID} />
            <div className="w-0 xs:w-8 md:w-12" />
            <PointGuide id={middleLeftInnerPointID} />
          </div>

          <div className="flex flex-1 items-center justify-between xs:justify-end">
            <PointGuide id={middleRightInnerPointID} />
            <div className="w-0 xs:w-8 md:w-12" />
            <PointGuide id={middleRightOuterPointID} />
            <div className="flex-1 xs:max-w-20 md:max-w-24" />
            <Icon
              id={middleRightIconID}
              as={Code2Icon}
              aria-label="HTML"
              className="fill-none stroke-foreground"
            />
          </div>

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="rounded-2xl p-2 border bg-background">
              <div className="size-16 md:size-20 flex items-center justify-center border rounded-lg p-2 bg-card shadow">
                <img src={'/favicon-64x64.png'} />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-row w-full h-fit gap-10 xs:gap-0 md:px-6">
          <div className="flex flex-1 items-center justify-between xs:justify-start xs:gap-14 sm:gap-20 md:gap-24">
            <Icon id={lowerLeftIconID} as={NodeJsIcon} aria-label="Node.js" />
            <PointGuide id={lowerLeftPointID} />
          </div>
          <div className="flex flex-1 items-center justify-between xs:justify-end xs:gap-14 sm:gap-20 md:gap-24">
            <PointGuide id={lowerRightPointID} />
            <Icon id={lowerRightIconID} as={ReactIcon} aria-label="React" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
