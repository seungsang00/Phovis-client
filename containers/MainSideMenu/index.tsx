import React from 'react'
import Link from 'next/link'
import { SideMenu, Menu, LinkMenu } from './MainSideMenu.style'

interface IProps {
  isLogin: boolean
}

const MainSideMenu = ({ isLogin }: IProps) => (
  <SideMenu>
    <Menu href='#section-header'>Home Icon</Menu>
    <Menu href='#section-recommend'>Recommend Icon</Menu>
    <Menu href='#section-photo-card'>Photo Card Icon</Menu>
    <Link href={isLogin ? '/content/form' : '/auth/login'}>
      <LinkMenu>Make a Contents Icon</LinkMenu>
    </Link>
  </SideMenu>
)

export default MainSideMenu
