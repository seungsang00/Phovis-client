import axios, { AxiosResponse } from 'axios'
import * as actionTypes from './actionTypes'

const {
  AuthAction,
  USER_SIGNIN_SUCCESS,
  USER_SIGNIN_ERROR,
  UserAction,
} = actionTypes
const LOCAL_KEY_ACCESS_TOKEN = 'LOCAL_ACCESS_TOKEN'

type User = {
  id: number
  userName: string
  email: string
  type: string
  profileImg: string
}
interface Signin {
  email: string
  password: string
}

interface Login {
  email: string
  password: string
}

type userState = {
  isLogin: boolean
  accessToken?: string
  error: null | string | AxiosResponse<any>
  user?: User | null
  test?: any
}

// 초기상태를 선언합니다.
const initialState: userState = {
  isLogin: false,
  error: null,
  user: null,
}

// disfetch function
const successSignin = (data: AxiosResponse) => ({
  type: USER_SIGNIN_SUCCESS,
  payload: data,
})

const errorSignin = (data: AxiosResponse | string) => ({
  type: USER_SIGNIN_ERROR,
  payload: data,
})

const successLogin = (data: AxiosResponse) => ({
  type: AuthAction.LOGIN_SUCCESS,
  payload: data,
})

const errorLogin = (data: AxiosResponse | string) => ({
  type: AuthAction.LOGIN_ERROR,
  payload: data,
})

const successGetUserInfo = (data: AxiosResponse) => ({
  type: AuthAction.GET_INFO_SUCCESS,
  payload: data,
})

const errorGetUserInfo = (data: AxiosResponse | string) => ({
  type: AuthAction.GET_INFO_ERROR,
  payload: data,
})

const successLoginWithGoogle = (data: AxiosResponse) => ({
  type: AuthAction.LOGIN_GOOGLE_SUCCESS,
  payload: data,
})

const errorLoginWithGoogle = (data: AxiosResponse | string) => ({
  type: AuthAction.LOGIN_GOOGLE_ERROR,
  payload: data,
})

const successLoginWithKakao = (data: AxiosResponse) => ({
  type: AuthAction.LOGIN_KAKAO_SUCCESS,
  payload: data,
})

const errorLoginWithKakao = (data: AxiosResponse | string) => ({
  type: AuthAction.LOGIN_KAKAO_ERROR,
  payload: data,
})

const successUpdateUserAvatar = (data: AxiosResponse | string) => ({
  type: UserAction.UPDATE_USER_AVATAR_SUCCESS,
  payload: data,
})

const errorUpdateUserAvatar = (data: AxiosResponse | string) => ({
  type: UserAction.UPDATE_USER_AVATAR_ERROR,
  payload: data,
})

// TODO : make disfetch factory pattern

export const signin = ({ email, password }: Signin) => {
  return async (dispatch: Function) => {
    try {
      const data = await axios.post(
        'https://localhost:4000/user',
        { email, password }
        // { withCredentials: true }
      )
      return dispatch(successSignin(data))
    } catch (e) {
      dispatch(errorSignin('error'))
      throw e
    }
  }
}

export const login = ({ email, password }: Login) => {
  return async (dispatch: Function) => {
    try {
      const result = await axios.post(
        'https://localhost:4000/auth/login',
        { email, password }
        // { withCredentials: true }
      )
      if (result.status === 201) {
        dispatch(successLogin(result))
      } else {
        dispatch(errorLogin('Login fail'))
      }
    } catch (err) {
      dispatch(errorLogin('Login fail'))
      console.log(err)
      // throw err
    }
  }
}

export const getUserInfo = (stateAccessToken?: String) => {
  return async (dispatch: Function) => {
    try {
      // 만약 입력받은 토큰이 없다면 localStorage 에서 토큰이 있는지 확인한다.
      let accessToken =
        stateAccessToken || localStorage.getItem(LOCAL_KEY_ACCESS_TOKEN)
      if (!accessToken) {
        return dispatch(errorGetUserInfo('fail get user info'))
      }

      const result = await axios.get(`https://localhost:4000/user/info`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        // withCredentials: true,
      })

      if (result.status === 200) {
        if (!stateAccessToken) {
          result.data.accessToken = accessToken
        }
        dispatch(successGetUserInfo(result))
      } else {
        dispatch(errorGetUserInfo('fail get user info'))
      }
    } catch (err) {
      dispatch(errorGetUserInfo('fail get user info'))
      // throw err
    }
  }
}

