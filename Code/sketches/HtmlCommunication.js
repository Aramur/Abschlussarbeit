class HtmlCommunication {
    lostGame() {
        document.getElementById("score").innerHTML = 'Score:' + score;
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
        document.getElementById('img').height = height / 1.4;
        document.getElementById('img').width = height / 1.4;
        document.getElementById("home").style.zIndex = 1;
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
}