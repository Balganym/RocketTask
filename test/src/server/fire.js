import firebase from 'firebase'

var config = {
  apiKey: "AIzaSyCIg4KQNBIbh2Xx2MpsqUdN1mQmsGbXH3A",
  authDomain: "rocketfirm-9f6c9.firebaseapp.com",
  databaseURL: "https://rocketfirm-9f6c9.firebaseio.com",
  projectId: "rocketfirm-9f6c9",
  storageBucket: "rocketfirm-9f6c9.appspot.com",
  messagingSenderId: "781454348153"
};

var fire = firebase.initializeApp(config);
export default fire;