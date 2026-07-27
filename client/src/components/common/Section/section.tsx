import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { ElementType, ReactNode } from "react";
import Container from "@/components/common/Container/container";

const sectionVariants = cva("relative w-full", {
  variants: {
    spacing: {
      compact: "py-12",
      default: "py-20",
      comfortable: "py-24",
      hero: "py-32 md:py-40",
    },
    background: {
      default: "bg-background",
      surface: "bg-card",
      primary: "bg-primary text-primary-foreground",
      inverse: "bg-foreground text-background",
    },
  },
  defaultVariants: {
    spacing: "default",
    background: "default",
  },
});

interface SectionProps
  extends
    React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof sectionVariants> {
  children: ReactNode;
  as?: ElementType;
  container?: boolean;
  containerVariant?: "narrow" | "default" | "wide" | "full";
}

const Section = ({
  children,
  as: Component = "section",
  className,
  spacing,
  background,
  container = true,
  containerVariant = "default",
  ...props
}: SectionProps) => {
  return (
    <Component
      className={cn(sectionVariants({ spacing, background }), className)}
      {...props}
    >
      {container ? (
        <Container variant={containerVariant}>{children}</Container>
      ) : (
        children
      )}
    </Component>
  );
};

export default Section;
