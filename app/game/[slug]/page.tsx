import { fetchGameDetail } from '@/lib/rawg'
import Image from 'next/image'
import { notFound } from 'next/navigation'

type Props = {
  params: { slug: string }
}

export default async function GameDetailPage({ params }: Props) {
  const game = await fetchGameDetail(params.slug)
  if (!game) return notFound()

  return (
    <div className="space-y-6">
      {/* Hero Image */}
      <div className="relative w-full h-[400px] rounded-xl overflow-hidden shadow">
        <Image
          src={game.background_image || '/placeholder.jpg'}
          alt={game.name}
          fill
          className="object-cover object-center brightness-[0.6]"
          priority
        />
        <div className="absolute bottom-4 left-4 text-white">
          <h1 className="text-3xl md:text-4xl font-bold">{game.name}</h1>
          <p className="text-sm opacity-80 mt-1">
            {game.genres?.map((g: any) => g.name).join(', ')}
          </p>
        </div>
      </div>

      {/* Game Info */}
      <div className="space-y-3">
        <p className="text-muted-foreground text-sm leading-relaxed max-w-3xl">
          {game.description_raw}
        </p>

        <div className="text-sm text-muted-foreground space-y-1">
          <div>
            <span className="font-medium text-foreground">Rating:</span>{' '}
            {game.rating} / 5
          </div>
          <div>
            <span className="font-medium text-foreground">Platforms:</span>{' '}
            {game.platforms?.map((p: any) => p.platform.name).join(', ')}
          </div>
          <div>
            <span className="font-medium text-foreground">Released:</span>{' '}
            {game.released}
          </div>
        </div>
      </div>

      {/* Trailer */}
      {game.clip?.video && (
        <div className="aspect-video rounded-xl overflow-hidden">
          <video
            src={game.clip.video}
            controls
            className="w-full h-full object-cover"
          />
        </div>
      )}
    </div>
  )
}
