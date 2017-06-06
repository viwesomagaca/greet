describe("Display Input Function", function(){
	
	it('should greet a Visitor in English', function(){
       assert.equal(greetMessage("Viwe", "English"),"Hello, Viwe");
	});
	it("should greet a Visitor in Xhosa", function(){
		assert.equal(greetMessage("Viwe", "Isixhosa"), "Molo, Viwe");
	});
	it("should greet a Visitor in Afrikaans", function(){
		assert.equal(greetMessage("Viwe", "Afrikaans"), "Hallo, Viwe");
	});
	it("should return a Please type Your name, for invalid parameters", function(){
		assert.equal("Please type in your name",greetMessage());
	
});
		it("should return a message, for invalid parameters", function(){
		assert.equal("Please select a message",greetMessage());
});