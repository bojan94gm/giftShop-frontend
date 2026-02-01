import { cn } from '@/lib/utils'
import React, { ReactNode } from 'react'

export default function Container({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div className={cn('mx-auto px-8 max-w-6xl xl:max-w-7xl', className)}>
      {children}
    </div>
  )
}
