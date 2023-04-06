class FirebaseManager {
    firebaseConfig = {
        apiKey: "AIzaSyDe7m_-N6rcvjvZ3jnsiTf_8lpoBnd6Qow",
        authDomain: "freeriding-65c28.firebaseapp.com",
        databaseURL: "https://freeriding-65c28-default-rtdb.europe-west1.firebasedatabase.app",
        projectId: "freeriding-65c28",
        storageBucket: "freeriding-65c28.appspot.com",
        messagingSenderId: "443690766180",
        appId: "1:443690766180:web:c9433dc703b65066b07471"
    };
    database;

    initialize() {
        this.initializeFirebase();
        this.initializeSaveButton();
    }

    initializeFirebase() {
        firebase.initializeApp(this.firebaseConfig);
        this.database = firebase.database()
    }

    initializeSaveButton() {
        var self = this;
        document.getElementById("submit").addEventListener("click", function () {
            self.saveHighscore();
        })
    }

    saveHighscore() {
        var name = document.getElementById('name').value
        var time = Date.now()

        this.database.ref('highscores/' + time).set({
            score: score,
            name: name,

        })
    }

    getHighscore(scoreNumber) {

        var userRef = database.ref('highscores/' + scoreNumber)
        userRef.on('value', function (snapshot) {
            var data = snapshot.val()
            return data
        })
    }
}