import { useState } from 'react'
import { BookmarkContainer } from '../styles/button-bookmark'

const BookmarkBtn = () => {
  const [isBookmarked, setIsBookmark] = useState<boolean>(false)

  const handleClick = () => {
    setIsBookmark(!isBookmarked)
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
