import styled, { withProps } from '@styles/themed-components'
import { bookmark_active, bookmark_inactive } from '@styles/icons'

interface IBookmark {
  isBookmarked: boolean
}

export const BookmarkButton = withProps<IBookmark, HTMLButtonElement>(
  styled.button
)`
  ${(props) => (props.isBookmarked ? bookmark_active : bookmark_inactive)};
  width: 25px;
  height: 25px;
  min-width: 25px !important;
  min-height: 25px !important;
  cursor: pointer;
`
export const BookmarkContainer = styled.div`
  ${({ theme }) => theme.display.flexCenterRow};
  width: 50px;
  height: 50px;
`
