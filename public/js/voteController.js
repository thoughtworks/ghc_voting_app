function VoteController($scope, $resource, $window) {                      
	$scope.update = function(approach) {
		ApproachService.update(approach);
	};
	
	$scope.voteForIdea = function(approach){                 
		approach.votes++;  
		$scope.update(approach);
	}; 
	
	$scope.create = function(approach) {
		$scope.splitTags();
		ApproachService.save(approach, function() {
			$window.location = "/";
		});
	}

	$scope.shouldShow = function(index) {
		return index <= $scope.maxShown && index >= $scope.minShown;
	}                                 
	
	$scope.changeShown = function(pageNumber) { 
		$scope.currentPage = pageNumber;
		$scope.maxShown = (pageNumber-1)*5+4;
		$scope.minShown = (pageNumber-1)*5;
	}  
	
	$scope.splitTags = function() {
		if(!$scope.approach.tags) return;
		$scope.approach.tags = $scope.approach.tags.split(",");
	}
	
	var ApproachService = $resource("/approach", {}, {'update':   {method:'PUT'}});
	ApproachService.get(function(data) {
		$scope.approaches = data.approaches; 
		var numOfPages = Math.ceil($scope.approaches.length/5);
		$scope.pages = _.range(1, numOfPages+1, 1);   
		$scope.changeShown(1);
	});
};