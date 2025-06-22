import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyByFqlRv4yy3IswbgqB5pjfHywrMxRd7tY",
  authDomain: "dashboard-ba441.firebaseapp.com",
  projectId: "dashboard-ba441",
  storageBucket: "dashboard-ba441.appspot.com",
  messagingSenderId: "517278324674",
  appId: "1:517278324674:web:c6ea8d81c279efea41a85b"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firestore = getFirestore(app);
export const storage = getStorage(app); 