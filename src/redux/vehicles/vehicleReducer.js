import * as actionType from './vehicleActionTypes'

const initialSate = {
    vehicles:[],
    loading: false,
    error:''
}

export default function vehicleReducer (state = initialSate, action){
    switch(action.type){
        case actionType.FETCH_REQUEST:
            return {
                ...state,
                loading: false
            } 
        case actionType.FETCH_VEHICLES_SUCCESS:
            return {
                ...state,
                vehicles: action.payload,
                loading: false,
                error: ''
            }
        case actionType.FETCH_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
       
        default:
            return state
    }
}

