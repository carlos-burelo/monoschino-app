import AnimeLayout from '#components/Anime/Layout/Index'
import { getAnimebyId } from '#services/index'
import { Anime } from '#types'
import type { GetServerSideProps, NextPage } from 'next'

const AnimePage: NextPage<Props> = ({ anime }) => {
  return <AnimeLayout {...anime} />
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const anime = await getAnimebyId(params?.id as string)
  return {
    props: {
      anime,
    },
  }
}
interface Props {
  anime: Anime
}

export default AnimePage
//
