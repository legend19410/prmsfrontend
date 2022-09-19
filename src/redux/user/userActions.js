
import {request} from '../../util/APICall'
import * as actionType from './userActionTypes'

export const fetchUser = () => {
    
  return (dispatch) => {
    dispatch(fetchUserRequest())

    request('GET', 'api/lvl1/user', {},{})
        .then(response =>{
            const user = response.data
            dispatch(fetchUserSuccess(user))
            console.log(user)
        }).catch(error=>{
            console.log(error)
            dispatch(fetchUserFailure(error.message))
        })
  }
}

export const fetchUserRequest = () => {
  return {
    type: actionType.FETCH_USER_REQUEST
  }
}

export const fetchUserSuccess = user => {
  return {
    type: actionType.FETCH_USER_SUCCESS,
    payload: user
  }
}

export const fetchUserFailure = error => {
  return {
    type: actionType.FETCH_USER_FAILURE,
    payload: error
  }
} 

export const updateSelectedFormations = selectedOptions => {
    return {
        type: actionType.UPDATE_SELECTED_FORMATIONS,
        payload: selectedOptions
    }
}

export const denyAccess = ()=>{
  return {
    type: actionType.DENY_ACCESS
  }
}