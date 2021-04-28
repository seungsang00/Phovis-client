import { useState } from 'react'
import { BookmarkContainer } from './button-bookmark'

const BookmarkBtn = () => {
  const [isBookmarked, setIsBookmark] = useState<boolean>(false)

  const handleClick = () => {
    setIsBookmark(!isBookmarked)
    console.log(`bookmark?`, isBookmarked)
    // TODO: content의 북마크 상태를 변경해주는 함수가 실행되어야 합니다.
  }

  return (
    <BookmarkContainer>
      <input type='checkbox' id='star' className='hide-checkbox' />
      <label
        onClick={handleClick}
        htmlFor='star'
        className='star-checkbox'></label>
    </BookmarkContainer>
  )
}

export default BookmarkBtn