angular.module('intTemplatesApp')

.controller('TemplatesCtrl', function($scope, $location, $routeParams, mfly){

	var categoryName = $routeParams.name;
	var categoryId = $routeParams.id;

	$scope.category = categoryName;

	mfly.getFolder($routeParams.id).then(function(data){
		for (var i = 0; i < data.length; i++) {
			$scope.addons = data;
		}
	});

	$scope.openItem = function(id, addonName) {
		$location.url('/item?itemId=' + id + '&categoryId=' + categoryId + '&categoryName=' + categoryName + '&name=' + addonName);
	};


    $scope.previousItem = function() {
        mflyCommands.previous();
    }

    $scope.nextItem = function() {
        mflyCommands.next();
    }

});