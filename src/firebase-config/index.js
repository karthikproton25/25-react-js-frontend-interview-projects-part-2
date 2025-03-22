import {initializeApp} from firebaseConfig/app;
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDenjytWyiE6vUIOP2gWSSprC0_yTbuB0c",
  authDomain: "react-interview-question-a13b8.firebaseapp.com",
  projectId: "react-interview-question-a13b8",
  storageBucket: "react-interview-question-a13b8.firebasestorage.app",
  messagingSenderId: "837818667791",
  appId: "1:837818667791:web:bf620c2cfbcfa61294e47a",
  measurementId: "G-SKFE1WEWQL",
};

const firebaseapp = initializeApp(firebaseConfig);
export const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

async function loginUsingEmailAndPassword(email, password) {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.log(error);
  }
}

async function registerUsingEmailAndPassword(name, email, password) {
  try {
    const response = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = response.user;

    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (error) {
    console.log(error);
  }
}

function logout() {
  signOut(auth);
}