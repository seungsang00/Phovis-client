export interface IContentForm {
  title: string
  mainimageData: Blob | null
  tags: Tag[]
  description: string
  location: Location
  form: IForm
}

interface IForm {
  images: Image[]
  preview: Preview[]
}

type Preview = {
  name: string
  url: string
  description: string
}

type Image = {
  data: Blob
  description: string
  type: string
}

export type Location = {
  location: string | undefined
  lat: number | undefined
  lng: number | undefined
}

export type Tag = {
  id: string
  name: string
}
