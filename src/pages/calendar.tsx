import Layout from '#components/Layout'
import WeeklyAnime from '#components/WeeklyAnime'
import { getWeeklyAnimes } from '#services/index'
import { AnimeWeek } from '#types'
import type { GetServerSideProps, NextPage } from 'next'

const Calendar: NextPage<Props> = ({ week }) => {
  return (
    <Layout title='Programacion'>
      <h1 className='section primary'>Emision semanal</h1>
      <div className='a'>
        {week.map(anime => (
          <WeeklyAnime key={anime.day} {...anime} />
        ))}
      </div>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const week = await getWeeklyAnimes()
  return {
    props: {
      week,
    },
  }
}

interface Props {
  week: AnimeWeek
}

export default Calendar
