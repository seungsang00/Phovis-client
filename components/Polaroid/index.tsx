import { Wrapper, EditButton } from './polaroid.style'
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
      {type === 'content' && <EditButton onClick={handleModify}></EditButton>}
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
