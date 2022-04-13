import AnimeCard from '#components/AnimeCard'
import { AnimeDay } from '#types'
import _ from './WeeklyAnime.module.scss'

export default function WeeklyAnime({ animes, day }: AnimeDay) {
  return (
    <div className={_.container}>
      <h1 className={_.day}>{day}</h1>
      <ul className={_.slider}>
        {animes.map(anime => (
          <AnimeCard
            key={anime.id}
            {...anime}
            width='130px'
            height='210px'
            showTitle
          />
        ))}
      </ul>
    </div>
  )
}
