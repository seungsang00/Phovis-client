import React, { useState } from 'react'
import { IPhotoCard } from '@interfaces'
import { Polaroids } from '@containers/index'
import { useInfinteScroll } from '@hooks/useInfinteScroll'

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
    <section>
      {photoCards.length > 0 && (
        <div className='flex'>
          <Polaroids type={'main'} photocards={photoCards} />
        </div>
      )}
      {photoCards.length > 0 && <div ref={setTarget}>Content Loder</div>}
    </section>
  )
}

export default MainGallery
