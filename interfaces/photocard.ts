import { LocationType } from './contentform'

export type IPhotoCard = {
  photocardId: string
  imageId?: number
  url: string
  description?: string
  location?: LocationType
  tags?: string[]
  userName: string
  profileImage?: string
  like?: number
}
