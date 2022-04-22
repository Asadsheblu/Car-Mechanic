// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCaQ7Zb5oy-YQTJaLCFSUo6GYztqZ8PNg4",
  authDomain: "genius-car-service-5b5b7.firebaseapp.com",
  projectId: "genius-car-service-5b5b7",
  storageBucket: "genius-car-service-5b5b7.appspot.com",
  messagingSenderId: "65972877680",
  appId: "1:65972877680:web:d6f72c7b715eb3f22f77b5" 
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export default auth;