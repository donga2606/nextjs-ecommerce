export const defaultModel = {
  date: { type: Date },
  string: { type: String, default: "" },
  avatar: {
    type: String,
    default:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.123rf.com%2Fstock-photo%2Fblank_profile_picture.html%3ForiSearch%3Dblank_profile%26sti%3D&psig=AOvVaw2Q8rnrJX_iIUNcREqrFwq3&ust=1623141792882000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCPiBq8CQhfECFQAAAAAdAAAAABAI"
  },
  role: {
    type: String,
    default: "user",
  },
  stringRequired: { type: String, required: true },
  stringUnique: { type: String, required: true, unique: true },
  array: { type: Array, default: [] },
  number: { type: Number, default: 0 },
  boolean: { type: Boolean, default: true },
  booleanFalse: { type: Boolean, default: false },
  object: { type: Object, default: {} },
};
