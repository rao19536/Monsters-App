import endPoint from '../../../services/Api/users/users'
import actionTypes from '../../constants'

export const getUsers = () => {
    console.log('Action')
    return (dispatch) => {
        endPoint.get('users')
        .then((response)=>{
            dispatch({
                type: actionTypes.GET_USERS,
                users: response.data.users
            })
        })
        .catch((err)=>{
            console.log('err', err)
        })
    }
}