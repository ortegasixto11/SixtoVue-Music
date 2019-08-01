import Firebase from 'firebase'
let appFirebase = Firebase.initializeApp({
    apiKey: "AIzaSyAoXPrt0s73XsCEt6lr2LldmI6NPYJbj50",
    authDomain: "sixto-vue-music-app.firebaseapp.com",
    databaseURL: "https://sixto-vue-music-app.firebaseio.com",
    projectId: "sixto-vue-music-app",
    storageBucket: "sixto-vue-music-app.appspot.com",
    messagingSenderId: "322715466456",
    appId: "1:322715466456:web:0349f03ef3be0afb"
})

export const dbFirebase = appFirebase.database()