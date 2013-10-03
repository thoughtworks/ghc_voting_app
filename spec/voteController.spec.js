describe("this is the subject of what you are testing", function() {
	var scope = {};                       
	var approaches = [{idea: "First approach"}, {idea: "Second approach"}];
	var resource = function(url) {
		return {
			get: function(callback) {
				callback({"approaches": approaches});
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
		expect(scope.approaches).toBe(approaches);
   });                                            

 	it("should increase vote count when you click on an idea", function(){    
        var approach = {"idea": "idea", "votes": 1};
		scope.voteForIdea(approach);
		expect(approach.votes).toBe(2);
		expect(scope.success).toBe(true);
	});
	
	it("should increase vote count when you click on an idea", function(){    
        var approach = {"idea": "idea", "votes": 1};
		scope.voteForIdea(approach);
		expect(approach.votes).toBe(2);
		expect(scope.success).toBe(true);
	}); 	
});