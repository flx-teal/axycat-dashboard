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

export const addErrorToCloud = async (checkResult, projectData = {}) => {
  try {
    const docRef = await firebase.firestore().collection("errors").add({
      ...checkResult,
      projectData
    });
    console.log("Document written with ID: ", docRef.id);
    return docRef.id;
  } catch (error) {
    console.error("Error adding document: ", error);
  }
};

//Receive all Reports from Firebase
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

//Receive Report from Firebase by ID
export const getReportFromCloudById = async id => {
  try {
    const doc = await db.collection("errors").doc(id).get();
    if (doc.exists) {
      return doc.data();
    }
    // doc.data() will be undefined in this case
    console.log("No such document!");
  } catch (error) {
    console.error("Error getting document:", error);
  }
  return {}
};

//Example By ID
/*
function showData(data){
    console.log(data);
}

getReportFromCloudById('0ujvlxp97Jz1lSjNEnwY', showData);*/