import { PhotocardGalleryContainer } from './photocard-gallery'
import { IPhotoCard } from '../../interfaces/index'
import PhotoCardPreview from '../../components/PhotoCardPreview/PhotoCardPreview'

type props = {
  photocards: IPhotoCard[]
}

const PhotoCardGallery = ({ photocards }: props) => {
  return (
    <PhotocardGalleryContainer>
      {photocards.map((card: IPhotoCard) => (
        <PhotoCardPreview key={card.id} {...card} />
      ))}
    </PhotocardGalleryContainer>
  )
}

export default PhotoCardGallery
