import EpisodeCard from '#components/EpisodeCard'
import Layout from '#components/Layout'
import { getLastestEpisodes } from '#services/index'
import { Episode } from '#types'
import type { GetServerSideProps, NextPage } from 'next'

interface Props {
  episodes: Episode[]
}

const Home: NextPage<Props> = ({ episodes }) => {
  return (
    <Layout title='Inicio'>
      <h1 className='section'>Ultimos episodios</h1>
      <ul className='list'>
        {episodes.map(episode => (
          <EpisodeCard key={episode.id} {...episode} />
        ))}
      </ul>
    </Layout>
  )
}
export const getServerSideProps: GetServerSideProps = async () => {
  const episodes = await getLastestEpisodes()
  return {
    props: {
      episodes,
    },
  }
}

export default Home
