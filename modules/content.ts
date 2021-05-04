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
      if (res.status === 200) {
        dispatch(dispatchGetData(ContentAction.GET_CONTENT_DATA_SUCCESS, res))
      } else {
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
          'error load content : ' + e
        )
      )
    }
  }
}

export const getRelatedContentList = (tags: string) => {
  return async (dispatch: Function) => {
    try {
      // todo: tag 기반 연관 컨텐츠 요청. 최대 10개
      const res = await axios.get(
        `https://localhost:4000/content?tag=${tags}&maxnum=10`
      )
      // console.log(res)
      if (res.status === 200) {
        dispatch(
          dispatchGetData(ContentAction.GET_RELATED_CONTENT_LIST_SUCCESS, res)
        )
      } else {
        dispatch(
          dispatchGetData(
            ContentAction.GET_RELATED_CONTENT_LIST_ERROR,
            'failed load related contents'
          )
        )
      }
    } catch (e) {
      dispatchGetData(
        ContentAction.GET_RELATED_CONTENT_LIST_ERROR,
        'error load related contents : ' + e
      )
    }
  }
}

export const getRelatedPhotocardList = (tags: string) => {
  return async (dispatch: Function) => {
    try {
      // TODO: 연관 포토카드 요청
      const res = await axios.get(
        `https://localhost:4000/photocard?tag=${tags}&maxnum=10`
      )
      console.log(res)
      if (res.status === 200) {
        dispatch(
          dispatchGetData(ContentAction.GET_PHOTO_CARD_LIST_SUCCESS, res)
        )
      } else {
        dispatch(
          dispatchGetData(
            ContentAction.GET_PHOTO_CARD_LIST_ERROR,
            'failed load photocards'
          )
        )
      }
    } catch (e) {
      dispatchGetData(
        ContentAction.GET_PHOTO_CARD_LIST_ERROR,
        'error load photocards : ' + e
      )
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
      const { result: getContentData } = action.payload.data
      const getContent = { ...state.contentData, ...getContentData }
      return { ...state, contentData: getContent }

    case ContentAction.GET_RELATED_CONTENT_LIST_SUCCESS:
      const { data: getRelatedContents } = action.payload.data
      const getRelated = [...state.relatedContentList, ...getRelatedContents]
      return { ...state, relatedContentList: getRelated }

    case ContentAction.GET_PHOTO_CARD_LIST_SUCCESS:
      const { data: getPhotoCardList } = action.payload
      const getPhotoCards = [...state.photocardList, ...getPhotoCardList]
      return { ...state, photocardList: getPhotoCards }

    default:
      return state
  }
}

export default content
