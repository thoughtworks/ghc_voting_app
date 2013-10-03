describe("this is the subject of what you are testing", function() {
	var scope = {};                       
	var resource = function(url) {
		return {
			get: function(callback) {
				callback({"approaches": [{idea: "First approach"}, {idea: "Second approach"}]});
			},
			save: function() {
			    scope.success = true;
			}
		};
	}  
	
	beforeEach(function() {
		var controller = VoteController(scope, resource);  
	})

   it("should have some function X", function(){
		expect(scope.approaches.length).toBe(2); 
   });                                            

 	it("should increase vote count when you click on an idea", function(){    
        var approach = {"idea": "idea", "votes": 1};
		scope.voteForIdea(approach);
		expect(approach.votes).toBe(2);
		expect(scope.success).toBe(true);
	});
});