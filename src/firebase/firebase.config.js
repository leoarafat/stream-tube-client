import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyB6SxMAfQyVecff0iWQysf4hwLWUwHy6wA",
  authDomain: "stream-tube-fe33b.firebaseapp.com",
  projectId: "stream-tube-fe33b",
  storageBucket: "stream-tube-fe33b.appspot.com",
  messagingSenderId: "665522613953",
  appId: "1:665522613953:web:3054a2f747515a13f32e40"
};

export const app = initializeApp(firebaseConfig);