import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import {Redirect} from "react-router-dom";

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
export const auth = firebase.auth();
export const db = firebase.firestore();

export const signOut = () => {
    auth.signOut();
};

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
export const getAllReportsFromCloud = async (userUID) => {
    if (userUID) {
        try {
            let array = [];
            const response = await db.collection("errors").get();
            const data = await response.docs;
            await data.map((report) => {
                let item = {};
                item.id = report.id;
                item.data = report.data();
                array.push(item)
            });
            return array;
        }
        catch
            (error) {
            console.error("Error getting document:", error);
        }
        return {}
    } else {
        try {
            let array = [];
            const response = await db.collection('users').doc(userUID).get();
            const data = await response.docs;
            console.log(response.data());
            await data.map((report) => {
                let item = {};
                item.id = report.id;
                item.data = report.data();
                array.push(item)
            });
            console.log(array);
            return array;
        }
        catch
            (error) {
            console.error("Error getting document:", error);
        }
        return {}
    }
};
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


export const updateIssuesInCloud = async (id, item) => {
  try {
    await db.collection("errors").doc(id).set(item);
  } catch (error) {
    console.error("Error getting document:", error);
  }
  return {}
};