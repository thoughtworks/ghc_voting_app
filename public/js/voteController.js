function VoteController($scope, $resource) {  
	var ApproachService = $resource("/approach", {}, {'update':   {method:'PUT'}});
	ApproachService.get(function(data) {
		$scope.approaches = data.approaches;  
	}); 
	                     
	$scope.update = function(approach) {
		ApproachService.update(approach);
	}
	
	$scope.voteForIdea = function(approach){                 
		approach.votes++;  
		$scope.update(approach);
	};
};