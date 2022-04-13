import { AnimeBase } from '#types'
import Image from 'next/image'
import Link from 'next/link'
import _ from './AnimeCard.module.scss'

export default function AnimeCard({
  id,
  image,
  title,
  showTitle,
  width = '100%',
  height = '100%',
}: Props) {
  return (
    <li className={_.item} style={{ width, height }}>
      <Link href={`/anime/${id}`}>
        <a className={_.card}>
          <Image
            src={image}
            alt={title}
            width={70}
            height={100}
            layout='responsive'
            objectFit='cover'
            className={_.img}
            placeholder='blur'
            loading='eager'
            priority={true}
            blurDataURL='L78:n[aL0J=dE1oLs:WC0Jg2~DEg'
          />
          {showTitle && <h2 className={_.title}>{title}</h2>}
        </a>
      </Link>
    </li>
  )
}

interface Props extends AnimeBase {
  showTitle?: boolean
  width?: number | string
  height?: number | string
}
