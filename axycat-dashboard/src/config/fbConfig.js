import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Initialize Firebase
var config = {
    apiKey: "AIzaSyDj75w9OsPBE4wGa7p5iqkclsNZIOKK21c",
    authDomain: "flx-teal.firebaseapp.com",
    databaseURL: "https://flx-teal.firebaseio.com",
    projectId: "flx-teal",
    storageBucket: "flx-teal.appspot.com",
    messagingSenderId: "237395693786"
};

firebase.initializeApp(config);
firebase.firestore();//.settings({timestampsInSnapshots: false});

export default firebase;