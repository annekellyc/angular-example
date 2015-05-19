var chai = require('../node_modules/chai/chai');
var assert = chai.assert;

describe("Angular Dojo", function() {
	it("Sums 1 and 1", function() {
		var expected = 2;
		var actual = 1+1;
		
		assert.equal(actual, expected);
	});
});