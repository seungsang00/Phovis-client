import { IHandler } from '../interfaces'

/** Event Handler Function Samples */
export const sampleHandler: IHandler = {
  handleUnfollow: () => console.log(`Unfollow!!`),
  handleToggle: () => console.log(`공개설정 변경`),
  handler: () => console.log(`핸들러 함수 실행!`),
}
