import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: "narrow" | "default" | "wide" | "full";
}

export default function Container({
  children,
  className,
  variant = "default",
  ...props
}: ContainerProps) {
  const variants = {
    narrow: "max-w-4xl",
    default: "max-w-7xl",
    wide: "max-w-[1400px] 2xl:max-w-[1600px]",
    full: "max-w-full",
  };

  return (
    <div
      className={cn(
        "mx-auto w-full px-4 sm:px-6 lg:px-8",
        variants[variant],
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
