import { SliderContainer, Slideshowdots } from './main-banner.style'
import { IContent } from '../../interfaces/index'
import React, { useState } from 'react'

interface props {
  contents: IContent[]
  onClickItem: (contentId: String) => void
}
const MainBanner = ({ contents, onClickItem }: props) => {
  const [index, setIndex] = useState(0)
  return (
    <SliderContainer index={index}>
      <div className='slider'>
        {contents.map((contentCard, index) => {
          const { id, mainimageUrl, title, description } = contentCard
          return (
            <div
              id={id}
              className='slide'
              key={index}
              onClick={() => onClickItem(id as string)}>
              <img className='slideimg' src={mainimageUrl} />
              <div className='infocontainer'>
                <h1 className='title'>{title}</h1>
                <span className='description'>{description}</span>
              </div>
            </div>
          )
        })}
      </div>
      <Slideshowdots>
        {contents.map((_, idx) => {
          return (
            <div
              key={idx}
              className={`dot${index === idx ? ' active' : ''}`}
              onClick={() => setIndex(idx)}></div>
          )
        })}
      </Slideshowdots>
    </SliderContainer>
  )
}

export default MainBanner
