import { initializeApp, type FirebaseOptions } from "firebase/app";

const env = import.meta.env;

// TODO: Replace the following with your app's Firebase configuration
const firebaseConfig: FirebaseOptions = {
    apiKey: env.VITE_apiKey,
    authDomain: env.VITE_authDomain,
    projectId: env.VITE_projectId,
    storageBucket: env.VITE_storageBucket,
    messagingSenderId: env.VITE_messagingSenderId,
    appId: env.VITE_appId,
};

const app = initializeApp(firebaseConfig);

export default app;
