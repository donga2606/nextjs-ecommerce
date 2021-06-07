import { defaultModel } from "../common/constants";

export default {
  username: defaultModel.string,
  email: defaultModel.stringUnique,
  password: defaultModel.stringRequired,
  avatar: defaultModel.avatar,
  cart: defaultModel.array,
  ordered: defaultModel.array,
  roll: defaultModel.role,
};
