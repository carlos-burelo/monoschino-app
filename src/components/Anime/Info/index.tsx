import { CalendarIcon, HeartIcon, PlayIcon } from '#constants/icons'
import { Anime } from '#types'
import Image from 'next/image'
import _ from './Info.module.scss'

interface Props extends Anime {
  showEpisodes?: (e: boolean) => void
}

export default function AnimeInfo({
  banner,
  date,
  genders,
  image,
  rating,
  sinopsis,
  status,
  title,
  titleAlt,
  showEpisodes,
}: Props) {
  const handleModal = () => {
    showEpisodes ? showEpisodes(true) : null
  }
  return (
    <div className={_.container}>
      <div className={_.head}>
        <div className={_.image}>
          <Image
            src={banner}
            alt={title}
            objectFit='cover'
            width={200}
            layout='responsive'
            height={120}
            loading='eager'
            priority={true}
          />
          <div className={_.mask}></div>
        </div>
        <div className={_.cover}>
          <Image
            src={image}
            alt={title}
            objectFit='cover'
            width={150}
            layout='fixed'
            height={210}
            className={_.coverImage}
            loading='eager'
            priority={true}
          />
        </div>
      </div>
      <div className={_.data}>
        <h1 className={_.title}>{title}</h1>
        {titleAlt && <h2 className={_.titleAlt}>{titleAlt}</h2>}
        <div className={_.buttons}>
          <button>
            <HeartIcon />
            Favoritos
          </button>
          <button onClick={handleModal}>
            <PlayIcon />
            Ver ahora
          </button>
        </div>
      </div>
      <div className={_.content}>
        <div className={_.meta}>
          <div className={_.rating}>
            <HeartIcon />
            {rating}/5.0
          </div>
          <div className={_.status}>
            <PlayIcon />
            {status}
          </div>
          <div className={_.date}>
            <CalendarIcon />
            {date}
          </div>
        </div>
        <ul className={_.genres}>
          {genders.map(g => (
            <li className={_.genre} key={g}>
              {g}
            </li>
          ))}
        </ul>
        <p className={_.sinopsis}>{sinopsis}</p>
      </div>
    </div>
  )
}
