// components/Navbar.tsx
'use client'

import Link from 'next/link'
import { ThemeToggle } from './ThemeToggle'

export function Navbar() {
  return (
    <header className="w-full border-b bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-16 max-w-screen-xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-xl font-bold tracking-wide text-primary">
          RiseliaX
        </Link>
        <ThemeToggle />
      </div>
    </header>
  )
}
