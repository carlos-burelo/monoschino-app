import { Anime, AnimeBase, AnimeWeek, Episode, EpisodeInfo } from '#types'

export const url = 'https://monoschinos.up.railway.app'

const fetcher = async <Custom>(url: string): Promise<Custom> => {
  const res = await fetch(url)
  const data = await res.json()
  return data
}

export const getLastestEpisodes = async (): Promise<Episode[]> => {
  return await fetcher<Episode[]>(`${url}/lastest`)
}
export const getEmisionAnimes = async (): Promise<AnimeBase[]> => {
  return await fetcher<AnimeBase[]>(`${url}/emision`)
}

export const getWeeklyAnimes = async (): Promise<AnimeWeek> => {
  return await fetcher<AnimeWeek>(`${url}/week`)
}

export const getAnimebyId = async (id: string): Promise<Anime> => {
  return await fetcher<Anime>(`${url}/anime/${id}`)
}
export const getAnimebyName = async (name: string): Promise<AnimeBase[]> => {
  return await fetcher<AnimeBase[]>(`${url}/search/${name.replace(' ', '+')}`)
}
export const getAllAnimes = async (): Promise<AnimeBase[]> => {
  return await fetcher<AnimeBase[]>(`${url}/all`)
}

export const getEpisodeById = async (id: string): Promise<EpisodeInfo> => {
  return await fetcher<EpisodeInfo>(`${url}/ver/${id}`)
}
