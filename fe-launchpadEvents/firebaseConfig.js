import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDBWcgscbusdiHHv4GHjlz9E57bleFjZT8",
  authDomain: "launchpadevents-2864d.firebaseapp.com",
  projectId: "launchpadevents-2864d",
  storageBucket: "launchpadevents-2864d.firebasestorage.app",
  messagingSenderId: "147010183960",
  appId: "1:147010183960:web:97b75906b9b8d66e21746d",
  measurementId: "G-WFCERDZCNQ",
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
