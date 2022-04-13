import Avatar from '#components/Avatar'
import { ChevronBack } from '#constants/icons'
import _ from './HeaderNav.module.scss'

export default function HeaderNav() {
  return (
    <header className={_.nav}>
      <button className={_.back}>
        <ChevronBack />
      </button>
      <Avatar src='/profile.png' name='Carlos' />
    </header>
  )
}
