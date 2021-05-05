// import { PhotocardGalleryContainer } from './photocard-gallery'
import { IPhotoCard } from '../../interfaces/index'
import Polaroids from '@containers/Polaroids'

type props = {
  photocards: IPhotoCard[]
}

const PhotoCardGallery = ({ photocards }: props) => {
  return (
    <div className='flex'>
      <Polaroids photocards={photocards} />
    </div>
  )
}

export default PhotoCardGallery
