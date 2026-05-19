import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyC7eCP8FrOrBZdNx88NmkN5FPpkasBSrko",
    authDomain: "fir-hosting-a57ec.firebaseapp.com",
    projectId: "fir-hosting-a57ec",
    storageBucket: "fir-hosting-a57ec.firebasestorage.app",
    messagingSenderId: "756986493755",
    appId: "1:756986493755:web:78087b5622eee71d94151e",
    measurementId: "G-TBFYS7QYSM"
};

// Initialize Firebase
const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
