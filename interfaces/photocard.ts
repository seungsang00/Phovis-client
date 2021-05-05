import { LocationType } from './contentform'
import { ITag } from './tag'

export type IPhotoCard = {
  photocardId?: string
  imageId?: number
  description?: string
  location?: LocationType
  tags?: ITag[]
  userName: string
  profileImage?: string
  like?: number
  imageurl: string
  userId?: string
}
