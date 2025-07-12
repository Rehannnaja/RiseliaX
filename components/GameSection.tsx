// components/GameSection.tsx

'use client'

import { useEffect, useState } from 'react'
import { fetchGames } from '@/lib/rawg'
import { GameCard } from './GameCard'

export function GameSection() {
  const [games, setGames] = useState<any[]>([])

  useEffect(() => {
    const getGames = async () => {
      const data = await fetchGames('ordering=-added&page_size=12')
      setGames(data)
    }
    getGames()
  }, [])

  return (
    <section>
      <h2 className="text-xl font-semibold mb-4">Popular Games</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </section>
  )
}
