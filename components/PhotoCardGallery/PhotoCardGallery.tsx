import { PhotocardGalleryContainer } from './photocard-gallery'
import { PhotoCard } from '../../interfaces/index'
import PhotoCardPreview from '../PhotoCardPreview/PhotoCardPreview'

type props = {
  photocards: PhotoCard[]
}

const PhotoCardGallery = ({ photocards }: props) => {
  return (
    <PhotocardGalleryContainer>
      {photocards.map((card: PhotoCard) => (
        <PhotoCardPreview key={card.id} {...card} />
      ))}
    </PhotocardGalleryContainer>
  )
}

export default PhotoCardGallery