export const loginWithGoogle = (token: string) => {
  return async (dispatch: Function) => {
    try {
      const result = await axios.post(
        `https://localhost:4000/auth/google`,
        { token },
        { withCredentials: true }
      )

      if (result.status === 201) {
        dispatch(successLoginWithGoogle(result))
      } else {
        dispatch(errorLoginWithGoogle(result))
      }
    } catch (err) {
      dispatch(errorLoginWithGoogle('Login fail'))
    }
  }
}

export const loginWithKakao = (code: string) => {
  return async (dispatch: Function) => {
    try {
      // console.log('kakao Code : ',code)
      const result = await axios.post(`https://localhost:4000/auth/kakao`, {
        kakaoCode: code,
      })

      if (result.status === 201) {
        dispatch(successLoginWithKakao(result))
      } else {
        dispatch(errorLoginWithKakao(result))
      }
    } catch (err) {
      dispatch(errorLoginWithKakao('Login fail'))
    }
  }
}

export const resetErrorMessage = () => {
  return {
    type: AuthAction.RESET_ERROR_MESSAGE,
    payload: null,
  }
}

export const updateUserAvatar = (accessToken: string, url: string) => {
  return async (dispatch: Function) => {
    try {
      const res = await axios.put(`https://localhost:4000/user/info`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        image: url,
      })
      if (res.status === 200) {
        dispatch(successUpdateUserAvatar(res))
      } else {
        dispatch(errorUpdateUserAvatar('failed update user profile image'))
      }
    } catch (e) {
      dispatch(errorUpdateUserAvatar('error update user profile image : ' + e))
    }
  }
}

// 모든 액션 겍체들에 대한 타입을 준비해줍니다.
// ReturnType<typeof _____> 는 특정 함수의 반환값을 추론해줍니다
// 상단부에서 액션타입을 선언 할 떄 as const 를 하지 않으면 이 부분이 제대로 작동하지 않습니다.
type userAction =
  | ReturnType<typeof successSignin>
  | ReturnType<typeof errorSignin>
  | ReturnType<typeof successLogin>
  | ReturnType<typeof errorLogin>
  | ReturnType<typeof successLoginWithGoogle>
  | ReturnType<typeof errorLoginWithGoogle>
  | ReturnType<typeof successLoginWithKakao>
  | ReturnType<typeof errorLoginWithKakao>
  | ReturnType<typeof successUpdateUserAvatar>
  | ReturnType<typeof errorUpdateUserAvatar>

// 이 리덕스 모듈에서 관리 할 상태의 타입을 선언합니다

function user(state: userState = initialState, action: userAction): userState {
  switch (action.type) {
    case USER_SIGNIN_SUCCESS:
      return { ...state, test: action.payload }

    case USER_SIGNIN_ERROR:
      return { ...state, test: action.payload }

    case AuthAction.LOGIN_SUCCESS:
    case AuthAction.LOGIN_GOOGLE_SUCCESS:
    case AuthAction.LOGIN_KAKAO_SUCCESS:
      const {
        data: { accessToken },
      } = action.payload as AxiosResponse
      // set Access Token & Refresh Token
      // console.log('accessToken : ', accessToken);
      localStorage.setItem(LOCAL_KEY_ACCESS_TOKEN, accessToken)
      return { ...state, error: null, isLogin: true, accessToken }

    case AuthAction.LOGIN_GOOGLE_ERROR:
    case AuthAction.LOGIN_KAKAO_ERROR:
    case AuthAction.LOGIN_ERROR:
      return { ...state, error: action.payload }

    case AuthAction.GET_INFO_SUCCESS:
      const { data } = action.payload as AxiosResponse
      const userData = { ...data }
      // console.log('user data : ',data);
      delete userData.message
      return { ...state, user: userData, isLogin: true }

    case AuthAction.GET_INFO_ERROR:
      return { ...state, user: null, isLogin: false }

    case AuthAction.RESET_ERROR_MESSAGE:
      return { ...state, error: null }

    case UserAction.UPDATE_USER_AVATAR_SUCCESS:
      const getUpdateResponse = action.payload as AxiosResponse
      console.log(`응답>>`, getUpdateResponse)
      const profileImgUrl = { ...state, ...getUpdateResponse.data }
      return { ...state }
    default:
      return state
  }
}

export default user
