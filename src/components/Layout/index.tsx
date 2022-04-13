import Header from '#components/Header'
import Navbar from '#components/Navbar'
import _ from './Layout.module.scss'

interface Props {
  children: React.ReactNode
  title: string
}

export default function Layout({ children, title }: Props) {
  return (
    <>
      <Header title={title} />
      <section className={_.container}>{children}</section>
      <Navbar />
    </>
  )
}
