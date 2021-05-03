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
}

export interface IContentBanner {
  title: string | null
  mainImgUrl: string | null
  username: string | null
  userProfileUrl?: string
  likesCount: number
}

export interface IContentMain {
  description: string | null
  location: LocationType
  images: IImage[]
  tags?: string[]
  related: IContent[]
  photocards: IPhotoCard[]
}
