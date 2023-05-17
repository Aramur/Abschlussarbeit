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
        for (let i = 0; i < 4; i++) {
            var table = document.getElementById("table" + i);
            while (table.rows.length > 0) {
                table.deleteRow(table.rows.length - 1);
            }
        }
        var list = this.getHighestScores(highscores);
        htmlCommunication.fillIntoList(list, "table0")
        highscores = highscores.filter(highscore => highscore.key >= Date.now() - 2678400000)
        var list = this.getHighestScores(highscores);
        htmlCommunication.fillIntoList(list, "table1")
        highscores = highscores.filter(highscore => highscore.key >= Date.now() - 604800000)
        var list = this.getHighestScores(highscores);
        htmlCommunication.fillIntoList(list, "table2")
        highscores = highscores.filter(highscore => highscore.key >= Date.now() - 86400000)
        var list = this.getHighestScores(highscores);
        htmlCommunication.fillIntoList(list, 'table3')

    }

    getHighestScores(highscores) {
        var score1 = 0;
        var score2 = 0;
        var score3 = 0;
        var score4 = 0;
        var score5 = 0;
        for (let scores = 0; scores < highscores.length; scores++) {
            var score = highscores[scores].score;
            if (score >= score5) {
                if (score >= score4) {
                    if (score >= score3) {
                        if (score >= score2) {
                            if (score >= score1) {
                                score5 = score4;
                                score4 = score3;
                                score3 = score2;
                                score2 = score1;
                                score1 = score;
                            }
                            else {
                                score5 = score4;
                                score4 = score3;
                                score3 = score2;
                                score2 = score;
                            }
                        }
                        else {
                            score5 = score4;
                            score4 = score3;
                            score3 = score;
                        }
                    }
                    else {
                        score5 = score4;
                        score4 = score;
                    }
                }
                else {
                    score5 = score;
                }
            }
        }
        var list = [highscores.filter(highscore => highscore.score == score1), highscores.filter(highscore => highscore.score == score2), highscores.filter(highscore => highscore.score == score3), highscores.filter(highscore => highscore.score == score4), highscores.filter(highscore => highscore.score == score5)];
        return list
    }
}