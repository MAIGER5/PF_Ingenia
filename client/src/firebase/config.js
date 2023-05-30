import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


export const firebaseConfig = {
  apiKey: `${import.meta.env.VITE_FB_API_KEY}`,
  authDomain: "ingenia-9b3cf.firebaseapp.com",
  projectId: "ingenia-9b3cf",
  storageBucket: "ingenia-9b3cf.appspot.com",
  messagingSenderId: "323031970459",
  appId: "1:323031970459:web:c87d699cb925afe5694c3e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app

