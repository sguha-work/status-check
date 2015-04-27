# status-check
 >This is a node-js program to check a list of URL's HTTP status. The program
can be used in both for SEO purpose and testing purpose and can be used from terminal
or from browser based application.

## Dependencies
This package got only one dependencies of "csv-array".

## Change Log
> Bug fix in detection of redirect

## Usage Guide
### Installing

The installation is just a command

```
 npm install status-check
```

After installing the package you can use the "testLinks" method as follows
```
 testLinks("CSV-file-name.csv",  callBack, showProgressInConsole)
   /*
      Where callBack is the method which have the output array of object as argument, and you can do 
      anything you like inside the function with the array

      "showProgressInConsole" is a configuration variable which holds "false" value 
      by default. If it is false or nothing then their will be nothing in console in the runtime of the program.
      If it is "true" then each checked url will be displayed in the console along with the status message.

      See example below.
   */
```
### Example
#### Note:
>The links will be checked just as it provided so if given link dosn't contain "http://"" it may be considered as broken link

test.csv file contains

```
	http://google.com/
	www.github.com
	https://www.npmjs.com
	www.npmjs.com
	npmjs.com 
```
```javascript
	var sc = require('status-check');
	sc.testLinks("test.csv", function(data) {
		console.log(JSON.stringify(data));
	}, true);
 /*
  the last argument true specifies that the progress will be displayed in console
 */
``` 

Output
```json
[  
   {  
      "url":"http://google.com/",
      "statusCode":200,
      "description":"Success"
   },
   {  
      "url":"npmjs.com",
      "statusCode":"XXX",
      "description":"Invalid URL"
   },
   {  
      "url":"www.github.com",
      "statusCode":"XXX",
      "description":"Invalid URL"
   },
   {  
      "url":"https://www.npmjs.com",
      "statusCode":200,
      "description":"Success"
   },
   {  
      "url":"www.npmjs.com",
      "statusCode":"XXX",
      "description":"Invalid URL"
   }
]
```



