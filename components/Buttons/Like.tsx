import { LikeContainer, ImgContainer, LikeButton } from './like.style'
import { FormEvent, useState } from 'react'
import { useSelector } from 'react-redux'
import { RootReducer } from '@actions/reducer'
import axios from 'axios'

type props = {
  id: string
  like: number
  isChecked?: boolean
}

const Like = ({ id, like, isChecked = false }: props) => {
  const [isActive, setActive] = useState<boolean>(isChecked)
  const [count, setCount] = useState<number>(like)

  const { isLogin, accessToken } = useSelector(
    (state: RootReducer) => state.user
  )

  const handleClick = async (e: FormEvent) => {
    e.preventDefault()

    // 로그인한 사용자가 아니면 좋아요를 할 수 없다.
    if (!isLogin) return

    const { status, data } = await axios.put(
      `${process.env.NEXT_PUBLIC_API_ENDPOINT}/user/like`,
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
      setActive(data.isLike)
      data.isLike ? setCount(count + 1) : setCount(count - 1)
    }
    // console.log(e)
  }

  return (
    <LikeContainer>
      <ImgContainer isActive={isActive} onClick={handleClick}>
        <LikeButton isActive={isActive} onClick={handleClick} />
        {/* <svg
          className='heart'
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'>
          <path d='M12 4.248c-3.148-5.402-12-3.825-12 2.944 0 4.661 5.571 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-6.792-8.875-8.306-12-2.944z' />
        </svg> */}
        <span>{count}</span>
      </ImgContainer>
    </LikeContainer>
  )
}

export default Like
