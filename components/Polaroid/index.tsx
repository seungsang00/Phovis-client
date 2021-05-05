import { Wrapper } from './polaroid.style'
import { IPhotoCard } from '@interfaces'
// import { LikeBtn } from '@components/Buttons'

interface Props {
  handleModify?: () => void
}

const Polaroid = ({
  handleModify,
  imageurl,
  userName,
  description,
}: IPhotoCard & Props) => {
  return (
    <Wrapper>
      <button onClick={handleModify}>수정하기</button>
      <div className='polaroid'>
        <img src={imageurl} />
        <div className='caption'>
          <p className='description'>{description}</p>
          <span className='user-info'>@ {userName}</span>
        </div>
      </div>
    </Wrapper>
  )
}
export default Polaroid
