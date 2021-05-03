import React, { Dispatch, SetStateAction, useState } from 'react'
import { MapContainer, Input } from './kakaomap.style'

export const KakaoMapContainer = () => <MapContainer id='map'></MapContainer>

interface IProps {
  value: string
  onSubmit: Dispatch<SetStateAction<string>>
}

export const SearchInput = ({ value, onSubmit }: IProps) => {
  const [newQuery, setnewQuery] = useState(value)
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setnewQuery(e.target.value)
  }
  const handleKeydown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.keyCode === 13) {
      onSubmit(newQuery)
    }
  }

  return (
    <Input
      type='text'
      value={newQuery}
      onChange={onChange}
      onKeyDown={handleKeydown}
      placeholder=' 🔍 추천할 장소의 키워드를 검색해주세요!'
      autoFocus
    />
  )
}
