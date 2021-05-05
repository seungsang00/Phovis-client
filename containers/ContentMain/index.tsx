import { LocationInfo, Photo, TagSmall } from '@components/index'
import Polaroids from '@containers/Polaroids'
import RelatedContents from '@containers/RelatedContents'
import { IContentMain } from '@interfaces'
import { MainContainer } from './contentmain.style'

/**
 * description
 * location {name, lat, lng}
 * images [{id, uri, description}]
 */

const ContentMain = ({
  contentId,
  description,
  location,
  images,
  tags,
  related,
  photocards,
}: IContentMain) => {
  const handleTagClick = () => {
    console.log(`태그 검색 결과로 이동`)
  }

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
      <section className='tags'>
        {tags?.map((el) => (
          <TagSmall tagname={el} onClick={handleTagClick} />
        ))}
      </section>
      <section className='related-contents'>
        <RelatedContents related={related} />
      </section>
      <section className='photocards'>
        <Polaroids
          type={'content'}
          locationinfo={location}
          photocards={photocards}
          contentId={contentId}
        />
      </section>
    </MainContainer>
  )
}

export default ContentMain
