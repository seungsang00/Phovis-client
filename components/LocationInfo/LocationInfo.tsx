import { LocContainer } from './location-info.style'
import Image from 'next/image'
import { LocationType } from '@interfaces'

// TODO: lat, lng 정보를 이용해 지도로 마커를 제공하는 기능 추가 (Optional)
interface IProps {
  locationInfo: LocationType
}

const LocationInfo = ({ locationInfo }: IProps) => {
  const { location, lat, lng } = locationInfo
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
