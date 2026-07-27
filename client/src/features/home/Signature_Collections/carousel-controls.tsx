"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";

interface CarouselControlsProps {
  onPrev: () => void;
  onNext: () => void;
  onDotClick: (index: number) => void;
  canScrollPrev: boolean;
  canScrollNext: boolean;
  selectedIndex: number;
  scrollSnaps: number[];
}

export default function CarouselControls({
  onPrev,
  onNext,
  onDotClick,
  canScrollPrev,
  canScrollNext,
  selectedIndex,
  scrollSnaps,
}: CarouselControlsProps) {
  const progress =
    scrollSnaps.length > 1
      ? (selectedIndex / (scrollSnaps.length - 1)) * 100
      : 0;

  return (
    <div className="mt-5 flex items-center justify-between lg:mt-8">
      <div
        className="relative h-0.5 w-full max-w-70 bg-(--rich-black)/15"
        role="tablist"
        aria-label="Collection slides"
      >
        <span
          aria-hidden
          className="absolute inset-y-0 left-0 bg-(--luxury-gold) transition-all duration-700 ease-out"
          style={{ width: `${progress}%` }}
        />

        <div className="absolute inset-0 flex">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              type="button"
              role="tab"
              aria-selected={index === selectedIndex}
              aria-label={`Go to slide ${index + 1}`}
              onClick={() => onDotClick(index)}
              className="h-full flex-1 focus-visible:outline focus-visible:outline-offset-4 focus-visible:outline-(--luxury-gold)"
            />
          ))}
        </div>
      </div>

      {/* Arrows */}
      <div
        className="flex items-center gap-3 shrink-0"
        role="group"
        aria-label="Carousel navigation"
      >
        <button
          type="button"
          onClick={onPrev}
          disabled={!canScrollPrev}
          aria-label="Previous collection"
          className="flex h-11 w-11 items-center justify-center rounded-full text-(--rich-black) transition-all duration-500 hover:border hover:bg-accent hover:text-muted-foreground  focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--luxury-gold) disabled:cursor-not-allowed disabled:opacity-30"
        >
          <ArrowLeft className="h-4 w-4" strokeWidth={1.5} />
        </button>
        <button
          type="button"
          onClick={onNext}
          disabled={!canScrollNext}
          aria-label="Next collection"
          className="flex h-11 w-11 items-center justify-center rounded-full text-(--rich-black) transition-all duration-500 hover:bg-accent hover:text-muted-foreground  focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--luxury-gold) disabled:cursor-not-allowed disabled:opacity-30"
        >
          <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
        </button>
      </div>
    </div>
  );
}
