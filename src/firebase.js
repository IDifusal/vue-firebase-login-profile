import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBV9QEc627ZyfPhSkCSTel1j23dZ0L1OiY",
  authDomain: "vue-authentication-2bb34.firebaseapp.com",
  projectId: "vue-authentication-2bb34",
  storageBucket: "vue-authentication-2bb34.appspot.com",
  messagingSenderId: "1023624976227",
  appId: "1:1023624976227:web:de8875ae5592201a27e556",
  measurementId: "G-EGTK9T8KZ3",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore();
export const auth = getAuth(app);
