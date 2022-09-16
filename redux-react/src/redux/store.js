import { createStore } from 'redux'
import cakeReducer from './cake/cajeReducer'

const store = createStore(cakeReducer)

export default store