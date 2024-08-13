// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getFireBase } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBuDr4_h2vRoCqTAtvzed2nvSYNCrk6sGY",
  authDomain: "flash-card-game-7a6fb.firebaseapp.com",
  projectId: "flash-card-game-7a6fb",
  storageBucket: "flash-card-game-7a6fb.appspot.com",
  messagingSenderId: "859805938396",
  appId: "1:859805938396:web:73b500cb28fe4c802bfa19",
  measurementId: "G-LM8XERX705"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFireBase(app)

export{db}