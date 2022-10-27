import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage, ref } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAVMbSx74BHfPSb2U8Gnm8xWkrFXwrukQQ",
  authDomain: "yuchat-777.firebaseapp.com",
  projectId: "yuchat-777",
  storageBucket: "yuchat-777.appspot.com",
  messagingSenderId: "185692140714",
  appId: "1:185692140714:web:5db5edcce0aacffe2accd3",
  measurementId: "G-15Q14PPL1N"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth();
export const storage = getStorage();