function VoteController($scope, $resource) {  
	var ApproachService = $resource("/approach");
	ApproachService.get(function(data) {
		$scope.approaches = data.approaches;  
	}); 
	                     
	$scope.update = function(approach) {
		ApproachService.save(approach);
	}
	
	$scope.voteForIdea = function(approach){                 
		approach.votes++;  
		$scope.update(approach);
	};
};