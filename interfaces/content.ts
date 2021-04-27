import { IUser, IImage } from './index'

export interface IContent {
  contentid: string
  imageid: number
  imageurl: string
  tag?: string
  description: string
  location: string
  user: IUser
  likecount: number
  images: IImage[]
  title: string
}
