function VoteController($scope, $resource, $window) {  
	var ApproachService = $resource("/approach", {}, {'update':   {method:'PUT'}});
	ApproachService.get(function(data) {
		$scope.approaches = data.approaches;  
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
	
	$scope.changeShown = function(min, max) {
		$scope.maxShown = _.isUndefined(max) ? max : $scope.approaches.length;
		$scope.minShown = min;
	}
};