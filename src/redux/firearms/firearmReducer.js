import * as actionType from './firearmActionTypes'

const initialSate = {
    firearms:[],
    loading: false,
    error:''
}

export default function firearmReducer (state = initialSate, action){
    switch(action.type){
        case actionType.FETCH_REQUEST:
            return {
                ...state,
                loading: false
            } 
        case actionType.FETCH_FIREARMS_SUCCESS:
            return {
                ...state,
                firearms: action.payload,
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

