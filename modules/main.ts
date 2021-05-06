import axios, { AxiosResponse } from 'axios'
import { ContentAction } from './actionTypes'
import { IContent, IPhotoCard, ITag } from '@interfaces'

type mainContentsState = {
  bannerContentList: IContent[]
  recommendContentList: IContent[]
  trendTagList: ITag[]
  photocardList: IPhotoCard[]
  error: null | string | AxiosResponse<any>
}

// 초기상태를 선언합니다.
const initialState: mainContentsState = {
  error: null,
  bannerContentList: [],
  recommendContentList: [],
  trendTagList: [],
  photocardList: [],
}

const tagsToString = (tags: ITag[]): string => {
  const result: string = tags
    .reduce((acc, cur) => {
      return acc + cur['tag'] + ','
    }, '')
    .slice(0, -1)
  return result
}
const disfetchGetData = (action: string, data: any) => ({
  type: action,
  payload: data,
})

export const getBannderContentList = (tag: string) => {
  return async (dispatch: Function) => {
    try {
      const result = await axios.get(
        `${process.env.NEXT_PUBLIC_API_ENDPOINT}/content`,
        {
          params: {
            maxnum: 3,
            tag,
          },
          withCredentials: true,
        }
      )

      if (result.status === 200) {
        dispatch(disfetchGetData(ContentAction.GET_BANNER_SUCCESS, result))
      } else {
        dispatch(
          disfetchGetData(ContentAction.GET_BANNER_ERROR, 'fail load bannder')
        )
      }
    } catch (err) {
      dispatch(
        disfetchGetData(
          ContentAction.GET_BANNER_ERROR,
          'error load banner : ' + err
        )
      )
    }
  }
}
export const getRecommendContentList = (tag: string) => {
  return async (dispatch: Function) => {
    try {
      const result = await axios.get(
        `${process.env.NEXT_PUBLIC_API_ENDPOINT}/content`,
        {
          params: {
            maxnum: 6,
            tag,
          },
          withCredentials: true,
        }
      )

      if (result.status === 200) {
        dispatch(disfetchGetData(ContentAction.GET_RECOMMEND_SUCCESS, result))
      } else {
        dispatch(
          disfetchGetData(
            ContentAction.GET_RECOMMEND_ERROR,
            'fail load recommend contents'
          )
        )
      }
    } catch (err) {
      dispatch(
        disfetchGetData(
          ContentAction.GET_RECOMMEND_ERROR,
          'error load recommend contents : ' + err
        )
      )
    }
  }
}

export const getTrendTagList = () => {
  return async (dispatch: Function) => {
    try {
      const result = await axios.get<ITag[]>(
        `${process.env.NEXT_PUBLIC_API_ENDPOINT}/tag`,
        {
          params: {
            maxnum: 6,
          },
          withCredentials: true,
        }
      )

      if (result.status === 200) {
        const tag = tagsToString(result.data)
        dispatch(getRecommendContentList(tag))
        dispatch(getBannderContentList(tag))
        dispatch(disfetchGetData(ContentAction.GET_TAG_LIST_SUCCESS, result))
      } else {
        dispatch(
          disfetchGetData(ContentAction.GET_TAG_LIST_ERROR, 'fail load tag')
        )
      }
    } catch (err) {
      dispatch(
        disfetchGetData(
          ContentAction.GET_TAG_LIST_ERROR,
          'error load tag : ' + err
        )
      )
    }
  }
}

export const getPhotoCardList = () => {
  return async (dispatch: Function) => {
    try {
      const result = await axios.get(
        `${process.env.NEXT_PUBLIC_API_ENDPOINT}/photocard`,
        {
          params: {
            random: 1,
          },
          withCredentials: true,
        }
      )

      if (result.status === 200) {
        dispatch(
          disfetchGetData(ContentAction.GET_PHOTO_CARD_LIST_SUCCESS, result)
        )
      } else {
        dispatch(
          disfetchGetData(
            ContentAction.GET_PHOTO_CARD_LIST_ERROR,
            'fail load photocard'
          )
        )
      }
    } catch (err) {
      dispatch(
        disfetchGetData(
          ContentAction.GET_PHOTO_CARD_LIST_ERROR,
          'error load photocard : ' + err
        )
      )
    }
  }
}

type mainAction = ReturnType<typeof disfetchGetData>

function main(
  state: mainContentsState = initialState,
  action: mainAction
): mainContentsState {
  switch (action.type) {
    case ContentAction.GET_BANNER_SUCCESS:
      const {
        data: { data: getBannerList },
      } = action.payload
      return { ...state, bannerContentList: [...getBannerList] }

    case ContentAction.GET_BANNER_ERROR:
      return { ...state, error: action.payload }

    case ContentAction.GET_RECOMMEND_SUCCESS:
      const {
        data: { data: getRecommendContent },
      } = action.payload
      return { ...state, recommendContentList: [...getRecommendContent] }

    case ContentAction.GET_RECOMMEND_ERROR:
      return { ...state, error: action.payload }

    case ContentAction.GET_TAG_LIST_SUCCESS:
      const { data: getTagList } = action.payload
      return { ...state, trendTagList: [...getTagList] }

    case ContentAction.GET_TAG_LIST_ERROR:
      return { ...state, error: action.payload }

    case ContentAction.GET_PHOTO_CARD_LIST_SUCCESS:
      const {
        data: { data: getPhotoCardList },
      } = action.payload
      return { ...state, photocardList: [...getPhotoCardList] }

    case ContentAction.GET_PHOTO_CARD_LIST_ERROR:
      return { ...state, error: action.payload }
    default:
      return state
  }
}

export default main
