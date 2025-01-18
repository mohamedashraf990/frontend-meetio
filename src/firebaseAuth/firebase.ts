import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFcbLU5ZNvavAqY_HVKW3qcTh2S7GvX8g",
  authDomain: "meetio-cfcb6.firebaseapp.com",
  projectId: "meetio-cfcb6",
  storageBucket: "meetio-cfcb6.firebasestorage.app",
  messagingSenderId: "609499271290",
  appId: "1:609499271290:web:db241302174cd63ca4ebc3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
