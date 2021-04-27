import { LikeContainer, ImgContainer } from '../styles/like'
import { FormEvent, useState } from 'react'

type props = {
  like: number
}

const Like = ({ like }: props) => {
  const [isActive, setActive] = useState<boolean>(false)

  const handleClick = (e: FormEvent) => {
    e.preventDefault()
    setActive(!isActive)
    console.log(e)
    // like state도 1씩증가하고 빠지고 하는거 필요함.
  }

  return (
    <LikeContainer>
      <ImgContainer isActive={isActive} onClick={handleClick}>
        <svg
          className='heart'
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'>
          <path d='M12 4.248c-3.148-5.402-12-3.825-12 2.944 0 4.661 5.571 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-6.792-8.875-8.306-12-2.944z' />
        </svg>
        <span>{like}</span>
      </ImgContainer>
    </LikeContainer>
  )
}

export default Like
