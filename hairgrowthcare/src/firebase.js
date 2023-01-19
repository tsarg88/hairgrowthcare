// import firebase from "firebase";
// import "firebase/firestore";
// import firebase from "firebase/app";
// import firebase from "firebase/compat/app";
// import { initializeApp } from "firebase/app";
// import { firebase } from "@firebase/app";
// import "@firebase/firestore";
// import { firestore } from "firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

var firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyB864j0KelMEkIahyXi5PHmtMKgYzoZQ70",
  authDomain: "hairgrowthcare-contact.firebaseapp.com",
  projectId: "hairgrowthcare-contact",
  storageBucket: "hairgrowthcare-contact.appspot.com",
  messagingSenderId: "1062374715389",
  appId: "1:1062374715389:web:62b66bf010936994fcf394",
  measurementId: "G-R26YES9XKM",
});

// var db = firebaseApp.firestore();
var db = firebase.firestore();

export { db };
