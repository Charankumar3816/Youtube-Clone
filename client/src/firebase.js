import { initializeApp } from "firebase/app";

import {getAuth , GoogleAuthProvider} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAgGh68sHzE0PwgHpoIUZxHRfPA74wrODE",
  authDomain: "video-a8b65.firebaseapp.com",
  projectId: "video-a8b65",
  storageBucket: "video-a8b65.appspot.com",
  messagingSenderId: "352548540959",
  appId: "1:352548540959:web:3d6b6c345716d821acbb2a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();

export default app;