import { ActionTypes } from './constant'
const initialState = {
    landing: [{
        name: "Avinash"
    }]
}
export const landingReducer = ( state = initialState,  {type, payload}) => {
    switch(type) {
        case ActionTypes.SET_LANDING:
           return state
        default:
            return state 
    }
}