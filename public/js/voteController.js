function VoteController($scope, $resource, $window) {  
	var ApproachService = $resource("/approach", {}, {'update':   {method:'PUT'}});
	ApproachService.get(function(data) {
		$scope.approaches = data.approaches; 
		var numOfPages = Math.ceil($scope.approaches.length/5);
		$scope.pages = _.range(1, numOfPages+1, 1);  
	}); 
	                     
	$scope.update = function(approach) {
		ApproachService.update(approach);
	};
	
	$scope.voteForIdea = function(approach){                 
		approach.votes++;  
		$scope.update(approach);
	}; 
	
	$scope.create = function(approach) {
		ApproachService.save(approach, function() {
			$window.location = "/";
		});
	}
	                           
	$scope.maxShown = 4;
	$scope.minShown = 0;
	$scope.shouldShow = function(index) {
		return index <= $scope.maxShown && index >= $scope.minShown;
	}                                 
	
	$scope.changeShown = function(pageNumber) {
		$scope.maxShown = (pageNumber-1)*5+4;
		$scope.minShown = (pageNumber-1)*5;
	}
};