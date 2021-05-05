import { Wrapper } from './polaroid.style'
import { IPhotoCard } from '@interfaces'
// import { LikeBtn } from '@components/Buttons'

type Props = {
  handleModify?: React.MouseEventHandler<HTMLDivElement>
}

const Polaroid = ({
  handleModify,
  imageurl,
  userName,
  description,
}: IPhotoCard & Props) => {
  return (
    <Wrapper>
      <div onClick={handleModify}>수정하기</div>
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
