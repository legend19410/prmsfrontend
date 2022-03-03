import {request} from '../../util/APICall'
import * as actionType from './radioActionTypes'

export const fetchRadios = (formationsStringLst='') => {
    
  return (dispatch) => {
    dispatch(fetchRequest())

    const header = {
        Formations: formationsStringLst
    }
    request('GET', 'api/radios', header,{})
        .then(response =>{
            const radios = response.data
            dispatch(fetchRadiosSuccess(radios))    
        }).catch(error=>{
            dispatch(fetchFailure(error.message))
        })
  }
}

export const searchRadios = (formationString, radioQuery) => {

  return (dispatch)=>{
    dispatch(fetchRequest())

    const header = {
      Formations: formationString
    }
    request('GET', 'api/radios/search?query='+radioQuery.trim(), header, {})
      .then(response=>{
        const radios = response.data
        dispatch(fetchRadiosSuccess(radios))
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

export const fetchRadiosSuccess = radios => {
  return {
    type: actionType.FETCH_RADIOS_SUCCESS,
    payload: radios
  }
}


export const fetchFailure = error => {
  return {
    type: actionType.FETCH_FAILURE,
    payload: error
  }
}
