import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyB" + "...", // The user will need to add their actual key here
    authDomain: "fir-hosting-a57ec.firebaseapp.com",
    projectId: "fir-hosting-a57ec",
    storageBucket: "fir-hosting-a57ec.appspot.com",
    messagingSenderId: "...",
    appId: "..."
};

// Initialize Firebase
const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
