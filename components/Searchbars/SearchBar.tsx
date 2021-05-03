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
  placeholder,
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
      placeholder={placeholder}
      required
    />
    <SearchButton className='search-btn' type='submit'>
      <span>Search</span>
    </SearchButton>
  </SearchForm>
)

export const SearchBarBig = ({
  placeholder,
  name,
  value,
  onChange,
  onSubmit,
}: SearchBarProps) => (
  <SearchFormBig action='' className='search-bar' onSubmit={onSubmit}>
    <SearchBig
      type='search'
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  </SearchFormBig>
)
