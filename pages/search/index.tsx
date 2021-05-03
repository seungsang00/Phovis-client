import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { CommonLayout, SearchHeader, SearchContents } from '@containers/index'
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

  useEffect(() => {
    // 페이지로 이동할 때 검색 키워드가 있다면 서버로 검색 데이터를 요청합니다.
    if (searchKeyword) {
      loadSearchResult(searchKeyword)
    }
  }, [])

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setKeyword(e.target.value)
  }

  const onSubmitKeyword = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    loadSearchResult(keyword)
    setSearchKeyword(keyword)
    setKeyword('')
  }

  const loadSearchResult = (keyword: string) => {
    setIsLoading(true)

    // TODO : get search data from server
    setTimeout(() => {
      setIsLoading(false)
      if (!keyword) {
        setSearchResult([])
      } else {
        setSearchResult(sampleContents)
      }
    }, 2000)
  }

  const onLoadData = (): void => {
    console.log('onLoadData')
  }

  return (
    <CommonLayout>
      <main>
        <SearchHeader
          search={keyword}
          onSubmit={onSubmitKeyword}
          onChange={onChangeInput}
        />
        <SearchContents
          isLoading={isLoading}
          searchKeyword={searchKeyword}
          searchResult={searchResult}
          onLoadData={onLoadData}
        />
      </main>
    </CommonLayout>
  )
}

export default SearchPage
