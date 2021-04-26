import { createStore, applyMiddleware, compose } from 'redux'
import Thunk from 'redux-thunk'
import rootReducer from './reducer'

const store = createStore(rootReducer, compose(applyMiddleware(Thunk)))

// 루트 리듀서를 내보내주세요.
export default store
