// components/HeroSection.tsx

'use client'

import { useEffect, useState } from 'react'
import { fetchGames } from '@/lib/rawg'
import Image from 'next/image'
import Link from 'next/link'

export function HeroSection() {
  const [hero, setHero] = useState<any>(null)

  useEffect(() => {
    const getHero = async () => {
      const games = await fetchGames('ordering=-rating&page=1&page_size=1')
      setHero(games[0])
    }
    getHero()
  }, [])

  if (!hero) return null

  return (
    <section className="relative h-[400px] w-full rounded-xl overflow-hidden mb-10">
      <Image
        src={hero.background_image}
        alt={hero.name}
        fill
        className="object-cover object-center brightness-[0.6]"
        priority
      />
      <div className="absolute inset-0 flex flex-col justify-end p-6">
        <h1 className="text-3xl md:text-4xl font-bold text-white">{hero.name}</h1>
        <Link
          href={`/game/${hero.slug}`}
          className="mt-2 inline-block w-fit bg-primary text-white text-sm font-medium py-2 px-4 rounded-md hover:bg-primary/80 transition"
        >
          View Details
        </Link>
      </div>
    </section>
  )
}
