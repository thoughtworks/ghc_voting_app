function VoteController($scope, $resource) {  
	var ApproachResouce = $resource("/approach/list");
	ApproachResouce.query(function(data) {
		$scope.approaches = data; 
	});                           
};