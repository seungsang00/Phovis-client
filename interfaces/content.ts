import { IUser, IImage, LocationType } from './index'
import { IPhotoCard } from './photocard'

export interface IContent {
  id?: string
  imageid?: number
  mainimageUrl: string | null // mainImgUrl
  tag?: string[]
  description: string | null
  location: LocationType
  user: IUser
  likecount: number
  images: IImage[]
  title: string | null
  isLike?: boolean
  isBookMark?: boolean
}

export interface IContentBanner {
  id?: string
  title: string | null
  mainImgUrl: string | null
  username?: string | null
  userProfileUrl?: string
  userId?: string
  likesCount: number
  isLike?: boolean
  isBookMark?: boolean
}

export interface IContentMain {
  contentId: string
  id?: string
  description: string | null
  location: LocationType
  images: IImage[]
  tags?: string[]
  related: IContent[]
  photocards: IPhotoCard[]
}
