import React, { useState } from 'react'
import Link from 'next/link'
import { useInfinteScroll } from '@hooks/useInfinteScroll'
import { ContentThumbnail } from '@components/index'
import { IContent } from '@interfaces'
import { SearchResultSection } from './searchcontent.style'

interface IProps {
  isLoading: boolean
  searchResult: IContent[]
  onLoadData: () => void
}

const SearchContents = ({ isLoading, searchResult, onLoadData }: IProps) => {
  const [target, setTarget] = useState<Element | null>(null)
  useInfinteScroll({
    root: null,
    target,
    onIntersect: ([{ isIntersecting }]) => {
      if (isIntersecting) {
        // Load Data
        // console.log('This is End of Page, Load more data from server')
        onLoadData()
      }
    },
    threshold: 1.0,
    rootMargin: '0px',
  })

  return (
    <SearchResultSection>
      {isLoading && <div>Loading...</div>}

      {!isLoading && searchResult.length === 0 && (
        <article>
          <h1>검색결과가 없습니다.</h1>
          <Link href='/content/form'>
            <div className='link-to-write'>
              <span>내가 1등🥇</span>으로 추천하러 가기
            </div>
          </Link>
        </article>
      )}

      {!isLoading && searchResult.length > 0 && (
        <article>
          <div>
            {searchResult.map((result) => {
              const {
                id,
                mainimageUrl,
                user: { userName },
                title,
              } = result
              return (
                <ContentThumbnail
                  key={id}
                  title={title as string}
                  contentid={id as string}
                  username={userName as string}
                  imageurl={mainimageUrl as string}
                />
              )
            })}
          </div>
          <div ref={setTarget}></div>
        </article>
      )}
    </SearchResultSection>
  )
}

export default SearchContents
