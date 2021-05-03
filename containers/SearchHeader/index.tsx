import React from 'react'
import { SearchBarBig } from '@components/index'

interface IProps {
  search: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void
}

const SearchHeader = ({ search, onChange, onSubmit }: IProps) => (
  <section>
    <SearchBarBig
      name='keyword'
      value={search}
      placeholder='검색어를 입력해 주세요 📷'
      onChange={onChange}
      onSubmit={onSubmit}
    />
  </section>
)

export default SearchHeader
