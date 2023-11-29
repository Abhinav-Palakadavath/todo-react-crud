import {initializeApp} from "firebase/app"
import {getFirestore} from "firebase/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyDNgHaxQp5Ru3tWveT_4NZhkWw0f8PIiOE",
    authDomain: "reactjs-todo-app-crud.firebaseapp.com",
    projectId: "reactjs-todo-app-crud",
    storageBucket: "reactjs-todo-app-crud.appspot.com",
    messagingSenderId: "685132816530",
    appId: "1:685132816530:web:edc09d601b2c8b0101064b"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };