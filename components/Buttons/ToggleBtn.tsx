import { FormEvent } from 'react'
import { ToggleContainer, Toggle } from './button-toggle.style'

interface IProps {
  sectionName: string
  description?: string
  onClick: (e: FormEvent) => void // 이벤트를 인자로 받아와야 한다. event의 타입
}

const ToggleBtn = ({ sectionName, description, onClick }: IProps) => (
  <ToggleContainer>
    <div className='text-area'>
      <span className='section-name'>{sectionName}</span>
      <p className='section-description'>{description}</p>
    </div>
    <Toggle type='checkbox' onClick={onClick} />
  </ToggleContainer>
)
export default ToggleBtn
