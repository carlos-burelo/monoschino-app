import Avatar from '#components/Avatar'
import _ from './Header.module.scss'

interface Props {
  title: string
}
export default function Header({ title }: Props) {
  return (
    <header className={_.header}>
      <h1 className={_.title}>{title}</h1>
      <Avatar src='/profile.png' name='Carlos' />
    </header>
  )
}
