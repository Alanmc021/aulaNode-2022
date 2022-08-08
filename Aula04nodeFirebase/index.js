const firebase = require('firebase')

const firebaseConfig = {
    apiKey: "AIzaSyAp96AEWJvz3RSPAXJBP4r9W_qOyu8W5SM",
    authDomain: "aulanodedatabase.firebaseapp.com",
    projectId: "aulanodedatabase",
    storageBucket: "aulanodedatabase.appspot.com",
    messagingSenderId: "331771148621",
    appId: "1:331771148621:web:5085a32faa707e53addf04",
    measurementId: "G-3BBCPSJ72G"
};

firebase.initializeApp(firebaseConfig)

function createDataInRealTime() {
    let students = firebase.database().ref("alunos")
    students.push({ name: "Caio" })
}

function readStudentsInRealTime() {
    firebase.database().ref("alunos").on('value', (snapshot) => {
        snapshot.forEach((chilItem) => {
            let data = {
                key: chilItem.key,
                name : chilItem.val().name
            }
            console.log(data);
        })
    })
}

createDataInRealTime()
readStudentsInRealTime()