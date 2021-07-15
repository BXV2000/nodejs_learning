const express = require('express');
const app = express();
const firebase = require('firebase');
require("firebase/firestore");
const bodyParser = require('body-parser');
const { json } = require('express');

var firebaseConfig = {
    apiKey: "AIzaSyBAw9tm7xpRzM1RqkABJwlky4IRk4bOey4",
    authDomain: "learn-c30eb.firebaseapp.com",
    projectId: "learn-c30eb",
    storageBucket: "learn-c30eb.appspot.com",
    messagingSenderId: "369947124414",
    appId: "1:369947124414:web:ca0a5c6bb9e8911463f4ef"
  };

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

app.get("/", (req, res) => {
    res.render("hello")
})

app.listen(3000);