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
        {related.map(({ id, mainimageUrl, title, user }) => (
          <ContentThumbnail
            contentid={id as string}
            imageurl={mainimageUrl as string}
            title={title as string}
            username={user.userName as string}
          />
        ))}
      </div>
    </Wrapper>
  )
}
export default RelatedContents
