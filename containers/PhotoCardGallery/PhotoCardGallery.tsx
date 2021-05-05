import { PhotocardGalleryContainer } from './photocard-gallery'
import { IPhotoCard } from '../../interfaces/index'
// import PhotoCardPreview from '../../components/PhotoCardPreview/PhotoCardPreview'
import Polaroid from '@components/Polaroid'

type props = {
  photocards: IPhotoCard[]
}

const PhotoCardGallery = ({ photocards }: props) => {
  return (
    <PhotocardGalleryContainer>
      {photocards &&
        photocards.length > 0 &&
        photocards.map((card: IPhotoCard) => {
          const { imageurl, userName } = card
          return (
            <>
              <Polaroid
                photocardId={card.photocardId}
                key={card.photocardId}
                imageurl={imageurl}
                userName={userName}
              />
              {/* <PhotoCardPreview
                key={card.photocardId}
                description={description}
                imageurl={url}
                userName={userName}
                profileImage={profileImage}
                like={like}
              /> */}
            </>
          )
        })}
    </PhotocardGalleryContainer>
  )
}

export default PhotoCardGallery
