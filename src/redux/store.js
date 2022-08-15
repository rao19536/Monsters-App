import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './reducers/rootReducers';
import thunk from 'redux-thunk'
console.log('userStore')
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(rootReducer,
  composeEnhancers(applyMiddleware(thunk))
)

export default store
