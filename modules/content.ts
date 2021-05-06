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
    like: 0,
    images: [],
    title: null,
    isLike: false,
    isBookmark : false,
  },
  relatedContentList: [],
  photocardList: [],
}

// ! make dispatch factory pattern
const dispatchGetData = (action: string, data: any) => ({
  type: action,
  payload: data,
})

interface IgetContentData{
  contentId:string
  accessToken?:string
}

interface IputLikeRequest{
  contentId:string
  accessToken?:string
}

interface IputBookmarkRequest{
  contentId:string
  accessToken?:string
}

export const getContentData = ({contentId, accessToken}:IgetContentData) => {
  return async (dispatch: Function) => {
    try {

      const sendData = {
        params:{
          id:contentId
        },
        headers: accessToken ? {Authorization: `Bearer ${accessToken}`} : {}
      }

      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_API_ENDPOINT}/content`,sendData
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
        `${process.env.NEXT_PUBLIC_API_ENDPOINT}/content?tag=${tags}&maxnum=10`
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

export const getRelatedPhotocardList = (contentId: string) => {
  return async (dispatch: Function) => {
    try {
      // TODO: 연관 포토카드 요청
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_API_ENDPOINT}/photocard?contentId=${contentId}&maxnum=10`
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

export const addRelatedPhotocardList = (data: IPhotoCard) => ({
  type: ContentAction.ADD_PHOTO_CARD_LIST_SUCCESS,
  payload: data,
})

export const putLikeRequest = ({contentId, accessToken}:IputLikeRequest) =>{
  return async (dispatch: Function) => {

    if(!accessToken){
      dispatch(
        dispatchGetData(ContentAction.PUT_LIKE_ERROR, 'Error Like update')
      )
      return
    }

    try{
      const result = await axios.put(
        `${process.env.NEXT_PUBLIC_API_ENDPOINT}/user/like`,
        {
          id:contentId,
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
          withCredentials: true,
        }
      )
  
      if (result.status === 201) {
        dispatch(
          dispatchGetData(ContentAction.PUT_LIKE_SUCEESS, result)
        )
      }
      else{
        dispatch(
          dispatchGetData(ContentAction.PUT_LIKE_ERROR, 'Error Like update')
        )
      }
    }
    catch(err){
      dispatch(
        dispatchGetData(ContentAction.PUT_LIKE_ERROR, 'Error Like update')
      )
    }
  }
}

export const putBookmarkRequest = ({contentId, accessToken}:IputBookmarkRequest) =>{
  return async (dispatch: Function) => {

    if(!accessToken){
      dispatch(
        dispatchGetData(ContentAction.PUT_BOOKMARK_ERROR, 'Error Bookmark update')
      )
      return
    }

    try{
      const result = await axios.put(
        `${process.env.NEXT_PUBLIC_API_ENDPOINT}/user/bookmark`,
        {
          id:contentId,
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
          withCredentials: true,
        }
      )
  
      if (result.status === 201) {
        dispatch(
          dispatchGetData(ContentAction.PUT_BOOKMARK_SUCCESS, result)
        )
      }
      else{
        dispatch(
          dispatchGetData(ContentAction.PUT_BOOKMARK_ERROR, 'Error Bookmark update')
        )
      }
    }
    catch(err){
      dispatch(
        dispatchGetData(ContentAction.PUT_BOOKMARK_ERROR, 'Error Bookmark update')
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
      return { ...state, contentData: { ...getContentData } }

    case ContentAction.GET_RELATED_CONTENT_LIST_SUCCESS:
      const { data: getRelatedContents } = action.payload.data
      return { ...state, relatedContentList: [...getRelatedContents] }

    case ContentAction.GET_PHOTO_CARD_LIST_SUCCESS:
      const { data: getPhotoCardList } = action.payload.data
      return { ...state, photocardList: [...getPhotoCardList] }
    case ContentAction.ADD_PHOTO_CARD_LIST_SUCCESS:
      return {
        ...state,
        photocardList: [action.payload, ...state.photocardList],
      }
    
    case ContentAction.PUT_LIKE_SUCEESS: 
      let { like, isLike } = state.contentData
      const { data:{isLike:setLike} } = action.payload;
      if(setLike){
        like+= 1
        isLike = true
      }
      else{
        like-= 1
        isLike = false
      }
    return { ...state, contentData:{...state.contentData, like, isLike}}

    case ContentAction.PUT_BOOKMARK_SUCCESS:
      const { data:{isBookmark} } = action.payload;
      return {...state, contentData:{...state.contentData, isBookmark}}

    default:
      return state
  }
}

export default content
