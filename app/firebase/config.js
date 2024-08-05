import { initializeApp, getApps, getApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCOFM02AjbtMsciJV5e2bS4Sj-ieRLXTRA",
  authDomain: "sportsera-189a3.firebaseapp.com",
  projectId: "sportsera-189a3",
  storageBucket: "sportsera-189a3.appspot.com",
  messagingSenderId: "769136390153",
  appId: "1:769136390153:web:2215602e31826ed23188d8",
  measurementId: "G-C151KC0H8D"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()

const auth = getAuth(app)

export {app, auth}
