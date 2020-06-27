var countbtn = document.querySelector('#count');
var num = localStorage.getItem('currentNumberOfGreetings');
document.getElementById('count').innerHTML = 'Greetings: ' + num;

var namesGreeted = {};
for (var i=0; i< namesGreeted.length; i++){
}

if( !num){
    countbtn.innerHTML = 'Greetings: ' + 0;
}

function displayInput() {
    'use strict';
    var x = document.getElementById('elements').value;
    /*if the english radio button is checked and also if the length of the typed text is greater than zero -->*/
    if (document.getElementById('English').checked === true && x.length > 0 && x !== " " && namesGreeted[x] === undefined) {
        namesGreeted[x]=1;
        /*>-- incremate my counter by one*/
        num++;
        /*>-- and display the incremeted number to my page*/
        countbtn.innerHTML = 'Greetings: ' + num;
        /*Than display this greeting*/
        document.getElementById('displayHere').innerHTML = "Good Day, " + document.getElementById('elements').value;
        
    } else if (document.getElementById('Isixhosa').checked === true && x.length > 0 && x !== " " && namesGreeted[x] === undefined) {
        namesGreeted[x]=1;
        num++;
        countbtn.innerHTML = 'Greetings: ' + num;
        document.getElementById('displayHere').innerHTML = "Molo, " + document.getElementById('elements').value;
    } else if (document.getElementById('Afrikaans').checked === true && x.length > 0 && x !== " " && namesGreeted[x] === undefined) {
        namesGreeted[x]=1;
        num++;
        countbtn.innerHTML = 'Greetings: ' + num;
        document.getElementById('displayHere').innerHTML = "Goeie Dag, " + document.getElementById('elements').value;
    }
    /*after the greet me button is pressed the text box will clear*/
    document.getElementById('elements').value = "";
    /*the locStor.setItem stores the cyrrent Greetings*/
    localStorage.setItem('currentNumberOfGreetings', num);
    //console.log(localStorage.getItem('currentNumberOfGreetings'))
}

var f = document.getElementById('dlt');
f.addEventListener('click', dltcounter);

function dltcounter() {
    'use strict';
    countbtn.innerHTML = 'Greetings: ' + num;
    localStorage.clear();
    num = 0;
}


