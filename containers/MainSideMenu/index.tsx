import React from 'react'
import Link from 'next/link'
import {
  SideMenu,
  Menu,
  LinkMenu,
  HomeIcon,
  LikeIcon,
  PhotoIcon,
  WriteIcon,
} from './MainSideMenu.style'

interface IProps {
  isLogin: boolean
}

const MainSideMenu = ({ isLogin }: IProps) => {
  return (
    <SideMenu>
      <Menu href='#section-header'>
        <HomeIcon />
      </Menu>
      <Menu href='#section-recommend'>
        <LikeIcon />
      </Menu>
      <Menu href='#section-photo-card'>
        <PhotoIcon />
      </Menu>
      <Link href={isLogin ? '/content/form' : '/auth/login'}>
        <LinkMenu>
          <WriteIcon />
        </LinkMenu>
      </Link>
    </SideMenu>
  )
}

export default MainSideMenu
