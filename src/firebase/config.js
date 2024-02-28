// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,

  //   apiKey: "AIzaSyBwaxNbtLWalE1UdHsmckB_Koe7jjF63_A",
  //   authDomain: "rodstore-coderhouse.firebaseapp.com",
  //   projectId: "rodstore-coderhouse",
  //   storageBucket: "rodstore-coderhouse.appspot.com",
  //   messagingSenderId: "180716541535",
  //   appId: "1:180716541535:web:6d497db8fe7a3044182dea"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Conectarse a la bd
export const db = getFirestore(app);
