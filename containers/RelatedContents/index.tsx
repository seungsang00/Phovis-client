import { ContentThumbnail } from '@components/index'
import { IContent } from '@interfaces'
import { Wrapper } from './relatedcontents.style'

interface IProps {
  related: IContent[]
}
const RelatedContents = ({ related }: IProps) => {
  return (
    <Wrapper>
      <h2 className='section-title'>여기는 어때요?</h2>
      <div className='thumbnails'>
        {related.map(({ contentid, imageurl, title, user }) => (
          <ContentThumbnail
            contentid={contentid}
            imageurl={imageurl}
            title={title}
            username={user.name}
          />
        ))}
      </div>
    </Wrapper>
  )
}
export default RelatedContents
