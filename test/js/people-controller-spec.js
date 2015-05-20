describe("People Controller", function() {
	var $rootScope, $scope, $controller;
	
	beforeEach(module('angular-dojo'));
	beforeEach(inject(function($injector) {
    $rootScope = $injector.get('$rootScope');
		$scope = $rootScope.$new();
		$controller = $injector.get('$controller');
  }));
	
	it("insert person name", function() {
		$controller('PeopleController', {
			'$scope': $scope
		});
		
		$scope.insertPerson('Anne');
		$scope.people.should.be.deep.equal(['Anne']);
	});
});