'use client'

import * as AvatarPrimitive from '@radix-ui/react-avatar'

import { cn } from '@/lib/utils'
import { forwardRef, ElementRef, ComponentPropsWithoutRef } from 'react'

const SIZE_AVATAR = {
  sm: 'h-10 w-10',
  md: 'h-14 w-14',
  lg: 'h-20 w-20',
  xl: 'h-52 w-52',
}

type SizeAvatar = keyof typeof SIZE_AVATAR

interface AvatarProps
  extends ComponentPropsWithoutRef<typeof AvatarPrimitive.Root> {
  size?: SizeAvatar
}

const Avatar = forwardRef<ElementRef<typeof AvatarPrimitive.Root>, AvatarProps>(
  ({ className, size = 'md', ...props }, ref) => (
    <AvatarPrimitive.Root
      ref={ref}
      className={cn(
        `relative flex ${SIZE_AVATAR[size]} shrink-0 overflow-hidden rounded-full`,
        className,
      )}
      {...props}
    />
  ),
)
Avatar.displayName = AvatarPrimitive.Root.displayName

const AvatarImage = forwardRef<
  ElementRef<typeof AvatarPrimitive.Image>,
  ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Image
    ref={ref}
    className={cn('aspect-square object-cover h-full w-full', className)}
    {...props}
  />
))
AvatarImage.displayName = AvatarPrimitive.Image.displayName

const AvatarFallback = forwardRef<
  ElementRef<typeof AvatarPrimitive.Fallback>,
  ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={cn(
      'flex h-full w-full items-center justify-center rounded-full bg-muted',
      className,
    )}
    {...props}
  />
))
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName

export { Avatar, AvatarImage, AvatarFallback }
