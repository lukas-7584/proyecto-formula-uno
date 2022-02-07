import firebase from "firebase/app";
import "firebase/firestore";

const app = firebase.initializeApp(
//PONER ACA LA INFO DE SU APP
{
    apiKey: "AIzaSyAqHDm6u3UWArwxFr22er5JskZzXKriokI",
    authDomain: "fan-market-a9c62.firebaseapp.com",
    projectId: "fan-market-a9c62",
    storageBucket: "fan-market-a9c62.appspot.com",
    messagingSenderId: "320820932717",
    appId: "1:320820932717:web:f554711d52fda374edcf64"
}
);
export function getFirebase(){
    return app;
}
export function getFirestore(){
    return firebase.firestore(app);
}