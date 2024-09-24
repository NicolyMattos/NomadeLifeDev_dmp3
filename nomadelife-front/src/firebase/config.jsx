import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCmKFefGC06jXDIu1QUfjVOjRr7grsn6NA",
  authDomain: "nomadelife-nicoly.firebaseapp.com",
  projectId: "nomadelife-nicoly",
  storageBucket: "nomadelife-nicoly.appspot.com",
  messagingSenderId: "899353317530",
  appId: "1:899353317530:web:311d7bb8f18f91fdf50f23",
  measurementId: "G-2YSKNS96RS"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app)

export {db}