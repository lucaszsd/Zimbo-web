import * as React from "react";

import { cn } from "@/lib/utils";
import { icons } from "lucide-react";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface EmptyPlaceholderProps extends React.HTMLAttributes<HTMLDivElement> { }

export function EmptyPlaceholder({
  className,
  children,
  ...props
}: EmptyPlaceholderProps) {
  return (
    <div
      className={cn(
        "flex min-h-[400px] flex-col items-center justify-center rounded-md border border-dashed p-8 text-center animate-in fade-in-50",
        className
      )}
      {...props}
    >
      <div className="mx-auto flex max-w-[420px] flex-col items-center justify-center text-center">
        {children}
      </div>
    </div>
  )
}

interface EmptyPlaceholderIconProps extends Partial<React.SVGProps<SVGSVGElement>> {
  name: keyof typeof icons;
  ref?: ((instance: SVGSVGElement | null) => void) | React.RefObject<SVGSVGElement> | null;
}

EmptyPlaceholder.Icon = function EmptyPlaceHolderIcon({
  name,
  className,
  ...props
}: EmptyPlaceholderIconProps) {
  const Icon = icons[name || 'add'] 

  if (!Icon) {
    return null
  }

  return (
    <div className="flex items-center justify-center rounded-full size-20 bg-muted">
      <Icon className={cn("size-10", className)} {...props} />
    </div>
  )
}

interface EmptyPlacholderTitleProps
  extends React.HTMLAttributes<HTMLHeadingElement> { }

EmptyPlaceholder.Title = function EmptyPlaceholderTitle({
  className,
  ...props
}: EmptyPlacholderTitleProps) {
  return (
    <h2 className={cn("mt-6 text-xl font-semibold", className)} {...props} />
  )
}

interface EmptyPlaceholderDescriptionProps
  extends React.HTMLAttributes<HTMLParagraphElement> { }

EmptyPlaceholder.Description = function EmptyPlaceholderDescription({
  className,
  ...props
}: EmptyPlaceholderDescriptionProps) {
  return (
    <p
      className={cn(
        "mb-8 mt-2 text-center text-sm font-normal leading-6 text-muted-foreground",
        className
      )}
      {...props}
    />
  )
}
