// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBN34vEQ9Dtq4K_TN_UO5qPY-Am3bx9TJs",
  authDomain: "ntuassist.firebaseapp.com",
  projectId: "ntuassist",
  storageBucket: "ntuassist.appspot.com",
  messagingSenderId: "142438791243",
  appId: "1:142438791243:web:c9399843a741e9fe6df5ce",
  measurementId: "G-JRVBR3L0LX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export default app;