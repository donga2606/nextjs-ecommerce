import {defaultModel} from '../common/constants'

export default {
    username: defaultModel.stringUnique,
    password: defaultModel.stringRequired,
    age: defaultModel.number,
    cart: defaultModel.array,
    ordered: defaultModel.array,
}

