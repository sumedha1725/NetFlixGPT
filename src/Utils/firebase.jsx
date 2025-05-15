// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC1pbfH4hk1fCzcY47ApRgd6-N4MhdohDY",
  authDomain: "netflixgpt-8f246.firebaseapp.com",
  projectId: "netflixgpt-8f246",
  storageBucket: "netflixgpt-8f246.firebasestorage.app",
  messagingSenderId: "129965213293",
  appId: "1:129965213293:web:29f5d2c1c6fab5e9126164",
  measurementId: "G-W6B26HTMCS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);


// https://netflixgpt-8f246.web.app