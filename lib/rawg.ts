// lib/rawg.ts

const BASE_URL = 'https://api.rawg.io/api'
const API_KEY = process.env.RAWG_API_KEY

export async function fetchGames(params = '') {
  const res = await fetch(`${BASE_URL}/games?key=${API_KEY}&${params}`)
  if (!res.ok) throw new Error('Failed to fetch games')
  const data = await res.json()
  return data.results
}

export async function fetchGameDetail(slug: string) {
  const res = await fetch(`${BASE_URL}/games/${slug}?key=${API_KEY}`)
  if (!res.ok) throw new Error('Failed to fetch game detail')
  return res.json()
}

export async function fetchGenres() {
  const res = await fetch(`${BASE_URL}/genres?key=${API_KEY}`)
  if (!res.ok) throw new Error('Failed to fetch genres')
  const data = await res.json()
  return data.results
}
