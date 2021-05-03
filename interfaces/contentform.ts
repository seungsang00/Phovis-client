export interface IContentForm {
  title: string
  mainImage: MainImage
  tags: Tag[]
  description: string
  location: LocationType
  images: Image[]
}

type MainImage = {
  data: Blob | null
  url: string | undefined
}

type Image = {
  data: Blob
  name: string
  url: string
  description: string
  type: string
}

export type LocationType = {
  location: string | undefined
  lat: number | undefined
  lng: number | undefined
}

export type Tag = {
  id: string
  name: string
}
