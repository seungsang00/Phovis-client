import styled from '@styles/themed-components'
import { location_inactive } from '@styles/icons'

const PinIcon = styled.span`
  width: 21px;
  height: 21px;
  ${location_inactive}
`

const LocationBtn = () => <PinIcon />

export default LocationBtn
