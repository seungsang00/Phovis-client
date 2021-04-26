import { PhotocardGalleryContainer } from '../styles/photocard-gallery'
import { PhotoCard } from '../interfaces/index'
import PhotoCardPreview from './PhotoCardPreview'

type props = {
  photocards: PhotoCard[]
}

const PhotoCardGallery = ({ photocards }: props) => {
  return (
    <PhotocardGalleryContainer>
      {photocards.map((card: PhotoCard) => (
        <PhotoCardPreview {...card} />
      ))}
    </PhotocardGalleryContainer>
  )
}

export default PhotoCardGallery
