import { Wrapper } from './polaroid.style'
import { IPhotoCard } from '@interfaces'

interface Props {
  handleModify?: () => void
  type: 'main' | 'content'
}

const Polaroid = ({
  handleModify,
  imageurl,
  userName,
  description,
  type,
}: IPhotoCard & Props) => {
  return (
    <Wrapper>
      {type === 'content' && <button onClick={handleModify}>수정하기</button>}
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
