var chai = require('../../node_modules/chai/chai');
var assert = chai.assert;
var angular = require('angular-node');
	require('../../app/js/people-controller.js');


describe("People", function() {
	var controller, scope;
	beforeEach(module('angularDojo'));
	
	beforeEach(inject(function($rootScope, $controller) {
    scope = $rootScope.$new();
		controller = $controller('PeopleController', { $scope: scope });
  	}));
	
	it("insert person name", function() {
		controller.insertPerson('Anne');
		assert.deepEqual($scope.people, ['Anne']);
	});
});