import {request} from '../../util/APICall'
import * as actionType from './officerActionTypes'

export const fetchOfficers = (formationsStringLst='') => {
    
  return (dispatch) => {
    dispatch(fetchRequest())

    const header = {
        Formations: formationsStringLst
    }
    request('GET', 'api/officers', header,{})
        .then(response =>{
            const officers = response.data
            dispatch(fetchOfficersSuccess(officers))    
        }).catch(error=>{
            dispatch(fetchFailure(error.message))
        })
  }
}

export const fetchSchedule = (formationsStringLst='', generateWeekSchedule)=>{
  return (dispatch) => {
    dispatch(fetchRequest())

    const header = {
        Formations: formationsStringLst
    }
    request('GET', 'api/officers', header,{})
        .then(response =>{
            const officers = response.data
            dispatch(fetchOfficersSuccess(officers))
            return  request('POST', 'api/weekShedule', {},{schedule:generateWeekSchedule(officers)}) 
        })
        .then(response=>{
            const weekSchedule = response.data.schedule
            dispatch(fetchScheduleSuccess(weekSchedule))
        })
        .catch(error=>{
            dispatch(fetchFailure(error.message))
        })
    }
}

export const fetchLeave = (formationsStringLst='')=>{
  return (dispatch) => {
    dispatch(fetchRequest())

    const header = {
        Formations: formationsStringLst
    }
    request('GET', 'api/leave', header,{})
        .then(response =>{
            const leave = response.data
            dispatch(fetchLeaveSuccess(leave)) 
        })
        .catch(error=>{
            dispatch(fetchFailure(error.message))
        })
    }
}

export const searchOfficers = (formationString, officerQuery) => {

  return (dispatch)=>{
    dispatch(fetchRequest())

    const header = {
      Formations: formationString
    }
    request('GET', 'api/officer/search?query='+officerQuery.trim(), header, {})
      .then(response=>{
        const officers = response.data
        dispatch(fetchOfficersSuccess(officers))
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

export const fetchOfficersSuccess = officers => {
  return {
    type: actionType.FETCH_OFFICERS_SUCCESS,
    payload: officers
  }
}

export const fetchLeaveSuccess = leaves => {
  return {
    type: actionType.FETCH_LEAVE_SUCCESS,
    payload: leaves
  }
}

export const fetchScheduleSuccess = schedule => {
  return {
    type: actionType.FETCH_SCHEDULE_SUCCESS,
    payload: schedule
  }
}

export const fetchFailure = error => {
  return {
    type: actionType.FETCH_FAILURE,
    payload: error
  }
}

export const updateTask = (event)=>{
  // console.log(event)
  return{
    type: actionType.UPDATE_TASK,
    payload: event
  }
}