import { Episode } from '#types'
import Image from 'next/image'
import Link from 'next/link'
import _ from './EpisodeCard.module.scss'

export default function EpisodeCard({ id, image, no, title, type }: Props) {
  return (
    <Link href={`/ver/${id}`}>
      <a>
        <li className={_.item}>
          <Image
            src={image}
            alt={title}
            width={100}
            height={60}
            layout='responsive'
            objectFit='cover'
            className={_.img}
            placeholder='blur'
            blurDataURL='L78:n[aL0J=dE1oLs:WC0Jg2~DEg'
            loading='eager'
            priority={true}
          />
          <div className={_.info}>
            <span className={_.no}>{no}</span>
            <h2 className={_.title}>{title}</h2>
            <p className={_.type}>{type}</p>
          </div>
        </li>
      </a>
    </Link>
  )
}

interface Props extends Episode {}
