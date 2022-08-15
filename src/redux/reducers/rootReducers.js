import { combineReducers } from "redux";
import userReducer from "./users/userReducer";
console.log('userReducer')
const rootReducer = combineReducers({
    users: userReducer
})

export default rootReducer