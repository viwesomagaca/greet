function greetMessage(name, language) {
	
  if(language === "English"){
	  return "Hello, " + name;
   }
	
   if(language === "Isixhosa"){
	return "Molo, " + name
   }
	
    if(language === "Afrikaans"){
	return "Hallo, " + name;
   }
	if(language === undefined){
		alert("Please select a language")
	}
 }