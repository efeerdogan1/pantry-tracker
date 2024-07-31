// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; // Correct function name

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCt3xsIZPtC2U_1EM35ZPC4jOgChzKRkFw",
  authDomain: "pantry-tracker-b47dc.firebaseapp.com",
  projectId: "pantry-tracker-b47dc",
  storageBucket: "pantry-tracker-b47dc.appspot.com",
  messagingSenderId: "663130994671",
  appId: "1:663130994671:web:f549f702f02226a753681a",
  measurementId: "G-5TPMGKSP53"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app); // Correct function name

export { firestore };
