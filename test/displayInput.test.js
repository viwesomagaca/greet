describe("Display Input Function", function(){
	
	it('should greet a Visitor in English', function(){
       assert.equal(displayInput("Viwe", "English"),"Hello, Viwe");
	});
	it("should greet a Visitor in Xhosa", function(){
		assert.equal(displayInput("Viwe", "IsiXHosa"), "Molo, Viwe");
	});
	it("should greet a Visitor in Afrikaans", function(){
		assert.equal(displayInput("Viwe", "Afrikaans"), "Hallo, Viwe");
	});
});