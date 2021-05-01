import axios, { AxiosResponse } from 'axios'
import * as actionTypes from './actionTypes'

const { ContentAction } = actionTypes

interface ITag {
  id: string
  name: string
}

type ContentData = {
  title: string
  description: string
  location: string
  tags: (null | ITag)[]
  images: any[]
  mainImageData: any | null
}

type contentState = {
  data?: ContentData | null
}

// 초기상태를 선언합니다
const initialContent = {
  title: '',
  description: '',
  location: '',
  tags: [],
  images: [],
  mainImageData: null,
}
const initialState: contentState = { data: initialContent }

// disfetch function
const successContentUpload = (data: AxiosResponse) => ({
  type: ContentAction.CONTENT_UPLOAD_SUCCESS,
  payload: data,
})

const errorContentUpload = (data: AxiosResponse | string) => ({
  type: ContentAction.CONTENT_UPLOAD_ERROR,
  payload: data,
})

// TODO : make disfetch factory pattern

export const uploadContent = (content: any) => {
  return async (dispatch: Function) => {
    try {
      const data = await axios.post('https://localhost:4000/content', content, {
        withCredentials: true,
      })
      return dispatch(successContentUpload(data))
    } catch (e) {
      dispatch(errorContentUpload('error'))
      throw e
    }
  }
}

// 모든 액션 겍체들에 대한 타입을 준비해줍니다.
// ReturnType<typeof _____> 는 특정 함수의 반환값을 추론해줍니다
// 상단부에서 액션타입을 선언 할 떄 as const 를 하지 않으면 이 부분이 제대로 작동하지 않습니다.
type contentAction =
  | ReturnType<typeof successContentUpload>
  | ReturnType<typeof errorContentUpload>

// 이 리덕스 모듈에서 관리 할 상태의 타입을 선언합니다

function content(
  state: contentState = initialState,
  action: contentAction
): contentState {
  switch (action.type) {
    case ContentAction.CONTENT_UPLOAD_SUCCESS:
      const { data } = action.payload as AxiosResponse
      return { ...state, data }
    default:
      return state
  }
}

export default content
