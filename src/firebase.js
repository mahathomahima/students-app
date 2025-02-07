import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyA21YDEoofMvZWLMdskmwnqVKZIp4Lgp7I",
    authDomain: "fir-student-app-c53ad.firebaseapp.com",
    projectId: "fir-student-app-c53ad",
    storageBucket: "fir-student-app-c53ad.firebasestorage.app",
    messagingSenderId: "325801092116",
    appId: "1:325801092116:web:2621fc778fd39cad563301"
};

const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);
export const database = getFirestore(app);