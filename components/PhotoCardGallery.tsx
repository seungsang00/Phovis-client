import { PhotocardGalleryContainer } from '../styles/photocard-gallery'
import { PhotoCard } from '../interfaces/index'

type props = {
  photocards: PhotoCard[]
}

const PhotoCardGallery = ({ photocards }: props) => {
  return (
    <PhotocardGalleryContainer>
      {photocards.map((card) => (
        <PhotoCardPreview {...card} />
      ))}
    </PhotocardGalleryContainer>
  )
}

export default PhotoCardGallery
