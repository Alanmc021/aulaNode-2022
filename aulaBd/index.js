const firebase = require('firebase')

const firebaseConfig = {
    apiKey: "AIzaSyAWOKBG-5Jvw73S4A2J9vuFFGC9Qt3Gec8",
    authDomain: "aulatestebd.firebaseapp.com",
    projectId: "aulatestebd",
    storageBucket: "aulatestebd.appspot.com",
    messagingSenderId: "913809316118",
    appId: "1:913809316118:web:ef468ebe2ce5d51cf5d837"
};

firebase.initializeApp(firebaseConfig);

//INSERT 
function createDataInRealTime() {
    let students = firebase.database().ref("students")
    students.push({ name: 'Alan4' })
}

//READ
function readStudentsInRealTime() {
    firebase.database().ref("students").on("value", (snapshot) => {
        snapshot.forEach((childItem) => {
            let data = {
                key: childItem.key,
                name: childItem.val().name
            }
            console.log(data);
        })

    })
}
readStudentsInRealTime()
createDataInRealTime()