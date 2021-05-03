import { ContentThumbnail, LinkTitle } from '@components/index'
import { IContent } from '@interfaces'
import { Wrapper } from './relatedcontents.style'

interface IProps {
  related: IContent[]
}
const RelatedContents = ({ related }: IProps) => {
  return (
    <Wrapper>
      <h1>Related Contents</h1>
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
