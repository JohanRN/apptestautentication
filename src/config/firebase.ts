
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyA58I-j86_kHxfFbTaY31HhKJQJoXHDE-U",
    authDomain: "apptestingautentication.firebaseapp.com",
    projectId: "apptestingautentication",
    storageBucket: "apptestingautentication.appspot.com",
    messagingSenderId: "364080664761",
    appId: "1:364080664761:web:3c74d2cf440b3ddacbcb68"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;