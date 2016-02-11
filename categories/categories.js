angular.module('intTemplatesApp')

.controller('CategoriesCtrl', function($scope, $location, mfly){
    
    mfly.search('@Categories').then(function(data){
    	
    	for (var i = 0; i < data.length; i++) {

    		$scope.categories = data;
    		
	    	$scope.openFolder = function(id, name) {
	    		
	    		var url = '/templates?id=' + id + '&name=' + name;
                console.log(url);
	    		
	    		$location.url(url);
	    	}

    	};

    });

    $scope.previousItem = function() {
        mflyCommands.previous();
    }

    $scope.nextItem = function() {
        mflyCommands.next();
    }

});