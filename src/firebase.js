import { initializeApp } from "firebase/app";
import {getAuth, signInWithEmailAndPassword} from "firebase/auth"

export const app = initializeApp({
    apiKey: "AIzaSyCZ_xbInEwzSb24Tg_uNH1pj9cEWoRGM0E",
    authDomain: "portfolio-app-68b5d.firebaseapp.com",
    projectId: "portfolio-app-68b5d",
    databaseURL: "https://portfolio-app-68b5d-default-rtdb.europe-west1.firebasedatabase.app",
    storageBucket: "portfolio-app-68b5d.appspot.com",
    messagingSenderId: "508405163015",
    appId: "1:508405163015:web:a7946c4df937a70100b6a2",
    measurementId: "G-6P3QM7MQQ9",
})   

export const auth = getAuth(app);


export const logInWithEmailAndPassword = async (email, password) => {
      return await signInWithEmailAndPassword(auth, email, password);
  };



