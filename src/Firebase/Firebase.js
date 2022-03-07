import firebase from "firebase/app";
import "firebase/firestore";

const app = firebase.initializeApp(
{
    apiKey: "AIzaSyATw_aAJVx7LwSMVncnoieNb0KwH3QxYjE",
    authDomain: "funko-pop-store-541c7.firebaseapp.com",
    projectId: "funko-pop-store-541c7",
    storageBucket: "funko-pop-store-541c7.appspot.com",
    messagingSenderId: "127099907457",
    appId: "1:127099907457:web:1e091af2d4a48c87cacc80"
}
);
export function getFirebase(){
    return app;
}

export function getFirestore(){
    return firebase.firestore(app);
}