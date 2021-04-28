import { LocContainer } from './location-info.style'
import Image from 'next/image'

type props = {
  location: string
}

const LocationInfo = ({ location = '서울시 용산구 304-2' }: props) => {
  return (
    <div>
      <LocContainer>
        <Image
          layout='fixed'
          src='/src/iconmonstr-location-1-240.png'
          alt='location pin'
          width={24}
          height={24}
        />
        <span className='location'>{location}</span>
      </LocContainer>
    </div>
  )
}

export default LocationInfo
