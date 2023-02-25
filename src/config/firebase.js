// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCfoBNIAs2W5wSBidg5nVXlRrTFyWPJA5Y",
  authDomain: "e-commerce-f2b1f.firebaseapp.com",
  projectId: "e-commerce-f2b1f",
  storageBucket: "e-commerce-f2b1f.appspot.com",
  messagingSenderId: "990958827307",
  appId: "1:990958827307:web:0779111c5ca0fb734cb76e",
  measurementId: "G-CSMN5WL3DW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { app,analytics, auth}