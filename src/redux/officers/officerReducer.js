import * as actionType from './officerActionTypes'

const initialSate = {
    officers:[],
    schedule:[],
    leaves:[],
    loading: false,
    error:''
}

export default function officerReducer (state = initialSate, action){
    switch(action.type){
        case actionType.FETCH_REQUEST:
            return {
                ...state,
                loading: false
            } 
        case actionType.FETCH_OFFICERS_SUCCESS:
            return {
                ...state,
                officers: action.payload,
                loading: false,
                error: ''
            }
        case actionType.FETCH_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case actionType.FETCH_SCHEDULE_SUCCESS:
            return {
                ...state,
                schedule: action.payload,
                loading: false,
                error: ''
            }
        case actionType.UPDATE_TASK:
            return {
                ...state,
                schedule:updateSchedule(state.schedule, action.payload)
            }
        case actionType.FETCH_LEAVE_SUCCESS:
            return {
                ...state,
                leaves: action.payload,
                loading: false,
                error: ''
            }
        default:
            return state
    }
}

const updateSchedule = (prevData, e) =>{
   
    let offSchedule = prevData.find(o => o.regNo == e.target.parentElement.parentElement.id)
    let day = offSchedule.weekDays[parseInt(e.target.className)]
    day.duty = e.target.value
    offSchedule.weekDays[parseInt(e.target.className)] = day
    let ine = prevData.findIndex(item => item.regNo == e.target.parentElement.parentElement.id)      
    prevData[ine] = {regNo:parseInt(e.target.parentElement.parentElement.id), rank:offSchedule.rank, firstName:offSchedule.firstName, lastName:offSchedule.lastName, weekDays:offSchedule.weekDays}
    return prevData
}