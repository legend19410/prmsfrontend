import {request} from '../../util/APICall'
import * as actionType from './firearmActionTypes'

export const fetchFirearms = (formationsStringLst='') => {
    
  return (dispatch) => {
    dispatch(fetchRequest())

    const header = {
        Formations: formationsStringLst
    }
    request('GET', 'api/firearms', header,{})
        .then(response =>{
            const firearms = response.data
            dispatch(fetchFirearmSuccess(firearms))    
        }).catch(error=>{
            dispatch(fetchFailure(error.message))
        })
  }
}

export const searchFirearms = (formationString, firearmQuery) => {

  return (dispatch)=>{
    dispatch(fetchRequest())

    const header = {
      Formations: formationString
    }
    request('GET', 'api/firearms/search?query='+firearmQuery.trim(), header, {})
      .then(response=>{
        const firearms = response.data
        dispatch(fetchFirearmSuccess(firearms))
      })
      .catch(error=>{
        dispatch(fetchFailure(error.message))
      })
  }
}



export const fetchRequest = () => {
  return {
    type: actionType.FETCH_REQUEST
  }
}

export const fetchFirearmSuccess = firearms => {
  return {
    type: actionType.FETCH_FIREARMS_SUCCESS,
    payload: firearms
  }
}


export const fetchFailure = error => {
  return {
    type: actionType.FETCH_FAILURE,
    payload: error
  }
}
