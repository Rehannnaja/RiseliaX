'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ThemeToggle } from './ThemeToggle'
import { Search } from 'lucide-react'
import clsx from 'clsx'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/genre/action', label: 'Genres' },
  { href: '/trending', label: 'Trending' }
]

export function Navbar() {
  const pathname = usePathname()

  return (
    <header className="w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="mx-auto flex h-16 max-w-screen-xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand */}
        <Link href="/" className="text-xl font-bold tracking-wide text-primary">
          RiseliaX
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={clsx(
                'text-sm font-medium transition-colors hover:text-primary',
                pathname === link.href ? 'text-primary' : 'text-muted-foreground'
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right: Search + Theme */}
        <div className="flex items-center gap-2">
          <Link
            href="/search"
            className="p-2 rounded-md transition hover:bg-muted"
            aria-label="Search"
          >
            <Search className="w-5 h-5" />
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
