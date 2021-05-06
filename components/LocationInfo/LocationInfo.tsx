import { LocContainer } from './location-info.style'
import { LocationType } from '@interfaces'
import { LocationBtn } from '@components/Buttons'

// TODO: lat, lng 정보를 이용해 지도로 마커를 제공하는 기능 추가 (Optional)
interface IProps {
  locationInfo: LocationType
}

const LocationInfo = ({ locationInfo }: IProps) => {
  const { location } = locationInfo ? locationInfo : ({} as LocationType)
  return (
    <div>
      <LocContainer>
        <LocationBtn />
        <span className='location'>{location}</span>
      </LocContainer>
    </div>
  )
}

export default LocationInfo
