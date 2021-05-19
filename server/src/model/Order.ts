import {defaultModel} from '../common/constants'

export default {
    userID: defaultModel.stringUnique,
    isFinish: defaultModel.boolean,
    cart: defaultModel.array,
}
