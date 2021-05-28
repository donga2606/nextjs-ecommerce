import {defaultModel} from '../common/constants'

export default {
    username: defaultModel.stringUnique,
    password: defaultModel.stringRequired,
    cart: defaultModel.array,
    ordered: defaultModel.array,
}

