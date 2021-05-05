import { LocationType } from './contentform'

export type IPhotoCard = {
  photocardId?: string
  imageId?: number
  description?: string
  location?: LocationType
  tags?: string[]
  userName?: string
  profileImage?: string
  like?: number
  imageurl?: string
}
