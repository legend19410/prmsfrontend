import { combineReducers, createStore, applyMiddleware } from 'redux'
// import { composeWithDevTools } from 'redux-devtools-extension'
import officerReducer from './officers/officerReducer'
import userReducer from './user/userReducer'
import vehicleReducer from './vehicles/vehicleReducer'
import radioReducer from './radios/radioReducer'
import firearmReducer from './firearms/firearmReducer'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
    officers: officerReducer,
    vehicles: vehicleReducer,
    radios: radioReducer,
    firearms: firearmReducer,
    user: userReducer
})

const store = createStore(rootReducer, applyMiddleware(logger, thunk))

// const store = createStore(
//   rootReducer,
//   composeWithDevTools(applyMiddleware(logger, thunk))
// )

export default store