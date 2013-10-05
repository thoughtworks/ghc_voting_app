describe("this is the subject of what you are testing", function() {
	var scope = {};                                                                                           
	var tags = ["thoughtworks", "ghc13"];
	var approaches = [{idea: "First approach", votes: 1, tags: []}, {idea: "Second approach", votes: 3, tags: tags }];
	var resource = function(url) {
		return {
			get: function(callback) {
				callback({"approaches": approaches});
			},
			update: function() {
			    scope.success = true;
			}, 
			save: function() {
				scope.saved = true;
			}
		};
	}  
	
	beforeEach(function() {
		var controller = VoteController(scope, resource);  
	})

   it("should have some function X", function(){
		expect(scope.approaches.length).toBe(2); 
		expect(scope.approaches).toBe(approaches);
		approach = _.find(scope.approaches, function(item) { return item.votes === 3})
		expect(approach.tags).toBe(tags);
   });        

	
	it("should increase vote count when you click on an idea", function(){    
        var approach = {"idea": "idea", "votes": 1};
		scope.voteForIdea(approach);
		expect(approach.votes).toBe(2);
		expect(scope.success).toBe(true);
	}); 
	
    it("should increase vote count when you click on an idea when updating", function(){    
        var approach = {"idea": "idea", "votes": 1};
		scope.create(approach);
		expect(scope.saved).toBe(true);
	});	    
	
	it("should change the min and max based on the page", function() {
		scope.changeShown(2); 
		expect(scope.currentPage).toBe(2)         
		expect(scope.minShown).toBe(5);
		expect(scope.maxShown).toBe(9);
	});
	
	it("should generate the pages based on the number of approaches", function() {
		expect(scope.pages.length).toBe(1);
	})	                            
});