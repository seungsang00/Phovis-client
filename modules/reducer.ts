import { combineReducers } from 'redux'
import user from './users'
import main from './main'
import content from './content'

<<<<<<< HEAD
const rootReducer = combineReducers({ user, main })
=======
const rootReducer = combineReducers({ user, main, content })
>>>>>>> dev

// 루트 리듀서를 내보내주세요.
export default rootReducer

export type RootReducer = ReturnType<typeof rootReducer>
