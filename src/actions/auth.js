import { types } from "../types/types";

import { firebase, googleAuthProvider } from "../firebase/config";

/* Validadores */
export const emailCorrecto = (email) => {
  if (email.trim() === "" || !email.trim().includes("@")) {
    return false;
  }
  return true;
};

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

export const googleLogin = () => {
  return (dispatch) => {
    firebase
      .auth()
      .signInWithPopup(googleAuthProvider)
      .then(({ user }) => {
        dispatch(login(user.uid, user.displayName));
      });
  };
};

export const emailAndPasswordLogin = (email, password) => {
  return (dispatch) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((au) => {
        console.log(au);
        dispatch(login(au.user.uid, au.user.displayName));
      });
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
