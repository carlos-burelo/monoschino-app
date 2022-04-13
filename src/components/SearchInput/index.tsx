import { SearchIcon } from '#constants/icons'
import _ from './SearchInput.module.scss'

export default function SearchInput({ onSearch, ...props }: Props) {
  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value
    if (e.key === 'Enter') onSearch && onSearch(value)
  }

  return (
    <div className={_.search}>
      <div className={_.icon}>
        <SearchIcon />
      </div>
      <input
        onKeyUp={E => handleSearch(E)}
        className={_.input}
        type='search'
        placeholder='Buscar'
        {...props}
      />
    </div>
  )
}

interface Props extends React.HTMLAttributes<HTMLInputElement> {
  onSearch?: (e: string) => void
}
