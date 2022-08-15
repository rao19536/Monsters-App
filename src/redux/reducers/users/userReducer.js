import actionTypes from "../../constants"
const initialState = { 
    users: []
}

const userReducer = (state = initialState, action) => {
    console.log('actionReducer', state, action)
    
    switch(action.type){
        
        case actionTypes.GET_USERS:
            return Object.assign({}, state, {
                isLoading: false,
                isDataAvailable: state.users.length > 0,
                users: action.users,
            })
            // return {...state, users: action.users}
        default:
            return state
    }
}
export default userReducer
