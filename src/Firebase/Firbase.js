import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDPtnkCDvPbMX4z_cHCntki53ejaKbl9p4",
  authDomain: "ecommerce-application-ff541.firebaseapp.com",
  projectId: "ecommerce-application-ff541",
  storageBucket: "ecommerce-application-ff541.appspot.com",
  messagingSenderId: "794244300419",
  appId: "1:794244300419:web:b973d5e793c50f428765b6",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export var auth = firebase.auth();
export var firestore = firebase.firestore();

export default firebase;
