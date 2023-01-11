import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

export const firebaseApp = initializeApp({
  apiKey: "AIzaSyDIrHFFgYNw5grVhKIeqLcTPxd3bLFD-4s",
  authDomain: "ifb---processos.firebaseapp.com",
  projectId: "ifb---processos",
  storageBucket: "ifb---processos.appspot.com",
  messagingSenderId: "174827337602",
  appId: "1:174827337602:web:b7300ef543d509eae4c19b",
  measurementId: "G-307Y4D0G4F",
});

export const database = getFirestore(firebaseApp);
export const storage = getStorage(firebaseApp);
