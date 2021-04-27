import { FormEvent } from 'react'
import { ToggleContainer, Toggle } from '../styles/button-toggle'

interface IProps {
  sectionName: string
  onClick: (e: FormEvent) => void // 이벤트를 인자로 받아와야 한다. event의 타입
}

const ToggleBtn = ({ sectionName, onClick }: IProps) => (
  <ToggleContainer>
    <span>{sectionName}</span>
    <Toggle type='checkbox' onClick={(e) => onClick(e)} />
  </ToggleContainer>
)
export default ToggleBtn
