enum AuthAction {
  LOGIN_SUCCESS = 'USER/LOGIN/SUCCESS',
  LOGIN_ERROR = 'USER/LOGIN/ERROR',
  GET_INFO_SUCCESS = 'USER/INFO/SUCCESS',
  GET_INFO_ERROR = 'USER/INFO/ERROR',
  LOGIN_GOOGLE_SUCCESS = 'USER/GOOGLE/LOGIN/SUCCESS',
  LOGIN_GOOGLE_ERROR = 'USER/GOOGLE/LOGIN/ERROR',
  LOGIN_KAKAO_SUCCESS = 'USER/KAKAO/LOGIN/SUCCESS',
  LOGIN_KAKAO_ERROR = 'USER/KAKAO/LOGIN/ERROR',
}

export { AuthAction }
export const USER_SIGNIN_SUCCESS = 'USER/SIGNIN/SUCCESS' as const
export const USER_SIGNIN_ERROR = 'USER/SIGNIN/ERROR' as const

enum ContentAction {
  CONTENT_UPLOAD_SUCCESS = 'CONTENT/UPLOAD/SUCCESS',
  CONTENT_UPLOAD_ERROR = 'CONTENT/UPLOAD/ERROR',
}
export { ContentAction }
