import { LocContainer } from './location-info.style'
import Image from 'next/image'

type props = {
  children: any
}

const LocationInput = ({ children }: props) => {
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
        {children}
      </LocContainer>
    </div>
  )
}

export default LocationInput
