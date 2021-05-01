import { combineReducers } from 'redux'
import user from './users'
import content from './content'

const rootReducer = combineReducers({ user, content })

// 루트 리듀서를 내보내주세요.
export default rootReducer

export type RootReducer = ReturnType<typeof rootReducer>
