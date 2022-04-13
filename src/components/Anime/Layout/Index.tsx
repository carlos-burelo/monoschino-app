import Navbar from '#components/Navbar'
import { Anime } from '#types'
import { useState } from 'react'
import AnimeEpisodes from '../Episodes'
import AnimeInfo from '../Info'
import _ from './Layout.module.scss'

export default function AnimeLayout(anime: Anime) {
  const [open, setOpen] = useState(false)
  const handleModal = (e: boolean) => {
    console.log(e)
    setOpen(!open)
  }
  return (
    <div className={_.container}>
      <AnimeInfo {...anime} showEpisodes={handleModal} />
      {open && (
        <div className={_.episodes}>
          <AnimeEpisodes
            title={anime.title}
            showEpisodes={handleModal}
            episodes={anime.episodes}
          />
        </div>
      )}
      <Navbar />
    </div>
  )
}
