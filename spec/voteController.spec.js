describe("this is the subject of what you are testing", function() {
   it("should have some function X", function(){
		var scope = {};                       
		var resource = function(url) {
			return {
				query: function(callback) {
					callback([{idea: "First approach"}]);
				}
			};
		}
		var controller = VoteController(scope, resource);
		expect(scope.approaches.length).toBe(1); 
   }); 
});