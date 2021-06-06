  
import { combineReducers } from 'redux'
import temperatureReducer from './temperature/temperatureReducer'

const rootReducer = combineReducers({
    temperature: temperatureReducer
})

export default rootReducer