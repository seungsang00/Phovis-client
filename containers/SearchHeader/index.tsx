import React from 'react'
import { SearchBarBig } from '@components/index'
import { SearchHeaderSection } from './searchheader.style'

interface IProps {
  search: string
  searchKeyword: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void
}

const SearchHeader = ({
  search,
  searchKeyword,
  onChange,
  onSubmit,
}: IProps) => (
  <SearchHeaderSection>
    <SearchBarBig
      name='keyword'
      value={search}
      placeholder={searchKeyword || '검색어를 입력해 주세요 📷'}
      onChange={onChange}
      onSubmit={onSubmit}
    />
  </SearchHeaderSection>
)

export default SearchHeader
