module.exports = {
	testLinkStatus : function(fileName, callBack, showProgressInConsole) {
		if(typeof showProgressInConsole == "undefined") {
			showProgressInConsole = false;
		}
		var presentObject = this;
		var csv = require('csv-array');
		csv.parseCSV("links.csv", function(data) {
			presentObject.startCheckingLink(data, callBack, showProgressInConsole);
		}, false);
	},

	startCheckingLink : function(linksArray, callBack, showProgressInConsole) {
		var presentObject = this;
		presentObject.checkSingleLink(linksArray,0, callBack,[], showProgressInConsole);
	},

	checkSingleLink : function(linksArray, index, callBack, outputArray, showProgressInConsole) {
		var presentObject = this;
		var http = require('http');
		var https = require('https');
		var method = https;
		if(linksArray[index].indexOf('https')==-1) {
			method = http;
		}
		method.get(linksArray[index], function(response) {
		 	var outputObject = {};
			outputObject["url"] = linksArray[index];
			outputObject["statusCode"] = ((typeof response != "undefined")?response.statusCode:"XXX");
			outputObject["description"] = ((typeof response != "undefined")?presentObject.getStatusDescription(response.statusCode):"Invalid URL");
			outputArray.push(outputObject);
			if(showProgressInConsole) {
				console.log(" Checked:: "+outputObject["url"]+" Status:: "+outputObject["statusCode"]+" Description:: "+ outputObject["description"]);
			}
			index+=1;
			if(index>=linksArray.length) {
				callBack(outputArray);
			} else {
				presentObject.checkSingleLink(linksArray, index, callBack, outputArray, showProgressInConsole);
			}
		})
	},

	getStatusDescription : function(statusCode) {
		switch(statusCode) {
			case 100 :
				return "Continue";
			case 101 :
				return "Switching Protocols";
			case 200 :
				return "Success";
			case 201 :
				return "Created";
			case 202 :
				return "Accepted";
			case 203 :
				return "Non-Authoritative Information";
			case 204 :
				return "No Content";
			case 205 :
				return "Reset Content";
			case 206 :
				return "Partial Content";
			case 300 :
				return "Multiple Choices";
			case 301 :
				return "Moved Permanently";
			case 302 :
				return "Found";
			case 303 :
				return "See Other";
			case 304 :
				return "Not Modified";
			case 305 :
				return "Use Proxy";
			case 306 :
				return "Unused";
			case 307 :
				return "Temporary Redirect";
			case 400 :
				return "Bad Request";
			case 401 :
				return "Unauthorized";
			case 402 :
				return "Payment Required";
			case 403 :
				return "Forbidden";
			case 404 :
				return "Not Found";
			case 405 :
				return "Method Not Allowed";
			case 406 :
				return "Not Acceptable";
			case 407 :
				return "Proxy Authentication Required";
			case 408 :
				return "Request Timeout";
			case 409 :
				return "Conflict";
			case 410 :
				return "Gone";
			case 411 :
				return "Length Required";
			case 412 :
				return "Precondition Failed";
			case 414 :
				return "Request-URI Too Long";
			case 415 :
				return "Unsupported Media Type";
			case 416 :
				return "Requested Range Not Satisfiable";
			case 417 :
				return "Expectation Failed";
			case 500 :
				return "Internal Server Error";
			case 501 :
				return "Not Implemented";
			case 502 :
				return "Bad Gateway";
			case 503 :
				return "Service Unavailable";									
			case 504 :
				return "Gateway Timeout";
			case 505 :
				return "HTTP Version Not Supported";	
		}
	}

};
