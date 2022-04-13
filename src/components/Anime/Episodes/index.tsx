import { CloseIcon } from '#constants/icons'
import { EpisodeCard } from '#types'
import Image from 'next/image'
import _ from './Episodes.module.scss'

interface Props {
  episodes: EpisodeCard[]
  title: string
  showEpisodes?: (e: boolean) => void
}

export default function AnimeEpisodes({
  episodes,
  title,
  showEpisodes,
}: Props) {
  const handleModal = () => {
    showEpisodes ? showEpisodes(false) : null
  }
  return (
    <div className={_.container}>
      <div className={_.head}>
        <h2 className={_.section}>Episodios</h2>
        <button onClick={handleModal} className={_.close}>
          <CloseIcon />
        </button>
      </div>
      <ul className={_.list}>
        {[...episodes].reverse().map(e => (
          <li className={_.item} key={e.id}>
            <div className={_.image}>
              <Image
                src={e.image}
                objectFit='cover'
                width={450}
                layout='responsive'
                height={300}
                loading='eager'
                priority={true}
                className={_.img}
              />
            </div>
            <div className={_.data}>
              <p className={_.no}>Episodio {e.no}</p>
              <h3 className={_.title}>{title}</h3>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
