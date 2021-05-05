import styled, { withProps } from '@styles/themed-components'
import { like_active, like_inactive } from '@styles/icons'

interface IButton {
  isActive: boolean
}
export const LikeButton = withProps<IButton, HTMLButtonElement>(styled.button)`
  width: 24px;
  height: 24px;
  ${(props) => (props.isActive ? like_active : like_inactive)};
  cursor: pointer;
`
export const LikeContainer = styled.div`
  padding: 10px;
  justify-content: end;
  flex-direction: row;
  align-items: center;
`

export const ImgContainer = withProps<IButton, HTMLDivElement>(styled.div)`
  display: flex;
  flex-direction: row;
  align-items: center;
  
  & > span {
    padding-left: 8px;
    line-height: 1.5rem;
    font-size: 1.25rem;
    color: #f3f3f3;
  }
`
