import { LocContainer } from './location-info.style'
import { LocationBtn } from '@components/Buttons'

type props = {
  children: any
}

const LocationInput = ({ children }: props) => {
  return (
    <div>
      <LocContainer>
        <LocationBtn />
        {children}
      </LocContainer>
    </div>
  )
}

export default LocationInput
