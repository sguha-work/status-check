var tl = require('./test-link-status');
var fs = require('fs')
tl.testLinkStatus("links.csv", function(data) {
	fs.writeFile("output.json", JSON.stringify(data), function(){console.log("done")});
});