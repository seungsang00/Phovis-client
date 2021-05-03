import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useInfinteScroll } from '@hooks/useInfinteScroll'
import { ThumbnailSquare } from '@components/index'
import { CommonLayout } from '@containers/index'
import { IContent } from '@interfaces'

// NOTE : Test data
import { sampleContents } from '@utils/index'
//

const SearchPage = () => {
  const router = useRouter()
  const { query } = router
  const queryKeyword = (query.keyword as string) || ''

  const [keyword, setKeyword] = useState<string>('')
  const [searchKeyword, setSearchKeyword] = useState<string>(queryKeyword)
  const [searchResult, setSearchResult] = useState<IContent[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const [target, setTarget] = useState<Element | null>(null)
  useInfinteScroll({
    root: null,
    target,
    onIntersect: ([{ isIntersecting }]) => {
      if (isIntersecting) {
        // Load Data
        console.log('This is End of Page, Load more data from server')
      }
    },
    threshold: 1.0,
    rootMargin: '0px',
  })

  useEffect(() => {
    // 페이지로 이동할 때 검색 키워드가 있다면 서버로 검색 데이터를 요청합니다.
    if (searchKeyword) {
      loadSearchResult()
    }
  }, [])

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setKeyword(e.target.value)
  }

  const onSubmitKeyword = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    console.log('submit keyword : ', keyword)
    setSearchKeyword(keyword)
    setKeyword('')
    loadSearchResult()
  }

  const loadSearchResult = async () => {
    setIsLoading(true)

    // TODO : get search data from server
    setTimeout(() => {
      setIsLoading(false)
      if (!searchKeyword) {
        setSearchResult([])
      } else {
        setSearchResult(sampleContents)
      }
    }, 2000)
  }

  return (
    <CommonLayout>
      <main>
        <section>
          <form action='' onSubmit={onSubmitKeyword}>
            <input
              name='keyword'
              value={keyword}
              placeholder='검색어를 입력해 주세요 📷'
              onChange={onChangeInput}
            />
          </form>
        </section>
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
                  contentid,
                  imageurl,
                  user: { name },
                } = result
                return (
                  <ThumbnailSquare
                    key={contentid}
                    profileImage='https://bit.ly/3euIgJj'
                    username={name}
                    bgImage={imageurl}
                  />
                )
              })}
              <div ref={setTarget}>this is last item</div>
            </article>
          )}
        </section>
      </main>
    </CommonLayout>
  )
}

export default SearchPage
