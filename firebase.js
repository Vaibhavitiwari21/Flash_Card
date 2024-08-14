// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getFireBase } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyDyubRS1ew06uxPI07PmYiVwZyXLCo0Qeo",
	authDomain: "math-genie-f3f08.firebaseapp.com",
	projectId: "math-genie-f3f08",
	storageBucket: "math-genie-f3f08.appspot.com",
	messagingSenderId: "772031687503",
	appId: "1:772031687503:web:ad4bfec1553b7ca87df33a",
	measurementId: "G-YRXHLNXHD9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFireBase(app);

export { db };
