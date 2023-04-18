import { atom } from "recoil";

export const cartState = atom({
  key: "cartState", // unique ID (with respect to other atoms/selectors)
  default: [], // default value (aka initial value)
});

export const customerDetailState = atom({
  key: "customerDetailState",
  default: {
    name: "",
    email: "",
    phone: "",
    city: "",
    state: "",
    zip_code: "",
    address: "",
  },
});

export const detailErrorsState = atom({
  key: "detailErrorsState",
  default: {
    name: [],
    email: [],
    phone: [],
    city: [],
    state: [],
    zip_code: [],
    address: [],
    cleared: true,
  },
});
