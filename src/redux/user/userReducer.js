import * as actionType from './userActionTypes'
import { getFormationOptions } from '../../util/utilityFunctions'

const initialSate = {
    user:{},
    isAuth: false,
    loading: false,
    selectedFormations:[],
    error:''
    
}

export default function userReducer(state = initialSate, action){
    
    switch(action.type){

        case actionType.FETCH_USER_REQUEST:
            return {
                ...state,
                loading: true
            }

        case actionType.FETCH_USER_SUCCESS:
            return {
                user:action.payload,
                // selectedFormations:getFormationOptions(action.payload.roles),
                selectedFormations:[],
                isAuth: true,
                loading: false,
                error:''
              }

        case actionType.FETCH_USER_FAILURE:
            return { 
                user: {},
                selectedFormations:[],
                isAuth: false,
                loading: false,
                error:action.payload 
              }

        case actionType.UPDATE_SELECTED_FORMATIONS:
            return {
                ...state,
                selectedFormations:action.payload
            }

        case actionType.DENY_ACCESS:
            return {
                ...state,
                isAuth: false
            }
            
        default:
            return state
    }
} 