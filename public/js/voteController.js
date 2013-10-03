function VoteController($scope, $resource) {  
	var ApproachService = $resource("/approach", {}, {
		list: { method: 'GET'}
	});
	ApproachService.get(function(data) {
		$scope.approaches = data.approaches;  
	}); 
	
	$scope.voteForIdea = function(approach){                 
		approach.votes++;  
		ApproachService.save(approach);
	};
};