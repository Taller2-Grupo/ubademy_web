import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAN9QKyNRt236PAj2r4Axn-Kvc0iZFdIUM",
  authDomain: "ubademy-grupo7.firebaseapp.com",
  projectId: "ubademy-grupo7",
  storageBucket: "ubademy-grupo7.appspot.com",
  messagingSenderId: "883311202299",
  appId: "1:883311202299:web:fc69165992cb40a92d855e",
  measurementId: "G-PXJFDY6YP6",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, db, googleAuthProvider };
