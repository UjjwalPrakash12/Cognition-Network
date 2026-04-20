import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
import { getAnalytics } from "firebase/analytics"

const firebaseConfig = {
  apiKey: "AIzaSyAZ7wTLP6dF54p_Bz9F93R5PJEW93QgGt4",
  authDomain: "cognition-network.firebaseapp.com",
  projectId: "cognition-network",
  storageBucket: "cognition-network.firebasestorage.app",
  messagingSenderId: "857602117277",
  appId: "1:857602117277:web:bcf3552ca4611e1eb88e74",
  measurementId: "G-B2Q0EZWRQ1"
};

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)
export const analytics = typeof window !== "undefined" ? getAnalytics(app) : null
export default app
