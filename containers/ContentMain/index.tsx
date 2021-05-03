import { LocationInfo, Photo } from '@components/index'
import { IContentMain } from '@interfaces'
import { MainContainer } from './contentmain.style'

/**
 * description
 * location {name, lat, lng}
 * images [{id, imageurl, description}]
 */

const ContentMain = ({
  description,
  location,
  images,
  tags,
  related,
}: IContentMain) => {
  return (
    <MainContainer>
      <section className='description'>{description}</section>
      <section className='photo'>
        {images.map((el) => (
          <Photo
            id={el.id}
            imageurl={el.imageurl}
            description={el.description}
            type={el.type}
          />
        ))}
      </section>
      <section className='location'>
        <LocationInfo locationInfo={location} />
      </section>
      <section className='tags'>tags</section>
      <section className='related-contents'>related content</section>
      <section className='photocards'>photocard</section>
    </MainContainer>
  )
}

export default ContentMain
