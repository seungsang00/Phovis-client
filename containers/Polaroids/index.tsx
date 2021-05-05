import { Polaroid } from '@components/index'
import { IPhotoCard } from '@interfaces'
import { Container } from './polaroids.style'

interface IProps {
  photocards: IPhotoCard[]
}
const Polaroids = ({ photocards }: IProps) => {
  return (
    <>
      <Container className='thumbnails'>
        {photocards &&
          photocards.length > 0 &&
          photocards.map((photoCard) => {
            const { photocardId, url, description, userName, like } = photoCard
            return (
              <Polaroid
                key={photocardId}
                photocardId={photocardId}
                url={url}
                description={description}
                userName={userName}
                like={like}
              />
            )
          })}
      </Container>
    </>
  )
}
export default Polaroids
