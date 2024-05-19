// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBUNfNZ6Uu98_kt5qRc_J7YSjFF7GytLVQ",
  authDomain: "bistro-boss-cfde0.firebaseapp.com",
  projectId: "bistro-boss-cfde0",
  storageBucket: "bistro-boss-cfde0.appspot.com",
  messagingSenderId: "1076157819686",
  appId: "1:1076157819686:web:289d5a6986c1eb8b90afe7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;