import { PhotocardGalleryContainer } from './photocard-gallery'
import { IPhotoCard } from '../../interfaces/index'
import PhotoCardPreview from '../../components/PhotoCardPreview/PhotoCardPreview'

type props = {
  photocards: IPhotoCard[]
}

const PhotoCardGallery = ({ photocards }: props) => {
  return (
    <PhotocardGalleryContainer>
      {photocards &&
        photocards.length > 0 &&
        photocards.map((card: IPhotoCard) => {
          const { description, url, userName, profileImage, like } = card
          return (
            <PhotoCardPreview
              key={card.photocardId}
              description={description}
              imageurl={url}
              userName={userName}
              profileImage={profileImage}
              like={like}
            />
          )
        })}
    </PhotocardGalleryContainer>
  )
}

export default PhotoCardGallery
