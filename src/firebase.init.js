// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBf1FMaVIjFmUif3GMmIeivo2a04JINMTs",
  authDomain: "manufactur-29ef9.firebaseapp.com",
  projectId: "manufactur-29ef9",
  storageBucket: "manufactur-29ef9.appspot.com",
  messagingSenderId: "771097795578",
  appId: "1:771097795578:web:f1382d3d7fc9214b81e243",
  measurementId: "G-RP4YZS07NC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app)

export default auth