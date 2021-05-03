import { IUser, IImage, LocationType } from './index'
import { IPhotoCard } from './photocard'

export interface IContent {
  contentid: string
  imageid?: number
  imageurl: string // mainImgUrl
  tag?: string[]
  description: string
  location: LocationType
  user: IUser
  likecount: number
  images: IImage[]
  title: string
}

export interface IContentBanner {
  title: string
  mainImgUrl: string
  username: string
  userProfileUrl?: string
  likesCount: number
}

export interface IContentMain {
  description: string
  location: LocationType
  images: IImage[]
  tags?: string[]
  related: IContent[]
  photocards: IPhotoCard[]
}
