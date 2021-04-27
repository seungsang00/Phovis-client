
import { IUser } from '../interfaces'
import { PhotoCard } from '../interfaces'
import { IUser, IPhoto } from '../interfaces'

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

export const samplePhotoCardData: PhotoCard[] = [
  {
    id: '1qwerasdf',
    imageurl:
      'https://cdn.pixabay.com/photo/2019/03/25/20/17/kaohsiung-4081256_960_720.jpg',
    description: '멋진 풍경이였어요',
    userName: 'seungsang00',
    profileImage: '',
    like: 30,
  },
  {
    id: '2qwerasdf',
    imageurl:
      'https://cdn.pixabay.com/photo/2020/11/07/23/22/beach-5722568__340.jpg',
    description: '멋진 풍경이였어요',
    userName: 'seungsang00',
    profileImage: '',
    like: 30,
  },
  {
    id: '3qwerasdf',
    imageurl:
      'https://cdn.pixabay.com/photo/2020/10/27/20/17/lake-5691800_960_720.jpg',
    description: '멋진 풍경이였어요',
    userName: 'seungsang00',
    profileImage: '',
    like: 30,
  },
  {
    id: '4qwerasdf',
    imageurl:
      'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg',
    description: '멋진 풍경이였어요',
    userName: 'seungsang00',
    profileImage: '',
    like: 30,
  },
  {
    id: '5qwerasdf',
    imageurl:
      'https://cdn.pixabay.com/photo/2021/01/08/17/56/river-5900547__340.jpg',
    description: '멋진 풍경이였어요',
    userName: 'seungsang00',
    profileImage: '',
    like: 30,
  },
]

/** Dummy photo image data. */
export const samplePhotoData: IPhoto = {
  photoUrl_v: 'https://bit.ly/3xtuSOy',
  photoUrl_s: 'https://bit.ly/3xtteMS',
  photoUrl_h: 'https://bit.ly/32RvRK2',
}
