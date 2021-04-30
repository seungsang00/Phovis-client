import React from 'react'
import Link from 'next/link'

import { SearchBar } from '@components/index'

interface IProps {
  isLogin: boolean
  search: string
  onChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void
  onSearchKeywordSubmit: (e: React.FormEvent<HTMLFormElement>) => void
}

const MainHeader = ({
  isLogin,
  search,
  onChangeInput,
  onSearchKeywordSubmit,
}: IProps) => (
  <header>
    <article>
      <div>Main Logo</div>
      <div>
        {isLogin && <Link href='/users'>마이 페이지</Link>}
        {!isLogin && <Link href='/auth/login'>로그인</Link>}
      </div>
    </article>
    <article>
      <SearchBar
        name='search'
        value={search}
        onChange={onChangeInput}
        onSubmit={onSearchKeywordSubmit}
      />
    </article>
  </header>
)

export default MainHeader
