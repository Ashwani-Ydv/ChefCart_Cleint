// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB1TgonhfczC8QgLV1cmBI6OwbJIvWb3nc",
  authDomain: "chefcart-b50e7.firebaseapp.com",
  projectId: "chefcart-b50e7",
  storageBucket: "chefcart-b50e7.appspot.com",
  messagingSenderId: "938485824061",
  appId: "1:938485824061:web:d40fc00622233a73a24854",
  measurementId: "G-P7XKG46FVD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default analytics;
