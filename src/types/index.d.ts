export interface AnimeBase {
  id: string
  title: string
  image: string
}
export interface Episode extends AnimeBase {
  no: number
  type: string
}
export interface AnimeSingleDay extends AnimeBase {
  no: number
  tags: string[]
}

export interface AnimeDay {
  day: string
  animes: AnimeSingleDay[]
}
export type AnimeWeek = AnimeDay[]

// declare module namespace {
export interface EpisodeCard {
  image: string
  no: number
  id: string
}

export interface Anime {
  banner: string
  image: string
  title: string
  titleAlt?: any
  sinopsis: string
  status: string
  rating: string
  genders: string[]
  date: string
  episodes: EpisodeCard[]
}
// }

export interface Ctrs {
  next: boolean
  prev: boolean
}

export interface Sugestion {
  image: string
  date: string
  title: string
  no: string
}

export interface Video {
  title: string
  url: string
}

export interface Download {
  title: string
  url: string
}

export interface EpisodeInfo {
  title: string
  nextEpisodes?: any
  ctrs: Ctrs
  sugestions: Sugestion[]
  videos: Video[]
  downloads: Download[]
}
