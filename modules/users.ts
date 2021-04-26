import axios, { AxiosResponse } from 'axios'
import * as actionTypes from './actionTypes'

const { USER_SIGNIN_SUCCESS, USER_SIGNIN_ERROR } = actionTypes

type User = {
  id: number
  userName: string
  email: string
  profile: string
}
interface Signin {
  email: string
  password: string
}

type userState = {
  isLogin: boolean
  user?: User | null
  test?: any
}

// 초기상태를 선언합니다.
const initialState: userState = {
  isLogin: false,
  user: null,
}
const successSignin = (data: AxiosResponse) => ({
  type: USER_SIGNIN_SUCCESS,
  payload: data,
})
const errorSignin = (data: AxiosResponse | string) => ({
  type: USER_SIGNIN_ERROR,
  payload: data,
})

export const signin = ({ email, password }: Signin) => {
  return async (dispatch: Function) => {
    try {
      const data = await axios.post(
        'https://localhost:4000/user',
        { email, password },
        { withCredentials: true }
      )
      return dispatch(successSignin(data))
    } catch (e) {
      dispatch(errorSignin('error'))
      throw e
    }
  }
}

// 모든 액션 겍체들에 대한 타입을 준비해줍니다.
// ReturnType<typeof _____> 는 특정 함수의 반환값을 추론해줍니다
// 상단부에서 액션타입을 선언 할 떄 as const 를 하지 않으면 이 부분이 제대로 작동하지 않습니다.
type userAction =
  | ReturnType<typeof successSignin>
  | ReturnType<typeof errorSignin>

// 이 리덕스 모듈에서 관리 할 상태의 타입을 선언합니다

function user(state: userState = initialState, action: userAction): userState {
  switch (action.type) {
    case USER_SIGNIN_SUCCESS:
      return { ...state, test: action.payload }
    case USER_SIGNIN_ERROR:
      return { ...state, test: action.payload }
    default:
      return state
  }
}

export default user
