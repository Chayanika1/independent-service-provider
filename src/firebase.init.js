// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDwzZ00kK-2_XQfvirB1tTo35URzEEKFvY",
  authDomain: "gym-trainer-c928c.firebaseapp.com",
  projectId: "gym-trainer-c928c",
  storageBucket: "gym-trainer-c928c.appspot.com",
  messagingSenderId: "816640247651",
  appId: "1:816640247651:web:e00cdff8a5c6bb552f7556"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;