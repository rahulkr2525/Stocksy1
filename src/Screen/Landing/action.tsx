import { ActionTypes } from './constant'
export const setLanding = (landing: any) => {
    return {
        type: ActionTypes.SET_LANDING,
        payload: landing
    }
}