// components/GameCard.tsx

import Link from 'next/link'
import Image from 'next/image'

interface GameCardProps {
  game: {
    id: number
    slug: string
    name: string
    background_image: string
    rating: number
    genres: { name: string }[]
  }
}

export function GameCard({ game }: GameCardProps) {
  return (
    <Link
      href={`/game/${game.slug}`}
      className="group relative overflow-hidden rounded-xl shadow hover:shadow-lg transition"
    >
      <div className="relative h-48 w-full">
        <Image
          src={game.background_image || '/placeholder.jpg'}
          alt={game.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-3 bg-background/90 backdrop-blur-sm">
        <h3 className="text-sm font-semibold truncate">{game.name}</h3>
        <p className="text-xs text-muted-foreground">
          {game.genres.map((g) => g.name).join(', ')}
        </p>
      </div>
    </Link>
  )
}
