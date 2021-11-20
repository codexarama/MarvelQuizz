import { initializeApp } from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyB0hoVeXh5dfsXgkgaK2IuHMA9mv9DdNYg',
  authDomain: 'marvel-quizz-9a1c1.firebaseapp.com',
  projectId: 'marvel-quizz-9a1c1',
  storageBucket: 'marvel-quizz-9a1c1.appspot.com',
  messagingSenderId: '418240153063',
  appId: '1:418240153063:web:e532aa733c59d84ac26942',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
// const db = app.firestore();

class Firebase {
  constructor() {
    this.auth = auth;
    console.log(this.auth);
  }

  // ! FOCNTIONS ASYNCHONES ! //

  // inscription
  register = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  // connexion
  login = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);
  //deconnexion
  logout = () => this.auth.signOut();
}

export default Firebase;
