import { SliderContainer, Slideshowdots } from './main-banner.style'
import { IContent } from '../../interfaces/index'
import { useEffect, useState } from 'react'

interface props {
  contents: IContent[]
}
const MainBanner = ({ contents }: props) => {
  const [index, setIndex] = useState(0)

  useEffect(() => {})
  return (
    <SliderContainer index={index}>
      <div className='slider'>
        {contents.map((contentCard, index) => {
          const { imageurl, title, description } = contentCard
          return (
            <div className='slide' key={index}>
              <img className='slideimg' src={imageurl} />
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
