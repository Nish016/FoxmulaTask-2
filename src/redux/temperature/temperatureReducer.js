import {
    FETCH_TEMPERATURE_FAILURE,
    FETCH_TEMPERATURE_REQUEST,
    FETCH_TEMPERATURE_SUCCESS
} from "./temperatureTypes";

const initialState = {
    loading: false,
    temp: '',
    error: ''
}

const tempratureReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_TEMPERATURE_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_TEMPERATURE_SUCCESS:
            return {
                loading: false,
                temp: action.payload,
                error: ''
            }
        case FETCH_TEMPERATURE_FAILURE:
            return {
                loading: false,
                temp: '',
                error: action.payload
            }
        default: return state
    }
}

export default tempratureReducer;