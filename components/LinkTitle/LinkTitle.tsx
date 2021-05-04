import { LinkTitleContainer } from './link-title.style'
import Link from 'next/link'

interface IProps {
  to: string
}

const LinkTitle = ({ to }: IProps) => (
  <LinkTitleContainer>
    <Link href={to}>Title</Link>
  </LinkTitleContainer>
)

export default LinkTitle
