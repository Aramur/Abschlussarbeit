const firebaseConfig = {
    apiKey: "AIzaSyDe7m_-N6rcvjvZ3jnsiTf_8lpoBnd6Qow",
    authDomain: "freeriding-65c28.firebaseapp.com",
    databaseURL: "https://freeriding-65c28-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "freeriding-65c28",
    storageBucket: "freeriding-65c28.appspot.com",
    messagingSenderId: "443690766180",
    appId: "1:443690766180:web:c9433dc703b65066b07471"
};

firebase.initializeApp(firebaseConfig);
var database = firebase.database()



function saveHighscore() {

    //var score = document.getElementById('score').value
    var name = document.getElementById('name').value
    //var time = document.getElementById('time').value

    database.ref('highscores').set({
        //score: score,
        name: name,
        //time: time
    })
}