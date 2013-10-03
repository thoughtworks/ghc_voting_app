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
};