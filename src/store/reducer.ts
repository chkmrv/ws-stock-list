import {combineReducers} from 'redux'

import dataReducer from './global-reducers/data-reducer'

export const makeRootReducer = () => combineReducers({
    data: dataReducer
})

export default makeRootReducer
