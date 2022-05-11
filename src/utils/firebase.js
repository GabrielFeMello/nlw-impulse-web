import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyB_1hNLKjOn1rULYOac5_enLbp_ymmVZUs",
  authDomain: "botherzisse.firebaseapp.com",
  projectId: "botherzisse",
  storageBucket: "botherzisse.appspot.com",
  messagingSenderId: "488342430617",
  appId: "1:488342430617:web:911c9561a37784f5b9e908",
  measurementId: "G-YKTQ3J40J7",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
