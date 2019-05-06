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
export const getAllReportsFromCloud = async () => {
    try {
        let array = [];
        const response = await db.collection("errors").get();
        const data = await response.docs;
        await data.forEach((report) => {
            array.push(report.data());

        });
        return array;
    }
    catch
        (error) {
        console.error("Error getting document:", error);
    }
    return {}
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