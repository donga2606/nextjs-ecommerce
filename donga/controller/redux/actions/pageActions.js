import {KEY_PAGE} from '../lib/constants'

export default class PageReduxAction {
    static setInternet(payload){
        return {
            type: 'SET_INTERNET',
        }
    }
}