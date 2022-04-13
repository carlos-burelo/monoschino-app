import {
  CalendarIcon,
  HeartIcon,
  HomeIcon,
  LibraryIcon,
  SearchIcon,
} from '#constants/icons'
import Link from 'next/link'
import { useRouter } from 'next/router'
import _ from './Navbar.module.scss'

interface NavLinkProps {
  href: string
  Icon: () => JSX.Element
}

export default function Navbar() {
  return (
    <nav className={_.navbar}>
      <NavLink href='/' Icon={HomeIcon} />
      <NavLink href='/library' Icon={LibraryIcon} />
      <NavLink href='/search' Icon={SearchIcon} />
      <NavLink href='/calendar' Icon={CalendarIcon} />
      <NavLink href='/favorites' Icon={HeartIcon} />
    </nav>
  )
}

function NavLink({ href, Icon }: NavLinkProps) {
  const { pathname: path } = useRouter()
  const active = path === href ? _.active : ''
  return (
    <Link href={href}>
      <a className={`${_.link} ${active}`}>
        <Icon />
      </a>
    </Link>
  )
}
