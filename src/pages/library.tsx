import AnimeCard from '#components/AnimeCard'
import Layout from '#components/Layout'
import { getEmisionAnimes } from '#services/index'
import { AnimeBase } from '#types'
import type { GetServerSideProps, NextPage } from 'next'

const Library: NextPage<Props> = ({ animes }) => {
  return (
    <Layout title='Biblioteca'>
      <ul className='list grid'>
        {animes.map(anime => (
          <AnimeCard key={anime.id} {...anime} showTitle={true} />
        ))}
      </ul>
    </Layout>
  )
}
export const getServerSideProps: GetServerSideProps = async () => {
  const animes = await getEmisionAnimes()
  return {
    props: {
      animes,
    },
  }
}

interface Props {
  animes: AnimeBase[]
}
export default Library
