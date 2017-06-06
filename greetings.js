var displayOption = document.querySelector('#count');
//var name = document.getElementById('elements').value;

var checkLanguage = function(){
	
	 if(document.getElementById("English").checked === true){ 
	  return "English";   
      }
	
	 if(document.getElementById("Isixhosa").checked === true){
	return "Isixhosa";
	    } 
	
	  if(document.getElementById("Afrikaans").checked === true){
	return "Afrikaans";
    }
}


var instance = new countNames();

function displayInput(){
    'use strict';
var name = document.getElementById('elements').value;
	console.log(name);
var language = document.getElementsByName('language');
	console.log(checkLanguage())
	
if(name.trim() ==="" || checkLanguage() === undefined){
	alert("Please enter a Valid name");
	return
} else{
	console.log(language.value);
var displayHere = document.getElementById('displayHere');       
displayHere.innerHTML = greetMessage(name, checkLanguage());
}
	document.getElementById('elements').value = "";
	var instantNames = instance.clickCounter(name);
	var instantGreets = instance.checkLength();
	
	for(var i = 0, len = localStorage.length; i < len; i++){
		if(localStorage.getItem('instantGreets' +1) == instantGreets){
			break;
		} else{
			localStorage.setItem("instantGreets", instantGreets)
		}
	}
   displayOption.innerHTML = "NO. of Greets: " + instantGreets;
}





function dltcounter() {
    'use strict';
  'use strict';
    displayOption.innerHTML = 'Greets: ' + instantGreets;
    localStorage.clear();
    num = 0;
}

var deleteCounter = document.getElementById('dlt');
    deleteCounter.addEventListener('click', function(){
	dltcounter();
});



