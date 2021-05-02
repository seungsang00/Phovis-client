import { DivWithBgImg } from '@styles/index'
import { ContentBannerContainer } from './contentbanner.style'

/**
title
mainImgUrl
likesCount
isBookmarked
username
profileImgUrl
 */
interface IProps {
  mainImgUrl: string
}

const ContentBanner = ({ mainImgUrl }: IProps) => {
  return (
    <ContentBannerContainer>
      <DivWithBgImg bgUrl={mainImgUrl}>banner</DivWithBgImg>
    </ContentBannerContainer>
  )
}

export default ContentBanner
