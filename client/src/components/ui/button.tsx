import * as React from "react";
import { Button as ButtonPrimitive } from "@base-ui/react/button";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center gap-2 rounded-xl border border-transparent bg-clip-padding text-xs font-medium whitespace-nowrap shadow-sm transition-all duration-300 ease-out outline-none select-none hover:shadow-md active:scale-[0.98] focus-visible:border-ring focus-visible:ring-1 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-1 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/80",
        outline:
          "border-border bg-transparent hover:border-accent hover:bg-accent/10",
        secondary:
          "bg-card text-foreground hover:bg-muted aria-expanded:bg-secondary aria-expanded:text-secondary-foreground",
        ghost:
          "hover:bg-accent/10 hover:text-primary aria-expanded:bg-muted aria-expanded:text-foreground dark:hover:bg-muted/50",
        destructive:
          "bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:border-destructive/40 focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:hover:bg-destructive/30 dark:focus-visible:ring-destructive/40",
        link: "text-primary underline-offset-4 hover:underline",
        luxury:
          "border-transparent bg-gradient-primary text-primary-foreground hover:-translate-y-0.5 hover:brightness-110 hover:shadow-lg hover:bg-primary-gradient-hover active:translate-y-0 transition-all duration-300 rounded-[14px] shadow-md [&_svg]:transition-transform [&_svg]:duration-300 hover:[&_svg]:rotate-[2deg] ",
      },
      size: {
        default:
          "h-8 px-3.8 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
        xs: "h-6 px-3 text-xs has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-7 px-4 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3.5",
        lg: "h-9 px-4 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
        xl: "h-14 rounded-xl px-10 text-base",
        icon: "size-8",
        "icon-xs": "size-6 [&_svg:not([class*='size-'])]:size-3",
        "icon-sm": "size-7",
        "icon-lg": "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

type ButtonProps = ButtonPrimitive.Props &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };

function Button({
  asChild = false,
  className,
  children,
  render,
  variant = "default",
  size = "default",
  ...props
}: ButtonProps) {
  const renderElement = asChild
    ? (React.Children.only(children) as React.ReactElement)
    : render;

  return (
    <ButtonPrimitive
      nativeButton={!asChild}
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      render={renderElement}
      {...props}
    >
      {asChild ? null : children}
    </ButtonPrimitive>
  );
}

export { Button, buttonVariants };
