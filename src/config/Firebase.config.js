// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCV_RRhXN2_l2gO2DyKbY7j4KIAJZA--Rg",
  authDomain: "tourism-managment-b9a04.firebaseapp.com",
  projectId: "tourism-managment-b9a04",
  storageBucket: "tourism-managment-b9a04.firebasestorage.app",
  messagingSenderId: "757268711264",
  appId: "1:757268711264:web:1785051fe86ca707ba4005",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
