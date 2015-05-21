describe("People Controller", function() {
	var $rootScope, $scope, $controller;
	
	beforeEach(module('angular-dojo'));
	beforeEach(inject(function($injector) {
    $rootScope = $injector.get('$rootScope');
		$scope = $rootScope.$new();
		$controller = $injector.get('$controller');
		
		$controller('PeopleController', {
			'$scope': $scope
		});
  }));
	
	it("add a person", function() {
		$scope.add('Anne');
		$scope.add('Marcelo');
		$scope.people.should.be.deep.equal([{ name: "Anne", selected: false }, { name: 'Marcelo', selected: false }]);
	});
	
	it("clear person item", function () {
		$scope.add('Anne');
		$scope.clear();
		$scope.people.should.be.deep.equal([]);
	});
	
	it("selected people", function () {
		$scope.add("Anne");
		$scope.add("Marcelo");
		
		$scope.people[0].selected = true;
		$scope.$apply();
		
		$scope.peopleSelected.should.be.deep.equal(["Anne"]);
	});
});