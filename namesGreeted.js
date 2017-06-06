function countNames(){
	var availableNames =[];
	var counterNames =0;

   	var clickCounter = function(name){
		//var getStorage = localStorage.getItem("instantGreets").value;
	  var checkName = false;
		for(var i= 0; i< availableNames.length; i++){ 
			if(availableNames[i] === name.value){
				checkName = true;
			
				break;
			}
		}
		
		if(!checkName){
			availableNames.push(name);
			localStorage.setItem("instantGreets", availableNames[i].length);
		}
	return localStorage.getItem("instantGreets");
   	};
	
   function checkLength(){
	   return availableNames.length
   };
	return  {
		clickCounter,
		checkLength
   	}
};