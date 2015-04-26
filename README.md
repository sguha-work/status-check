# status-check
 >This is a node-js program to check a list of URL's HTTP status. The program
can be used in both for SEO purpose and testing purpose and can be used from terminal
or from browser based application.

## Dependencies
This package got only one dependencies of "csv-array".

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

test.csv file contains

```
 
```
```javascript
 var csv = require('csv-array');
 csv.parseCSV("test.csv", function(data){
   console.log(JSON.stringify(data));
 });
``` 

Output
```json
[  
   {  
      "Question Statement":"this is a test question answer it?",
      "Option 1":"answer 1",
      "Option 2":"answer 2",
      "Option 3":"answer3",
      "Option 4":"answer 4",
      "Option 5":"",
      "Answer":"answer 2",
      "Deficulty":"3",
      "Category":"test"
   },
   {  
      "Question Statement":"this is another test question answer it?",
      "Option 1":"answer1,answer2",
      "Option 2":"answer2,answer3",
      "Option 3":"answer4,answer5",
      "Option 4":"answer5,answer6",
      "Option 5":"answer7,answer8",
      "Answer":"answer1,answer2",
      "Deficulty":"2",
      "Category":"test"
   }
]
```

```javascript
 var csv = require('csv-array');
 csv.parseCSV("test.csv", function(data){
   console.log(JSON.stringify(data));
 }, false);
```
Output
```json
[  
   [  
      "Question Statement",
      "Option 1",
      "Option 2",
      "Option 3",
      "Option 4",
      "Option 5",
      "Answer",
      "Deficulty",
      "Category"
   ],
   [  
      "this is a test question answer it?",
      "answer 1",
      "answer 2",
      "answer3",
      "answer 4",
      "",
      "answer 2",
      "3",
      "test"
   ],
   [  
      "this is another test question answer it?",
      "answer1,answer2",
      "answer2,answer3",
      "answer4,answer5",
      "answer5,answer6",
      "answer7,answer8",
      "answer1,answer2",
      "2",
      "test"
   ]
]
``` 

```javascript
 var csv = require('csv-array');
 csv.parseCSV("test.csv", function(data){
   console.log(JSON.stringify(data));
 }, true);
 /*
   The output will be as same as
   var csv = require('csv-array');
    csv.parseCSV("test.csv", function(data){
      console.log(JSON.stringify(data));
    });
 */
``` 
Output
```json
[  
   {  
      "Question Statement":"this is a test question answer it?",
      "Option 1":"answer 1",
      "Option 2":"answer 2",
      "Option 3":"answer3",
      "Option 4":"answer 4",
      "Option 5":"",
      "Answer":"answer 2",
      "Deficulty":"3",
      "Category":"test"
   },
   {  
      "Question Statement":"this is another test question answer it?",
      "Option 1":"answer1,answer2",
      "Option 2":"answer2,answer3",
      "Option 3":"answer4,answer5",
      "Option 4":"answer5,answer6",
      "Option 5":"answer7,answer8",
      "Answer":"answer1,answer2",
      "Deficulty":"2",
      "Category":"test"
   }
]
```

