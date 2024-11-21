import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDeDE5pTbe-c4Soo6vq7S8oc-Kvhboyfro",
  authDomain: "co-po-ab0d0.firebaseapp.com",
  projectId: "co-po-ab0d0",
  storageBucket: "co-po-ab0d0.firebasestorage.app",
  messagingSenderId: "1089288770016",
  appId: "1:1089288770016:web:44e6414ee234229ee4db85"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
