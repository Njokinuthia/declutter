import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDyOwFYE7euGb8oGVDArV4WZn-9gzxLCrI",
  authDomain: "declutter-3f06b.firebaseapp.com",
  projectId: "declutter-3f06b",
  storageBucket: "declutter-3f06b.appspot.com",
  messagingSenderId: "384805272690",
  appId: "1:384805272690:web:a72ef8a6c8998d7fb0d6eb",
  measurementId: "G-9QS8ZTBFZ6"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)