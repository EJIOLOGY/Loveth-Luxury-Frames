import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { ElementType, ReactNode } from "react";

const headingVariants = cva("font-display tracking-tight", {
  variants: {
    size: {
      hero: "text-6xl md:text-7xl lg:text-[5.5rem] leading-[1.05]",
      display: "text-5xl md:text-6xl leading-tight",
      section: "text-4xl md:text-5xl leading-tight",
      card: "text-2xl md:text-3xl leading-tight",
    },
    align: {
      left: "text-left",
      center: "text-center mx-auto",
      right: "text-right",
    },
    maxWidth: {
      sm: "max-w-md",
      md: "max-w-2xl",
      lg: "max-w-3xl",
    },
  },
  defaultVariants: {
    size: "section",
    align: "left",
    maxWidth: undefined,
  },
});

interface HeadingProps extends VariantProps<typeof headingVariants> {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  eyebrow?: string;
  title: string | ReactNode;
  description?: string | ReactNode;
  action?: ReactNode;
  className?: string;
  eyebrowClassName?: string;
  descriptionClassName?: string;
}

export default function Heading({
  as: Component = "h2",
  eyebrow,
  title,
  description,
  action,
  size,
  align,
  maxWidth,
  className,
  eyebrowClassName,
  descriptionClassName,
  ...props
}: HeadingProps) {
  return (
    <div className={cn("space-y-4", className)}>
      {/* Eyebrow */}
      {eyebrow && (
        <p
          className={cn(
            "font-sans uppercase tracking-[3px] text-sm text-accent font-medium",
            eyebrowClassName,
          )}
        >
          {eyebrow}
        </p>
      )}

      {/* Title */}
      <Component
        className={cn(
          headingVariants({ size, align, maxWidth }),
          "text-foreground",
        )}
        {...props}
      >
        {title}
      </Component>

      {/* Description */}
      {description && (
        <p
          className={cn(
            "font-sans text-lg md:text-xl text-muted-foreground max-w-prose",
            align === "center" && "mx-auto",
            descriptionClassName,
          )}
        >
          {description}
        </p>
      )}

      {/* Optional Action (e.g. Button) */}
      {action && (
        <div
          className={cn("pt-2", align === "center" && "flex justify-center")}
        >
          {action}
        </div>
      )}
    </div>
  );
}
