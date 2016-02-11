angular.module('intTemplatesApp')

.controller('ItemCtrl', function($scope, $location, $routeParams, mfly){


	var categoryName = $routeParams.categoryName;
	var categoryId   = $routeParams.categoryId;
	var name         = $routeParams.name;
	var itemId       = $routeParams.itemId;

	initItem(itemId);
	$scope.categoryName = categoryName;
	$scope.addonName = name;


	function initItem(itemId) {

		$scope.spinner = true;
		$scope.images  = false;

		mfly.getFolder(itemId).then(function(data) {
			$scope.slides = data;	
			$scope.spinner = false;
			$scope.images = true;
		});
	};

	$scope.goToTemplates = function() {
		
		var url = '/templates?id=' + categoryId + '&name=' + categoryName;		
	    $location.url(url);

	};

});