export default class PageReduxAction {
    static setInternet(payload) {
      return {
        type: 'SET_INTERNET',
        payload,
      }
    }
  }
  
import createReducer from '../lib/reducerConfig'

export const internetRedux = createReducer(false, {
  ['SET_INTERNET'](state, action) {
    return action.payload
  },
})
