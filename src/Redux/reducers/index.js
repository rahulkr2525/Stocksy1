import { combineReducers } from 'redux';
import { landingReducer } from '../../Screen/Landing/reducer';

const reducers = combineReducers({
    allReducer: landingReducer
})

export default reducers;