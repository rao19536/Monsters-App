import React, {Suspense} from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Users from './Containers/users'
import { Provider } from 'react-redux'
import store from './redux/store'

function App() {

console.log('Rao')
  return(
    <Provider store={store}>
      <Users />
    </Provider>
  )
}

export default App;
