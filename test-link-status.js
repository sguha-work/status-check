module.exports = {
	testLinkStatus : function(fileName, callBack) {
		var presentObject = this;
		var csv = require('csv-array');
		csv.parseCSV("links.csv", function(data) {
			presentObject.startCheckingLink(data, callBack);
		});
	},

	startCheckingLink : function(linksArray, callBack) {
		var presentObject = this;
		presentObject.checkSingleLink(linksArray,0, callBack,[]);
	},

	checkSingleLink : function(linksArray, index, callBack, outputArray) {
		var presentObject = this;
		
		var phantom = require('phantom');
		phantom.create(function (ph) {
		ph.createPage(function (page) {
		    page.open(linksArray[index]);
		    page.onLoadFinished = function(resource) {
		    	var status = page.evaluate(function() {
				return document.body.innerHTML;
				});
		    	console.log("Url: "+linksArray[index]+' Status: '+status);
		      	var tempObject = {};
			    tempObject["url"] = linksArray[index];
			    tempObject["status"] = status;
			    outputArray.push(tempObject);
			    index += 1;
			    if(typeof linksArray[index] == "undefined") {
			    	callBack(outputArray);
			    } else {
			    	presentObject.checkSingleLink(linksArray, index, callBack, outputArray);
			    }	  
		    };
		  });
		}, {
			dnodeOpts: {
			   weak: false
			}	
		});


		// var page = require('webpage').create();
		// page.open(linksArray[index]);
		// page.onResourceReceived = function(resource) {
		//     console.log('Url: ' + resource.url + 'Code: '+resource.status);
		//     var tempObject = {};
		//     tempObject["url"] = linksArray[index];
		//     tempObject["status"] = resource.status;
		//     outputArray.push(tempObject);
		//     index += 1;
		//     if(typeof linksArray[index] == "undefined") {
		//     	callBack(outputArray);
		//     } else {
		//     	presentObject.checkSingleLink(linksArray, index, callBack, outputArray);
		//     }
		// }
	}

}

/*
var phantom = require('phantom');

phantom.create(function (ph) {
  ph.createPage(function (page) {
    page.open("http://www.google.com", function (status) {
      console.log("opened google? ", status);
      page.evaluate(function () { return document.title; }, function (result) {
        console.log('Page title is ' + result);
        ph.exit();
      });
    });
  });
});


*/

