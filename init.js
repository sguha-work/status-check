var sc = require('./status-check');
var fs = require('fs');
sc.testLinkStatus('links.csv', function(data) {
	fs.writeFile('output.json', JSON.stringify(data) , function(){
		console.log("done");
	});
}, true)