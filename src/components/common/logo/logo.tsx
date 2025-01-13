import { cn } from '@/lib/utils'
import React from 'react'

export default function Logo({type = "original", className = ""}: {type?: string, className?: string}) {
    const source =
      type === "original"
        ? "/assets/icons/pluginLogo.svg"
        : type === "white"
        ? "/assets/images/logo-white.svg"
        : "/assets/icons/pluginLogo.svg"; 
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img className={cn("w-12", className)} src={source} alt='Plugin Logo' />
  )
}
