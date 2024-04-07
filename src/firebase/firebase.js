// Import the functions you need from the SDKs you need
import {
    initializeApp
} from "firebase/app";

import {
    getFirestore
} from "firebase/firestore";
import {
    getStorage
} from "firebase/storage";
import {
    getAuth
} from "firebase/auth";
import {
    initializeFirestore
} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDOwnzDsjt0Qfdr_d4zGEcDKaY_noZgZic",
    authDomain: "java-mobile-9bca0.firebaseapp.com",
    projectId: "java-mobile-9bca0",
    storageBucket: "java-mobile-9bca0.appspot.com",
    messagingSenderId: "480563994350",
    appId: "1:480563994350:web:b22d767a1aa33aa9315dff",
    measurementId: "G-DC1M7ECSYE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//initialize firebase auth
const auth = getAuth(app);
const db = getFirestore(app)
const storage = getStorage(app);
export {
    auth,
    db,
    storage
}
let isAuthenticated = false;

export function getIsAuthenticated() {
    return isAuthenticated;
}

export function setIsAuthenticated(value) {
    isAuthenticated = value;
}