import { getEpisodeById } from '#services/index'
import { EpisodeInfo } from '#types'
import type { GetServerSideProps, NextPage } from 'next'

const EpisodePage: NextPage<Props> = ({ episode }) => {
  const { videos: servers } = episode
  // busca en orden jerarquico los siguentes servidores
  // si no lo encuentra, pasa al siguiente
  // - ok
  // - fembed2
  // - fembed
  // - mp4upload

  const server =
    servers.find(({ title, url }) => {
      const titleString = title.toLowerCase()
      return titleString.includes('ok')
    }) || servers[0]

  return (
    <div className='iframe'>
      <iframe src={server.url} frameBorder={0} allowFullScreen>
        <p>Your browser does not support iframes.</p>
      </iframe>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const episode = await getEpisodeById(params?.id as string)
  return {
    props: {
      episode,
    },
  }
}
interface Props {
  episode: EpisodeInfo
}
export default EpisodePage
