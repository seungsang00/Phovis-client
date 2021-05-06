import styled from '@styles/themed-components'
import { user_inactive, user_active } from '@styles/icons'

const InactiveUserButton = styled.div`
  width: 30px;
  height: 30px;
  cursor: pointer;
  ${user_inactive};
`
const ActiveUserButton = styled.div`
  width: 30px;
  height: 30px;
  cursor: pointer;
  ${user_active};
`

export const UserPageButton = () => <InactiveUserButton title='로그인' />

export const MyPageButton = () => <ActiveUserButton title='마이페이지' />
