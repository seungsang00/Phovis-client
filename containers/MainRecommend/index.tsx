import React from 'react'
import { IContent, IPhotoCard, ITag } from '@interfaces'
import { ContentThumbnail, TagBig } from '@components/index'

import {
  Container,
  Title,
  ContentTagContainer,
  ContentGrid,
  TagList,
} from './MainRecommend.style'

interface IProps {
  contentList?: IContent[]
  photoCards: IPhotoCard[]
  tags: ITag[]
  onTagClickHandler: (tag: string) => void
}

const MainRecommend = ({ contentList, tags, onTagClickHandler }: IProps) => (
  <Container>
    <Title>여기는 어때요?</Title>
    <ContentTagContainer>
      <ContentGrid>
        {contentList &&
          contentList.map((content) => (
            <ContentThumbnail
              key={content.id}
              contentid={content.id as string}
              imageurl={content.mainimageUrl as string}
              title={content.title as string}
              username={content.user.userName as string}
            />
          ))}
      </ContentGrid>
      <TagList>
        <h3>관심 카테고리</h3>
        <div className='tags'>
          {tags.length > 0 &&
            tags.map((tag) => (
              <TagBig
                key={tag.tag}
                tagname={tag.tag as string}
                onClick={() => onTagClickHandler(tag.tag as string)}
              />
            ))}
        </div>
      </TagList>
    </ContentTagContainer>
  </Container>
)

export default MainRecommend
