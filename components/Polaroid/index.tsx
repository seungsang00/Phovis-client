import { Wrapper } from './polaroid.style'
import { IPhotoCard } from '@interfaces'
// import { LikeBtn } from '@components/Buttons'

const Polaroid = ({ url, userName, description }: IPhotoCard) => {
  return (
    <Wrapper>
      <div className='polaroid'>
        <img src={url} />
        <div className='caption'>
          <p className='description'>{description}</p>
          <span className='user-info'>@ {userName}</span>
        </div>
      </div>
    </Wrapper>
  )
}
export default Polaroid
