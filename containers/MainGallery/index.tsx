import React from 'react'
import { IPhotoCard } from '@interfaces'
import { PhotoCardGallery } from '@containers/index'

// TODO : 마지막 포토카드가 화면에 노출되면 새로운 컨텐츠를 불러오는 작업 필요

interface IProps {
  photoCards: IPhotoCard[]
}

const MainGallery = ({ photoCards }: IProps) => {
  return (
    <section>
      {photoCards.length > 0 && <PhotoCardGallery photocards={photoCards} />}
    </section>
  )
}

export default MainGallery
