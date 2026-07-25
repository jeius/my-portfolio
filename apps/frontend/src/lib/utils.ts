import { clsx, type ClassValue } from "clsx";
import { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function useElementRect(id: string) {
  const [rect, setRect] = useState<DOMRect | null>(null);
  const animationFrameRef = useRef<number>(0);
  const lastRectRef = useRef<DOMRect | null>(null);

  const rectEquals = (a: DOMRect | null, b: DOMRect | null): boolean => {
    if (a === b) return true;
    if (!a || !b) return false;
    return (
      a.left === b.left &&
      a.top === b.top &&
      a.right === b.right &&
      a.bottom === b.bottom &&
      a.width === b.width &&
      a.height === b.height
    );
  };

  useEffect(() => {
    const element = document.getElementById(id);
    if (!element) return;

    const update = () => {
      if (element) {
        const newRect = element.getBoundingClientRect();
        if (!rectEquals(lastRectRef.current, newRect)) {
          setRect(newRect);
          lastRectRef.current = newRect;
        }
      }
    };

    const resizeObserver = new ResizeObserver(update);
    resizeObserver.observe(element);

    const loop = () => {
      update();
      animationFrameRef.current = requestAnimationFrame(loop);
    };
    animationFrameRef.current = requestAnimationFrame(loop);

    return () => {
      resizeObserver.disconnect();
      cancelAnimationFrame(animationFrameRef.current);
    };
  }, [id]);

  return rect;
}

export function toSVGPolylineString(points: { x: number; y: number }[]): string {
  return points.map(({x, y}) => `${x} ${y}`).join(' ')
}