import axios, { AxiosResponse } from 'axios'
// ! Action Types
import { ContentAction } from './actionTypes'
// ! interface
import { IContent, IPhotoCard } from '@interfaces'
export interface ContentState {
  error: null | string | AxiosResponse<any>
  contentData: IContent
  relatedContentList: IContent[]
  photocardList: IPhotoCard[]
}

// ! 초기 상태 선언
const initialState: ContentState = {
  error: null,
  contentData: {
    id: undefined,
    mainimageUrl: null,
    description: null,
    location: {
      location: null,
      lat: undefined,
      lng: undefined,
    },
    user: {
      id: null,
      userName: null,
      profileImg: undefined,
    },
    likecount: 0,
    images: [],
    title: null,
  },
  relatedContentList: [],
  photocardList: [],
}

// ! make dispatch factory pattern
const dispatchGetData = (action: string, data: any) => ({
  type: action,
  payload: data,
})

export const getContentData = (contentid: string) => {
  return async (dispatch: Function) => {
    try {
      const res = await axios.get(
        `https://localhost:4000/content?id=${contentid}`
      )
      console.log(`응답??`, res)
      if (res.status === 200) {
        const { result } = res.data
        // todo: setStatus
        dispatch(
          dispatchGetData(ContentAction.GET_CONTENT_DATA_SUCCESS, result)
        )
      } else {
        // todo: error
        dispatch(
          dispatchGetData(
            ContentAction.GET_CONTENT_DATA_ERROR,
            'failed load content'
          )
        )
      }
    } catch (e) {
      dispatch(
        dispatchGetData(
          ContentAction.GET_CONTENT_DATA_ERROR,
          'error load banner : ' + e
        )
      )
    }
  }
}

export const getRelatedContentList = () => {
  return async (dispatch: Function) => {
    try {
      // todo: 연관 컨텐츠 요청
    } catch (e) {
      throw e
    }
  }
}

export const getRelatedPhotocardList = () => {
  return async (dispatch: Function) => {
    try {
      // TODO: 연관 포토카드 요청
      const result = await axios.get(`https://localhost:4000/photocard`)
    } catch (e) {
      throw e
    }
  }
}

type contentAction = ReturnType<typeof dispatchGetData>

function content(
  state: ContentState = initialState,
  action: contentAction
): ContentState {
  switch (action.type) {
    case ContentAction.GET_CONTENT_DATA_SUCCESS:
      const getContentData = action.payload
      const getContent = { ...state.contentData, ...getContentData }
      // console.log(`페이로드`, action.payload)
      // console.log(`겟컨텐츠`, getContent)
      return { ...state, contentData: getContent }
    default:
      return state
  }
}

export default content
