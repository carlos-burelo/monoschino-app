import Image from 'next/image'
import _ from './Avatar.module.scss'

export default function Avatar({ src, name }: Props) {
  return (
    <Image
      src={src}
      alt={name}
      width={45}
      height={45}
      layout='fixed'
      className={_.img}
      loading='eager'
      priority={true}
    />
  )
}

interface Props {
  name: string
  src: string
}
