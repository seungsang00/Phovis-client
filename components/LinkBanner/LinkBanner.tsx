import Link from 'next/link'
import { LinkBannerDiv } from './link-banner.style'

// TODO: Link의 href 주소는 컨텐츠 작성 페이지로 변경해야 합니다 && 로그인 여부에 따른 분기처리가 필요합니다 (로그인 페이지로 이동 or 작성 페이지로 이동)
type Props = {
  link: string
}

const LinkBanner = ({ link }: Props) => (
  <LinkBannerDiv>
    <Link href={link}>
      <div>
        <span>나만의 출사 장소를 추천해주세요</span>
        <span>📝 추천글 쓰러가기</span>
      </div>
    </Link>
  </LinkBannerDiv>
)
export default LinkBanner
