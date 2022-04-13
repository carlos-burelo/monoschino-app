import AnimeCard from '#components/AnimeCard'
import DropDown from '#components/DropDown'
import Layout from '#components/Layout'
import SearchInput from '#components/SearchInput'
import {
  categories,
  genres,
  letters,
  menuBuilder,
  years,
} from '#constants/data'
import { getAllAnimes, getAnimebyName } from '#services/index'
import { AnimeBase } from '#types'
import type { GetServerSideProps, NextPage } from 'next'
import { useState } from 'react'

const Search: NextPage<{ animes: AnimeBase[] }> = ({ animes: animesRaw }) => {
  const [animes, setAnimes] = useState<AnimeBase[]>(animesRaw)
  const searchHandler = (value: string) => {
    getAnimebyName(value).then(res => {
      setAnimes(res)
    })
  }

  return (
    <Layout title='Buscar'>
      <SearchInput onSearch={searchHandler} />
      <h1 className='section primary'>Filtros</h1>
      <div className='list grid'>
        <DropDown defaultValue='Categorias' data={menuBuilder(categories)} />
        <DropDown defaultValue='Generos' data={menuBuilder(genres)} />
        <DropDown defaultValue='Año' data={menuBuilder(years)} />
        <DropDown defaultValue='Letra' data={menuBuilder(letters)} />
      </div>
      <ul className='list grid md'>
        {animes.length < 1 && (
          <li className='item'>
            <h1>No hay resultados</h1>
          </li>
        )}
        {animes.length > 0 &&
          animes.map(anime => (
            <AnimeCard key={anime.id} {...anime} showTitle={true} />
          ))}
      </ul>
    </Layout>
  )
}
export const getServerSideProps: GetServerSideProps = async () => {
  const animes = await getAllAnimes()
  return {
    props: {
      animes,
    },
  }
}

export default Search
