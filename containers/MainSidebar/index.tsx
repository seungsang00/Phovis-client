import React from 'react'
import { TagBig } from '@components/index'
import { ITag } from 'interfaces'

interface IProps {
  tags: ITag[]
  onTagClickHandler: (tag: string) => void
}

// TODO : 스타일 작성시 좌측에 띄워서 표시
// TODO : 새 컨텐츠 작성 링크로 이동하는 버튼 스타일 작성

const MainSidebar = ({ tags, onTagClickHandler }: IProps) => (
  <aside>
    <h3>🏄‍♂️ 관심 카테고리</h3>
    <div>
      {tags.length > 0 &&
        tags.map((tag) => {
          const { tag: tagname } = tag
          return (
            <TagBig
              key={tagname}
              tagname={tagname as string}
              onClick={() => onTagClickHandler(tagname as string)}
            />
          )
        })}
      {/* <div>Make a new content</div> */}
    </div>
  </aside>
)

export default MainSidebar
