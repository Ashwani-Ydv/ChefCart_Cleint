import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

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
const auth = getAuth();

export { auth };
export default app;
