import Link from 'next/link'
import { Li, A } from './tab-menu'

type Props = {
  isOwner: boolean
}

const TabMenu = ({ isOwner }: Props) => {
  return (
    <ul>
      <Li>
        <Link href='/'>
          <A>출장글</A>
        </Link>
      </Li>
      <Li>
        <Link href='/'>
          <A>좋아요</A>
        </Link>
      </Li>
      <Li>
        <Link href='/'>
          <A>즐겨찾기</A>
        </Link>
      </Li>
      <Li>
        <Link href='/'>
          <A>팔로우</A>
        </Link>
      </Li>
      {isOwner ? (
        <Li>
          <Link href='/'>
            <A>팔로우</A>
          </Link>
        </Li>
      ) : (
        ''
      )}
    </ul>
  )
}

export default TabMenu
