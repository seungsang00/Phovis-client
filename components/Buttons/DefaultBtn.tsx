import { Button } from './defaultbtn.style'

interface IButton {
  children: string
  onClick: any
}

export const DefaultBtn = ({ children, onClick }: IButton) => (
  <Button onClick={onClick}>{children}</Button>
)
