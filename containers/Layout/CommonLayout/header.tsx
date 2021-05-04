import React from 'react'
import Link from 'next/link'
import { SearchBar } from '@components/index'
import { HeaderInner } from './commonlayout'

interface IProps {
  isLogin: boolean
  search: string
  onChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void
  onSearchKeywordSubmit: (e: React.FormEvent<HTMLFormElement>) => void
}

const Header = ({
  isLogin,
  search,
  onChangeInput,
  onSearchKeywordSubmit,
}: IProps) => {
  return (
    <HeaderInner>
      <div className='global-menu'>
        <Link href='/'>
          <h2 className='main-logo'>Phovis</h2>
        </Link>
      </div>
      <div className='sub-menu'>
        <SearchBar
          name='search'
          value={search}
          onChange={onChangeInput}
          onSubmit={onSearchKeywordSubmit}
        />
        <div>
          {isLogin && <Link href='/users'>마이 페이지</Link>}
          {!isLogin && <Link href='/auth/login'>로그인</Link>}
        </div>
      </div>
    </HeaderInner>
  )
}
export default Header
