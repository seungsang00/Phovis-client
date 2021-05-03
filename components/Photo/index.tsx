import { IImage } from '@interfaces'
import { DivWithBgImg } from '@styles/common'
import { PhotoWrap } from './photo.style'

// TODO: 사진을 클릭하면 원래의 크기로 보여주는 기능을 추가해야 합니다.
const Photo = ({ imageurl, description }: IImage) => {
  return (
    <PhotoWrap className='photo-wrap'>
      <div className='photo'>
        <div className='photo-bg'>
          <DivWithBgImg bgUrl={imageurl} />
        </div>
        <div className='photo-info'>
          <p>{description}</p>
        </div>
      </div>
    </PhotoWrap>
  )
}
export default Photo
