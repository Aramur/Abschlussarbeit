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
        this.initializeScoreboardsLoading();
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

    initializeScoreboardsLoading() {
        var ref = this.database.ref("highscores")

        var self = this;

        ref.on('value', function (snapshot) {
            var highscores = [];
            snapshot.forEach(function (childSnapshot) {
                var key = childSnapshot.key;
                var highscore = childSnapshot.val();
                highscores.push({
                    key: key,
                    name: highscore.name,
                    score: highscore.score
                });
            });

            self.actualiseScoreboards(highscores);
        });
    }

    actualiseScoreboards(highscores) {
        console.log(highscores)
    }
}
