<<<<<<< HEAD
import { IUser } from '../interfaces'
=======
import { IUser, IPhoto } from '../interfaces'
>>>>>>> 54da0d08930b679016daefc1eea9fc90f75e243e

/** Dummy user data. */
export const sampleUserData: IUser[] = [
  { id: 101, name: 'Alice', imgUrl: 'https://bit.ly/3euIgJj', contentCount: 5 },
  { id: 102, name: 'Bob', imgUrl: 'https://bit.ly/3euIgJj', contentCount: 3 },
  {
    id: 103,
    name: 'Caroline',
    imgUrl: 'https://bit.ly/3euIgJj',
    contentCount: 15,
  },
  { id: 104, name: 'Dave', imgUrl: 'https://bit.ly/3euIgJj', contentCount: 8 },
]

/** Dummy photo image data. */
export const samplePhotoData: IPhoto = {
  photoUrl_v: 'https://bit.ly/3xtuSOy',
  photoUrl_s: 'https://bit.ly/3xtteMS',
  photoUrl_h: 'https://bit.ly/32RvRK2',
}
