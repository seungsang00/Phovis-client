import { LocationInput } from '@components/index'
import { Input, LocationDiv } from './inputlocation.style'

interface IInput {
  location: string
}

const InputLocation = ({ location }: IInput) => {
  return (
    <Input
      type='text'
      value={location}
      placeholder='추천하는 장소가 어디인가요?'
      disabled
    />
  )
}

interface IProps {
  location: string
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
