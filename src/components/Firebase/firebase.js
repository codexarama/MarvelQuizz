import app from 'firebase/app';

const config = {
    apiKey: "AIzaSyB0hoVeXh5dfsXgkgaK2IuHMA9mv9DdNYg",
    authDomain: "marvel-quizz-9a1c1.firebaseapp.com",
    projectId: "marvel-quizz-9a1c1",
    storageBucket: "marvel-quizz-9a1c1.appspot.com",
    messagingSenderId: "418240153063",
    appId: "1:418240153063:web:e532aa733c59d84ac26942"
  };


export default class Firebase {
  constructor() {
    app.initializeApp(config);
  }
}
