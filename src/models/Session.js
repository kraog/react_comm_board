

var Session = {
	start:0,
	lifoPathStack: new Array(),
	startSession: function(){

		// Session start time
		this.start = (new Date()).getTime();

		// Session Board Id Stack
		this.lifoPathStack = new Array();
	},

	// returns the parent id poping it out of the stack
	getBackPathId: function() {
		return this.lifoPathStack.pop();
	},

	// returns the new parent id pushing it into the stack
	getIntoPathId: function(id) {
		this.lifoPathStack.push(id);
		return id;
	}

}

export default Session;