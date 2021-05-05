import React from 'react'
import Link from 'next/link'

import { SearchBar, UserPageButton, MyPageButton } from '@components/index'
import { HeaderInner } from '@containers/Layout/CommonLayout/commonlayout'
import { useRouter } from 'next/router'

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
}: IProps) => {
  const router = useRouter()

  const moveToLogin = () => {
    router.push('/auth/login')
  }

  const moveToMyPage = () => {
    router.push(`/user/${userId}`)
  }

  return (
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
              <div onClick={moveToMyPage}>
                <MyPageButton />
              </div>
            ) : (
              <div onClick={moveToLogin}>
                <UserPageButton />
              </div>
            )}
            {/* {!isLogin && <Link href='/auth/login'>로그인</Link>} */}
          </div>
        )}
      </div>
    </HeaderInner>
  )
}

export default MainHeader
