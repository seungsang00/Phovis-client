import { useState } from 'react'
import {
  SearchInput,
  SearchForm,
  SearchButton,
  SearchFormBig,
  SearchBig,
} from './searchbar.style'

export const SearchBar = () => (
  <SearchForm action='' className='search-bar'>
    <SearchInput type='search' name='search' required />
    <SearchButton className='search-btn' type='submit'>
      <span>Search</span>
    </SearchButton>
  </SearchForm>
)

interface IProps {
  query: string
}

export const SearchBarBig = ({ query }: IProps) => {
  const [newQuery, setnewQuery] = useState('')
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setnewQuery(e.target.value)
  }

  return (
    <SearchFormBig action='' className='search-bar'>
      <SearchBig
        type='search'
        name='search'
        value={newQuery}
        placeholder={query}
        onChange={onChange}
      />
    </SearchFormBig>
  )
}
