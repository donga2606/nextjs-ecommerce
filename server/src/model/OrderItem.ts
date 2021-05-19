import {defaultModel} from '../common/constants'

export default {
    productID: defaultModel.stringUnique,
    userID: defaultModel.stringUnique,
    orderID: defaultModel.stringUnique,
    quantity: defaultModel.number,
}