import { User, HandlerFn } from '../interfaces'

/** Dummy user data. */
export const sampleUserData: User[] = [
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

/** Event Handler Function Samples */
export const sampleHandler: HandlerFn = {
  handleUnfollow: () => console.log(`Unfollow!!`),
}
