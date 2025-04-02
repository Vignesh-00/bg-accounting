import { cn } from "@/lib/utils"
import type React from "react"

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
  children: React.ReactNode
}

export function CardEqualHeight({ className, children, ...props }: CardProps) {
  return (
    <div className={cn("card bg-white rounded-lg shadow-md border border-primary-light/20", className)} {...props}>
      {children}
    </div>
  )
}

export function CardHeader({ className, children, ...props }: CardProps) {
  return (
    <div className={cn("p-6 pb-0", className)} {...props}>
      {children}
    </div>
  )
}

export function CardBody({ className, children, ...props }: CardProps) {
  return (
    <div className={cn("p-6 card-body", className)} {...props}>
      {children}
    </div>
  )
}

export function CardFooter({ className, children, ...props }: CardProps) {
  return (
    <div className={cn("p-6 pt-0 card-footer", className)} {...props}>
      {children}
    </div>
  )
}

