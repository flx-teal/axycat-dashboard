import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Initialize Firebase
const config = {
    apiKey: "AIzaSyDj75w9OsPBE4wGa7p5iqkclsNZIOKK21c",
    authDomain: "flx-teal.firebaseapp.com",
    databaseURL: "https://flx-teal.firebaseio.com",
    projectId: "flx-teal",
    storageBucket: "flx-teal.appspot.com",
    messagingSenderId: "237395693786"
};

firebase.initializeApp(config);
const db = firebase.firestore();

export const addErrorToCloud = (data) => {
    firebase.firestore().collection("errors").add({
        ...data
    })
        .then(function (docRef) {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch(function (error) {
            console.error("Error adding document: ", error);
        });
};

//Recive all Reports from Firebase
export const getAllReportsFromCloud = (callBack) => {
    db.collection("errors").get().then((snapshot) => {
        snapshot.docs.forEach(doc => {
            callBack(doc.data())
        });
    });
};

//Example All Reports
/*
function showData(data){
    console.log(data.violations);
}

getAllReportsFromCloud(showData);
*/

//Recive Report from Firebase by ID
export const getReportFromCloudById = (id, callback) => {
    let docRef = db.collection("errors").doc(id);
    docRef.get().then((doc) => {
        if (doc.exists) {
            callback(doc.data());
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }).catch((error) => {
        console.error("Error getting document:", error);
    });
};

//Example By ID
/*
function showData(data){
    console.log(data);
}

getReportFromCloudById('0ujvlxp97Jz1lSjNEnwY', showData);*/