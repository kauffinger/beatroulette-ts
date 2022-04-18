// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
import { initializeAppCheck, ReCaptchaV3Provider } from "firebase/app-check";
import { Analytics, getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import {
  getFirestore,
  serverTimestamp,
  connectFirestoreEmulator,
} from "firebase/firestore";
import { getStorage, connectStorageEmulator } from "firebase/storage";
import { getFunctions, connectFunctionsEmulator } from "firebase/functions";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MEASUREMENT_ID,
};

// Initialize Firebase
let app;
if (getApps().length === 0) app = initializeApp(firebaseConfig);
let analytics: Analytics;
if (app && typeof window !== "undefined") {
  analytics = getAnalytics(app);
}

const auth = getAuth(app);
const googleAuthProvider = new GoogleAuthProvider();
const firestore = getFirestore(app);
const storage = getStorage(app);
const functions = getFunctions(app);

//connect to emulators
//connectFunctionsEmulator(functions, "localhost", 5001);
//connectFirestoreEmulator(firestore, "localhost", 8080);
//connectStorageEmulator(storage, "localhost", 9199);

export {
  auth,
  googleAuthProvider,
  firestore,
  signInWithPopup,
  storage,
  functions,
};
export default app;
