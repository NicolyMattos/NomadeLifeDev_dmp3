import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
import { getFirestore} from ""

const firebaseConfig = {
  apiKey: "AIzaSyAuOofKQdVmtyY8WBVHytXFvkKeBImzzow",
  authDomain: "nomadelife-dn.firebaseapp.com",
  projectId: "nomadelife-dn",
  storageBucket: "nomadelife-dn.appspot.com",
  messagingSenderId: "836289455676",
  appId: "1:836289455676:web:54a0709dbac5b793434539",
  measurementId: "G-EZ7LJLJ464"
}


const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
const db = getFirestore(app)

export{db}