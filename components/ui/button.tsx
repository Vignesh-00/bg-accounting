import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-secondary text-white hover:bg-secondary/90 shadow-md font-semibold border-2 border-secondary",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border-2 border-secondary text-secondary hover:bg-secondary/10 font-semibold",
        secondary: "bg-accent text-heading hover:bg-accent/80 shadow-md font-semibold border-2 border-accent",
        ghost: "hover:bg-accent/10 hover:text-secondary text-bodytext font-semibold",
        link: "text-secondary underline-offset-4 hover:underline font-semibold",
        white: "bg-white text-primary hover:bg-gray-100 shadow-md border-2 border-white font-semibold",
        accent: "bg-accent text-heading hover:bg-accent/90 shadow-md font-semibold border-2 border-accent",
        "on-dark": "bg-white text-primary hover:bg-gray-100 shadow-md border-2 border-white font-semibold",
        "on-blue": "bg-accent text-heading hover:bg-accent/90 shadow-md border-2 border-accent font-semibold",
      },
      size: {
        default: "h-10 px-5 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-12 rounded-md px-8 text-base",
        xl: "h-14 rounded-md px-10 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
  },
)
Button.displayName = "Button"

export { Button, buttonVariants }

