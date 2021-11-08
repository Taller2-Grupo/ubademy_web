import { types } from "../types/types";

import { firebase } from "../firebase/config";

/* Login */
export const login = (uid, displayName) => {
  return {
    type: types.login,
    payload: {
      uid,
      displayName,
    },
  };
};

export const logError = (text) => {
  return {
    type: types.error,
    payload: {
      text,
    },
  };
};

export const emailAndPasswordLogin = (email, password) => {
  return (dispatch) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(({ user }) => {
        dispatch(login(user.uid, user.displayName));
      })
      .catch((error) => dispatch(logError("Error al intentar loguearse")));
  };
};

/* Logout */
export const logout = () => {
  return async (dispatch) => {
    await firebase.auth().signOut();

    dispatch({
      type: types.logout,
    });
  };
};
