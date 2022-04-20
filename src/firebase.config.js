import { initializeApp } from "firebase/app"

import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDwSzGD-P3gfyL7IZEb7hO-dMAlaBA-8rw",
  authDomain: "house-marketplace-f5417.firebaseapp.com",
  projectId: "house-marketplace-f5417",
  storageBucket: "house-marketplace-f5417.appspot.com",
  messagingSenderId: "346254013356",
  appId: "1:346254013356:web:a003494c39bfaaf6ca4009",
}

// Initialize Firebase
initializeApp(firebaseConfig)
export const db = getFirestore()
