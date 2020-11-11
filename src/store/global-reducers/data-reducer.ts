import { Dispatch } from 'redux';
import { Data } from '../../types'
// ------------------------------------
// Constants
// ------------------------------------
export const MERGE_MESSAGE = 'MERGE_MESSAGE'
export const DELETE_CODE_FROM_LIST = 'DELETE_CODE_FROM_LIST'

// ------------------------------------
// Actions
// ------------------------------------

export const deleteCode = (code: string) => (dispatch: Dispatch<any>, getState: Data) => {
    // @ts-ignore
    console.log('new getState', getState())
    // @ts-ignore
    const data = getState().data
    const {[code]: _, ...newData } = data;
    console.log('new store', newData)
    return new Promise(() => {
        dispatch({
            type: DELETE_CODE_FROM_LIST,
            payload: newData
        })
    })
}

export const mergeMessage = (message: {"isin":string, "price":number, "bid":number, "ask":number}) =>
    (dispatch: Dispatch<any>, getState: Data) => {
    // @ts-ignore
    const data = getState().data
    data[message.isin] = message
    return new Promise(() => {
        dispatch({
            type: MERGE_MESSAGE,
            payload: data
        })
    })
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
    [DELETE_CODE_FROM_LIST]: (state: Data, action: any) => ({...action.payload}),
    [MERGE_MESSAGE]: (state: Data, action: any) => ({...state, ...action.payload})
}

// ------------------------------------
// Initial State
// ------------------------------------
const initialState = {}

export default function listReducer (state = initialState, action: any) {
  if (action.error) return state
  // @ts-ignore
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
