angular.module('ghc13', ['ngResource', 'ui.select2'])
	.filter("showAsString", function() {
		return function(array) {
			return array.join(" , ");
		}
	}
);
