import Link from 'next/link'
import { LinkBannerDiv } from '../styles/link-banner'

const LinkBanner = () => (
  <LinkBannerDiv>
    나만의 출사 장소를 추천해주세요 <Link href='/'>+ 추천하러 가기</Link>
  </LinkBannerDiv>
)

export default LinkBanner
