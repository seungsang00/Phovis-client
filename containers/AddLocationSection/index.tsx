import { LocationInput } from '@components/index'
import { Input, LocationDiv } from './inputlocation.style'
import { Location } from '@interfaces'

interface IInput {
  location: Location
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
  location: Location
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
