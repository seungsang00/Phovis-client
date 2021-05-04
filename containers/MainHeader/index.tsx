import React from 'react'
import Link from 'next/link'

import { SearchBar } from '@components/index'
import { HeaderInner } from '@containers/Layout/CommonLayout/commonlayout'

interface IProps {
  isLogin: boolean
  userId: string | null
  search?: string
  hideLoginBtn?: boolean
  onChangeInput?: (e: React.ChangeEvent<HTMLInputElement>) => void
  onSearchKeywordSubmit?: (e: React.FormEvent<HTMLFormElement>) => void
}

const MainHeader = ({
  isLogin,
  userId,
  search,
  hideLoginBtn,
  onChangeInput,
  onSearchKeywordSubmit,
}: IProps) => (
  <HeaderInner>
    <div className='global-menu'>
      <Link href='/'>
        <h2 className='main-logo'>Phovis</h2>
      </Link>
    </div>
    <div className='sub-menu'>
      {onChangeInput && onSearchKeywordSubmit && (
        <SearchBar
          name='search'
          value={search as string}
          onChange={onChangeInput}
          onSubmit={onSearchKeywordSubmit}
        />
      )}
      {!hideLoginBtn && (
        <div>
          {isLogin && userId ? (
            <Link href={`/user/${userId}`}>마이 페이지</Link>
          ) : (
            <Link href='/auth/login'>로그인</Link>
          )}
          {/* {!isLogin && <Link href='/auth/login'>로그인</Link>} */}
        </div>
      )}
    </div>
  </HeaderInner>
)

export default MainHeader
