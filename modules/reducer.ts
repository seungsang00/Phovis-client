import { combineReducers } from 'redux'
import user from './users'
import content from './content'
import main from './main'

const rootReducer = combineReducers({ user, content, main })

// 루트 리듀서를 내보내주세요.
export default rootReducer

export type RootReducer = ReturnType<typeof rootReducer>
