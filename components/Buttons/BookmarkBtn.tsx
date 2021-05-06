import { BookmarkContainer, BookmarkButton } from './button-bookmark.style'

type Props = {
  id: string
  isChecked: boolean
  onClick: (contentId: string) => void
}

const BookmarkBtn = ({ id, isChecked, onClick }: Props) => {
  return (
    <BookmarkContainer>
      <BookmarkButton
        id={`star_${id}`}
        isBookmarked={isChecked}
        onClick={() => onClick(id)}
      />
    </BookmarkContainer>
  )
}

export default BookmarkBtn
