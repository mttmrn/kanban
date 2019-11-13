import firebase from 'firebase/app';
import 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAvJajsf87aAC1yRno-9OaiJ3yVLSaSu_0",
    authDomain: "wevedotco.firebaseapp.com",
    databaseURL: "https://wevedotco.firebaseio.com",
    projectId: "wevedotco",
    storageBucket: "wevedotco.appspot.com",
    messagingSenderId: "490013193962",
    appId: "1:490013193962:web:6c386f0dc5aea2d17d0993",
    measurementId: "G-4B6QGM74YD"
};
// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);

export default fire