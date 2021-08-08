import firebase from "firebase";

import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAPVPM567YYlm5yBZJ-mjzS6pBo0zmGZOg",
  authDomain: "game-shop-49752.firebaseapp.com",
  projectId: "game-shop-49752",
  storageBucket: "game-shop-49752.appspot.com",
  messagingSenderId: "852107104840",
  appId: "1:852107104840:web:1f95e8ba3071ec5d0dbe7d",
  measurementId: "G-WESFQT5KRD"
};

const app = firebase.apps.length
  ? firebase.app()
  : firebase.initializeApp(firebaseConfig);

export const auth = app.auth();
export const firestore = app.firestore();
