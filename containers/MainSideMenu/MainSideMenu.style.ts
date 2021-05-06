import styled from '@styles/themed-components'
import {
  home_active,
  home_inactive,
  like_active,
  like_inactive,
  photo_active,
  photo_inactive,
  write_active,
  write_inactive,
} from '@styles/icons'

export const SideMenu = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  position: fixed;
  left: 0;
  top: 0;
  z-index: 8000;

  width: 10vw;
  height: 100vh;
  padding: 0 3rem;
  background-color: ${({ theme }) => theme.color.primary};
  color: ${({ theme }) => theme.color.white};
`

export const Menu = styled.a`
  position: relative;
  &:not(:last-child) {
    margin-bottom: 2rem;
  }
`

export const LinkMenu = styled.div``

export const HomeIcon = styled.div`
  min-width: 30px;
  min-height: 30px;
  ${home_inactive}

  &:hover {
    ${home_active}
  }
`
export const LikeIcon = styled.div`
  min-width: 30px;
  min-height: 30px;
  ${like_inactive}

  &:hover {
    ${like_active}
  }
`
export const PhotoIcon = styled.div`
  min-width: 30px;
  min-height: 30px;
  ${photo_inactive}

  &:hover {
    ${photo_active}
  }
`

export const WriteIcon = styled.div`
  min-width: 27px;
  min-height: 27px;
  ${write_inactive}

  &:hover {
    ${write_active}
  }
`
