import {request} from '../../util/APICall'
import * as actionType from './vehicleActionTypes'

export const fetchVehicles = (formationsStringLst='') => {
    
  return (dispatch) => {
    dispatch(fetchRequest())

    const header = {
        Formations: formationsStringLst
    }
    request('GET', 'api/vehicles', header,{})
        .then(response =>{
            const vehicles = response.data
            dispatch(fetchVehiclesSuccess(vehicles))    
        }).catch(error=>{
            dispatch(fetchFailure(error.message))
        })
  }
}

export const searchVehicles = (formationString, vehicleQuery) => {

  return (dispatch)=>{
    dispatch(fetchRequest())

    const header = {
      Formations: formationString
    }
    request('GET', 'api/vehicle/search?query='+vehicleQuery.trim(), header, {})
      .then(response=>{
        const vehicles = response.data
        dispatch(fetchVehiclesSuccess(vehicles))
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

export const fetchVehiclesSuccess = vehicles => {
  return {
    type: actionType.FETCH_VEHICLES_SUCCESS,
    payload: vehicles
  }
}


export const fetchFailure = error => {
  return {
    type: actionType.FETCH_FAILURE,
    payload: error
  }
}
