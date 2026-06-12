"use client";

import { Children, useCallback, useLayoutEffect, useRef, type ReactNode } from "react";
import Lenis from "lenis";
import { cn } from "@/lib/utils";
import { smoothScrollOptions, useSmoothScroll } from "@/components/ui/smooth-scroll-provider";

type ScrollStackProps = {
  children: ReactNode;
  className?: string;
  itemDistance?: number;
  itemScale?: number;
  itemStackDistance?: number;
  stackPosition?: string;
  scaleEndPosition?: string;
  baseScale?: number;
  rotationAmount?: number;
  blurAmount?: number;
  useWindowScroll?: boolean;
  disabledBelow?: number;
  endSpacing?: number;
  releaseOffset?: number;
  onStackComplete?: () => void;
};

type ScrollStackItemProps = {
  children: ReactNode;
  itemClassName?: string;
};

export function ScrollStackItem({ children, itemClassName }: ScrollStackItemProps) {
  return (
    <div
      data-scroll-stack-card
      className={cn(
        "relative w-full transform-gpu will-change-[transform,filter] [backface-visibility:hidden] [transform-origin:top_center] [transform-style:preserve-3d]",
        itemClassName,
      )}
    >
      {children}
    </div>
  );
}

export default function ScrollStack({
  children,
  className,
  itemDistance = 100,
  itemScale = 0.03,
  itemStackDistance = 30,
  stackPosition = "20%",
  scaleEndPosition = "10%",
  baseScale = 0.85,
  rotationAmount = 0,
  blurAmount = 0,
  useWindowScroll = true,
  disabledBelow = 0,
  endSpacing = 720,
  releaseOffset,
  onStackComplete,
}: ScrollStackProps) {
  const { isManaged: isWindowScrollManaged } = useSmoothScroll();
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const stackCompletedRef = useRef(false);
  const animationFrameRef = useRef<number | null>(null);
  const lenisRef = useRef<Lenis | null>(null);
  const cardsRef = useRef<HTMLElement[]>([]);
  const lastTransformsRef = useRef(new Map<number, { translateY: number; scale: number; rotation: number; blur: number }>());
  const isUpdatingRef = useRef(false);

  const calculateProgress = useCallback((scrollTop: number, start: number, end: number) => {
    if (scrollTop < start) return 0;
    if (scrollTop > end) return 1;
    return (scrollTop - start) / (end - start);
  }, []);

  const parsePosition = useCallback((value: string | number, containerHeight: number) => {
    if (typeof value === "string" && value.includes("%")) {
      return (parseFloat(value) / 100) * containerHeight;
    }

    return parseFloat(String(value));
  }, []);

  const getScrollData = useCallback(() => {
    if (useWindowScroll) {
      return {
        scrollTop: window.scrollY,
        containerHeight: window.innerHeight,
      };
    }

    const scroller = scrollerRef.current;

    return {
      scrollTop: scroller?.scrollTop ?? 0,
      containerHeight: scroller?.clientHeight ?? window.innerHeight,
    };
  }, [useWindowScroll]);

  const getElementOffset = useCallback(
    (element: HTMLElement) => {
      if (useWindowScroll) {
        let offset = 0;
        let node: HTMLElement | null = element;

        while (node) {
          offset += node.offsetTop;
          node = node.offsetParent as HTMLElement | null;
        }

        return offset;
      }

      return element.offsetTop;
    },
    [useWindowScroll],
  );

  const updateCardTransforms = useCallback(() => {
    if (!cardsRef.current.length || isUpdatingRef.current) return;

    isUpdatingRef.current = true;

    if (disabledBelow > 0 && window.innerWidth < disabledBelow) {
      cardsRef.current.forEach((card, i) => {
        card.style.marginBottom = i < cardsRef.current.length - 1 ? "32px" : "0px";
        card.style.transform = "";
        card.style.filter = "";
        card.style.willChange = "auto";
      });
      lastTransformsRef.current.clear();
      isUpdatingRef.current = false;
      return;
    }

    const { scrollTop, containerHeight } = getScrollData();
    const stackPositionPx = parsePosition(stackPosition, containerHeight);
    const scaleEndPositionPx = parsePosition(scaleEndPosition, containerHeight);
    const endElement = scrollerRef.current?.querySelector<HTMLElement>("[data-scroll-stack-end]");
    const endElementTop = endElement ? getElementOffset(endElement) : 0;
    const pinEnd = endElementTop - (releaseOffset ?? containerHeight);
    let topCardIndex = 0;

    if (blurAmount) {
      for (let i = 0; i < cardsRef.current.length; i++) {
        const card = cardsRef.current[i];
        const cardTop = getElementOffset(card);
        const triggerStart = cardTop - stackPositionPx - itemStackDistance * i;

        if (scrollTop >= triggerStart) {
          topCardIndex = i;
        }
      }
    }

    cardsRef.current.forEach((card, i) => {
      const cardTop = getElementOffset(card);
      const triggerStart = cardTop - stackPositionPx - itemStackDistance * i;
      const triggerEnd = cardTop - scaleEndPositionPx;
      const scaleProgress = calculateProgress(scrollTop, triggerStart, triggerEnd);
      const targetScale = baseScale + i * itemScale;
      const scale = 1 - scaleProgress * (1 - targetScale);
      const rotation = rotationAmount ? i * rotationAmount * scaleProgress : 0;
      const isPinned = scrollTop >= triggerStart && scrollTop <= pinEnd;
      const translateY =
        isPinned || scrollTop > pinEnd
          ? Math.min(scrollTop, pinEnd) - cardTop + stackPositionPx + itemStackDistance * i
          : 0;
      const depthInStack = i < topCardIndex ? topCardIndex - i : 0;
      const blur = blurAmount ? Math.max(0, depthInStack * blurAmount) : 0;
      const nextTransform = {
        translateY: Math.round(translateY * 100) / 100,
        scale: Math.round(scale * 1000) / 1000,
        rotation: Math.round(rotation * 100) / 100,
        blur: Math.round(blur * 100) / 100,
      };
      const previousTransform = lastTransformsRef.current.get(i);
      const changed =
        !previousTransform ||
        Math.abs(previousTransform.translateY - nextTransform.translateY) > 0.1 ||
        Math.abs(previousTransform.scale - nextTransform.scale) > 0.001 ||
        Math.abs(previousTransform.rotation - nextTransform.rotation) > 0.1 ||
        Math.abs(previousTransform.blur - nextTransform.blur) > 0.1;

      if (changed) {
        card.style.transform = `translate3d(0, ${nextTransform.translateY}px, 0) scale(${nextTransform.scale}) rotate(${nextTransform.rotation}deg)`;
        card.style.filter = nextTransform.blur > 0 ? `blur(${nextTransform.blur}px)` : "";
        lastTransformsRef.current.set(i, nextTransform);
      }

      if (i === cardsRef.current.length - 1) {
        const isInView = scrollTop >= triggerStart && scrollTop <= pinEnd;

        if (isInView && !stackCompletedRef.current) {
          stackCompletedRef.current = true;
          onStackComplete?.();
        } else if (!isInView && stackCompletedRef.current) {
          stackCompletedRef.current = false;
        }
      }
    });

    isUpdatingRef.current = false;
  }, [
    baseScale,
    blurAmount,
    calculateProgress,
    disabledBelow,
    getElementOffset,
    getScrollData,
    itemScale,
    itemStackDistance,
    onStackComplete,
    parsePosition,
    releaseOffset,
    rotationAmount,
    scaleEndPosition,
    stackPosition,
  ]);

  const handleScroll = useCallback(() => {
    updateCardTransforms();
  }, [updateCardTransforms]);

  useLayoutEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const cards = Array.from(scroller.querySelectorAll<HTMLElement>("[data-scroll-stack-card]"));
    const transformsCache = lastTransformsRef.current;
    const isDisabled = disabledBelow > 0 && window.innerWidth < disabledBelow;

    cardsRef.current = cards;

    cards.forEach((card, i) => {
      card.style.marginBottom = i < cards.length - 1 ? `${isDisabled ? 32 : itemDistance}px` : "0px";
      card.style.zIndex = String(i + 1);
      card.style.willChange = isDisabled ? "auto" : "transform, filter";
      card.style.transformOrigin = "top center";
      card.style.backfaceVisibility = "hidden";
      card.style.perspective = "1000px";
      card.style.transform = "";
      card.style.filter = "";
    });

    if (isDisabled) {
      return () => {
        cardsRef.current = [];
        transformsCache.clear();
      };
    }

    if (useWindowScroll && isWindowScrollManaged) {
      updateCardTransforms();
      window.addEventListener("scroll", handleScroll, { passive: true });
      window.addEventListener("resize", updateCardTransforms);

      return () => {
        window.removeEventListener("scroll", handleScroll);
        window.removeEventListener("resize", updateCardTransforms);
        stackCompletedRef.current = false;
        cardsRef.current = [];
        transformsCache.clear();
        isUpdatingRef.current = false;
      };
    }

    const lenis = useWindowScroll
      ? new Lenis(smoothScrollOptions)
      : new Lenis({
          wrapper: scroller,
          content: scroller.querySelector<HTMLElement>("[data-scroll-stack-inner]") ?? undefined,
          ...smoothScrollOptions,
        });

    lenis.on("scroll", handleScroll);

    const raf = (time: number) => {
      lenis.raf(time);
      animationFrameRef.current = requestAnimationFrame(raf);
    };

    animationFrameRef.current = requestAnimationFrame(raf);
    lenisRef.current = lenis;
    updateCardTransforms();
    window.addEventListener("resize", updateCardTransforms);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }

      lenisRef.current?.destroy();
      window.removeEventListener("resize", updateCardTransforms);
      stackCompletedRef.current = false;
      cardsRef.current = [];
      transformsCache.clear();
      isUpdatingRef.current = false;
    };
  }, [
    disabledBelow,
    handleScroll,
    isWindowScrollManaged,
    itemDistance,
    updateCardTransforms,
    useWindowScroll,
  ]);

  return (
    <div
      ref={scrollerRef}
      className={cn(
        "relative w-full overflow-x-visible",
        !useWindowScroll && "h-full overflow-y-auto overscroll-contain [-webkit-overflow-scrolling:touch]",
        className,
      )}
    >
      <div data-scroll-stack-inner className="relative min-h-screen">
        {Children.map(children, (child) => child)}
        <div
          aria-hidden="true"
          className={cn(disabledBelow > 0 && "hidden md:block")}
          style={{ height: endSpacing }}
        />
        <div data-scroll-stack-end aria-hidden="true" className="h-px w-full" />
      </div>
    </div>
  );
}
