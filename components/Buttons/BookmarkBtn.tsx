import React, { useState } from 'react'
import { BookmarkContainer } from './button-bookmark.style'
import { useSelector } from 'react-redux'
import { RootReducer } from '@actions/reducer'
import axios from 'axios'

type Props = {
  id: String
  isChecked?: boolean
}

const BookmarkBtn = ({ id, isChecked = false }: Props) => {
  const [isBookmarked, setIsBookmark] = useState<boolean>(isChecked)
  const { isLogin, accessToken } = useSelector(
    (state: RootReducer) => state.user
  )

  const handleClick = async (e: React.MouseEvent<HTMLLabelElement>) => {
    // 로그인한 사용자가 아니면 북마크를 할 수 없다.
    e.preventDefault()
    if (!isLogin) return
    const { status, data } = await axios.put(
      'https://localhost:4000/user/bookmark',
      {
        id,
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        withCredentials: true,
      }
    )

    if (status === 201) {
      setIsBookmark(data.isBookmark)
    }

    // setIsBookmark(!isBookmarked)
    // console.log(`bookmark?`, isBookmarked)
    // TODO: content의 북마크 상태를 변경해주는 함수가 실행되어야 합니다.
  }

  return (
    <BookmarkContainer>
      <input
        type='checkbox'
        id={`star_${id}`}
        className='hide-checkbox'
        checked={isBookmarked}
        readOnly={true}
      />
      <label
        onClick={handleClick}
        htmlFor={`star_${id}`}
        className='star-checkbox'></label>
    </BookmarkContainer>
  )
}

export default BookmarkBtn
