// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUwfi2nt8v4h3Zqf61FaDS_9K47Whvglg",
  authDomain: "e-shop-lee.firebaseapp.com",
  projectId: "e-shop-lee",
  storageBucket: "e-shop-lee.appspot.com",
  messagingSenderId: "962323990678",
  appId: "1:962323990678:web:ca7299417cb5ea97585ab7"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;