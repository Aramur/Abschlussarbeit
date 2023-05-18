class HtmlCommunication {
    initializeButtons() {
        var self = this;
        document.getElementById("save").addEventListener("click", function () {
            firebaseManager.saveHighscore();
            self.replaceToStart();
        })
        document.getElementById('notsave').addEventListener('click', function () {
            self.replaceToStart();
        })
        document.getElementById('startButton').addEventListener('click', function () {
            self.startGame();
        })
    }

    ResizeMenu() {
        document.querySelectorAll('p').forEach(p => {
            p.style.fontSize = height / 20 + 'px';
        })
        document.querySelectorAll('td').forEach(td => {
            td.style.fontSize = height / 20 + 'px';
        })
        document.querySelectorAll('h4').forEach(h4 => {
            h4.style.fontSize = height / 20 + 'px';
        })
        document.querySelectorAll('button').forEach(button => {
            button.style.fontSize = height / 30 + 'px';
        })
        document.querySelectorAll('input').forEach(input => {
            input.style.fontSize = height / 35 + 'px';
        })
        document.getElementById('startButton').style.fontSize = height / 20 + 'px';
        document.getElementById('img').height = height / 1.4;
        document.getElementById('img').width = height / 1.4;
    }

    fillIntoList(list, element) {
        var table = document.getElementById(element);
        for (var i = 0; i < 5; i++) {
            var tr = document.createElement("tr");
            table.appendChild(tr);
            var td = document.createElement("td");
            if (list[i].length == 0) {
                td.textContent = '-';
            }
            else {
                td.textContent = list[i][0].score;
            }
            tr.appendChild(td);
            td = document.createElement("td");
            if (list[i].length == 0) {
            }
            else {
                td.textContent = list[i][0].name;
            }
            tr.appendChild(td);
        }
    }

    lostGame() {
        document.getElementById("score").innerHTML = 'Score:' + score;
        document.getElementById("home").style.zIndex = 1;
    }

    replaceToStart() {
        document.getElementById('scoreField').style.display = 'none';
        document.getElementById('startButtonContainer').style.display = 'flex';
    }

    startGame() {
        skier.loadSkier();
        skier.rotateCounter = 0;
        skier.rotation = 0;
        stonelayerManager.stonelayers = [];
        stoneManager.stones = [];
        chasmManager.chasms = [];
        firManager.firs = [];
        slalomManager.poles = [];
        slalomLines.counter = 0;
        spawnSpeed = 2;
        score = 0;
        meters = 0;
        modus = 'stones';
        won = false;
        wonCounter = 0;
        play = true;
        chasmManager.letFirstChasm();
        firManager.letFirstFir();
        for (let times = 0; times <= 20; times++) {
            chasmManager.letChasm();
            firManager.letForest();
        }
        document.getElementById("home").style.zIndex = -1;
        document.getElementById('home').style.opacity = 0;
        document.getElementById('scoreField').style.display = 'flex';
        document.getElementById('startButtonContainer').style.display = 'none';
    }
}