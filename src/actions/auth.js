import { types } from "../types/types";

export const googleLogin = (id, userName) => {
  return {
    type: types.login,
    payload: {
      id,
      userName,
    },
  };
};
