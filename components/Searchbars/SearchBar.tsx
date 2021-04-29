import { useState } from 'react'
import {
  SearchInput,
  SearchForm,
  SearchButton,
  SearchFormBig,
  SearchBig,
} from './searchbar.style'

type SearchBarProps = {
  placeholder?: string
  name: string
  value: string
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const SearchBar = ({
  name,
  value,
  onChange,
  onSubmit,
}: SearchBarProps) => (
  <SearchForm action='' className='search-bar' onSubmit={onSubmit}>
    <SearchInput
      type='search'
      name={name}
      value={value}
      onChange={onChange}
      required
    />
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
