import React, { useState } from 'react'
import Link from 'next/link'
import { useInfinteScroll } from '@hooks/useInfinteScroll'
import { ContentThumbnail } from '@components/index'
import { IContent } from '@interfaces'

interface IProps {
  isLoading: boolean
  searchKeyword: string
  searchResult: IContent[]
  onLoadData: () => void
}

const SearchContents = ({
  isLoading,
  searchKeyword,
  searchResult,
  onLoadData,
}: IProps) => {
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
    <section>
      <h2>{searchKeyword}</h2>

      {isLoading && <div>Loading...</div>}

      {!isLoading && searchResult.length === 0 && (
        <article>
          <h1>검색 결과가 없습니다.</h1>
          <Link href='/content/form'>새 출장글 등록하러 가기</Link>
        </article>
      )}

      {!isLoading && searchResult.length > 0 && (
        <article>
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
          <div ref={setTarget}>this is last item</div>
        </article>
      )}
    </section>
  )
}

export default SearchContents
