import { LocationInput } from '@components/index'
import { Input, LocationDiv } from './inputlocation.style'
import { LocationType } from '@interfaces'

interface IInput {
  location: LocationType
}

const InputLocation = ({ location }: IInput) => {
  return (
    <Input
      type='text'
      value={location.location || ''}
      placeholder='추천하는 장소가 어디인가요?'
      disabled
    />
  )
}

interface IProps {
  location: LocationType
  onClick: () => void
}

const AddLocationSection = ({ location, onClick }: IProps) => {
  return (
    <section>
      <LocationDiv onClick={onClick}>
        <LocationInput children={<InputLocation location={location} />} />
      </LocationDiv>
    </section>
  )
}

export default AddLocationSection
