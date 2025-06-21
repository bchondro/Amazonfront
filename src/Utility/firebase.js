// we're importing the core Firebase library, as well as the
// functions for authentication and the Firestore database

import "firebase/compat/firestore";
import "firebase/compat/auth";

import firebase from "firebase/compat/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration for the Firebase project you created in the Firebase console
const firebaseConfig = {
  apiKey: "AIzaSyAVBu7WNS5tFz7uXBOkku300C-jZW5ZorU",
  authDomain: "e-6bd4e.firebaseapp.com",
  projectId: "e-6bd4e",
  storageBucket: "e-6bd4e.firebasestorage.app",
  messagingSenderId: "1043965336355",
  appId: "1:1043965336355:web:8693a6bfb463f9561c4a96"
};

// Initialize the Firebase app. This creates a new instance of the Firebase app, which is the entry point for all  Firebase functionality
const app = firebase.initializeApp(firebaseConfig);

// Get the authentication service for signing in and out of your app
export const auth = getAuth(app);

// Get the Firestore database for storing and retrieving data
export const db = app.firestore();
