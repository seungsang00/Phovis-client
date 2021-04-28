import { useState } from 'react'
import { BookmarkContainer } from './button-bookmark'

const BookmarkBtn = () => {
  const [isBookmarked, setBookmark] = useState<boolean>(false)

  const handleClick = () => {
    setBookmark(!isBookmarked)
    console.log(`bookmark?`, isBookmarked)
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
