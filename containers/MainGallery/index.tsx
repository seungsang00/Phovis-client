import React, { useState } from 'react'
import { IPhotoCard } from '@interfaces'
import { Polaroids } from '@containers/index'
import { useInfinteScroll } from '@hooks/useInfinteScroll'

import { Container, Title, ContentContainer } from './MainGallery.style'

interface IProps {
  photoCards: IPhotoCard[]
  onScrollEnd: () => void
}

const MainGallery = ({ photoCards, onScrollEnd }: IProps) => {
  const [target, setTarget] = useState<Element | null>(null)
  useInfinteScroll({
    root: null,
    target,
    onIntersect: ([{ isIntersecting }]) => {
      // TODO : 마지막 포토카드가 화면에 노출되면 새로운 컨텐츠를 불러오는 작업 필요
      // TODO : check loading state
      if (isIntersecting) {
        // Load Data
        console.log('This is End of Page, Load more data from server')
        onScrollEnd()
      }
    },
    threshold: 1.0,
    rootMargin: '0px',
  })

  return (
    <Container>
      <Title>이런 사진을 찍을 수 있어요</Title>
      {photoCards.length > 0 && (
        <ContentContainer>
          <Polaroids type={'main'} photocards={photoCards} />
        </ContentContainer>
      )}
      {photoCards.length > 0 && <div ref={setTarget}></div>}
    </Container>
  )
}

export default MainGallery
