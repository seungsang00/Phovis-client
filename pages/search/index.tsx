import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { CommonLayout, SearchHeader, SearchContents } from '@containers/index'
import { IContent } from '@interfaces'

// import axios from 'axios'

// NOTE : Test data
import { sampleContents } from '@utils/index'
//

const LOCAL_KEY_SEARCH_HISTORY = 'LOCAL_KEY_SEARCH_HISTORY'

const SearchPage = () => {
  const router = useRouter()
  const { query } = router
  const queryKeyword = (query.keyword as string) || ''

  const [keyword, setKeyword] = useState<string>('')
  const [searchKeyword, setSearchKeyword] = useState<string>(queryKeyword)
  const [searchHistory, setSearchHistory] = useState<string[]>([])
  const [searchResult, setSearchResult] = useState<IContent[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)

  useEffect(() => {
    // 페이지로 이동할 때 검색 키워드가 있다면 서버로 검색 데이터를 요청합니다.
    if (searchKeyword) {
      loadSearchResult(searchKeyword)
    }

    const localSearchHistory = localStorage.getItem(LOCAL_KEY_SEARCH_HISTORY)
    if (localSearchHistory) {
      const parsed = JSON.parse(localSearchHistory)
      setSearchHistory(parsed)
    }
  }, [])

  useEffect(() => {
    console.log('new history : ', searchHistory)
    localStorage.setItem(
      LOCAL_KEY_SEARCH_HISTORY,
      JSON.stringify(searchHistory)
    )
  }, [searchHistory])

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
        setSearchHistory([...searchHistory, keyword])
      }
    }, 2000)

    // const { status, data } = await axios.get('https://localhost:4000/content', {
    //   params: {
    //     maxnum: 15,
    //     tag: keyword,
    //   },
    // })

    // if(status === 200){
    //   // TODO : show data
    // }
    // else{
    //   // TODO : show no result
    // }
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
        {searchHistory.length > 0 &&
          searchHistory.map((el, idx) => <div key={idx}>{el}</div>)}
      </main>
    </CommonLayout>
  )
}

export default SearchPage

// TODO : make server side render method
