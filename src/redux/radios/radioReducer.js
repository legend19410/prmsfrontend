import * as actionType from './radioActionTypes'

const initialSate = {
    radios:[],
    loading: false,
    error:''
}

export default function radioReducer (state = initialSate, action){
    switch(action.type){
        case actionType.FETCH_REQUEST:
            return {
                ...state,
                loading: false
            } 
        case actionType.FETCH_RADIOS_SUCCESS:
            return {
                ...state,
                radios: action.payload,
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

