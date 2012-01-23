// Author: Lyndon H Modomo
// Created for: SDI-O Online Course (SDI-O 1201) : Project 4 / Deliverable 4
// Created on: 01/20/12

/* Comment:  

*/

// Define & set Global variables for this JS file
var	temp
;

var validationLibrary = {
		
		//Does the argument follow the 111-222-3333 pattern
		phoneNumberCheck: function (phoneNum) {
			var phoneNumberPattern = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;		
				
			return phoneNumberPattern.test(phoneNum);
		}, //end phoneNumberCheck function

		
		//Does the argument follow a valid email address pattern aaa@bbb.ccc
		emailCheck: function (emailAddr) {
			var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
				
			return emailPattern.test(emailAddr);
		}, //end emailCheck function

		
		//Does the argument follow a valid url address.  Does it start with http: or https:
		urlCheck: function (urlAddr) {
			// var urlPattern = /^(((http|https):\/\/)?([[a-zA-Z0-9]\-\.])+(\.)([[a-zA-Z0-9]]){2,4}([[a-zA-Z0-9]\/+=%&_\.~?\-]*))*$/;
			// var urlPattern = /^((http|https)(:\/\/))?([a-zA-Z0-9]+[.]{1}){2}[a-zA-z0-9]+(\/{1}[a-zA-Z0-9]+)*\/?/;
			var urlPattern = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
			
			return urlPattern.test(urlAddr);
		}, //end urlCheck function


		//Modify the string to match Title/Proper case (CAP the first char of each word)
		toProperCaseMod: function (string) {
			var stringArray = string.split(" "),   //Separate the string into an array of substr
			 	results = []
			;
			
			for (var i=0; i < stringArray.length; i++) {
				var letter = stringArray[i].charAt(0).toUpperCase();
			      
					results.push(letter + stringArray[i].slice(1));
			}
			  
			return (results.join (" "));
		}, //end toProperCase function

	
		//Change a string that is a list of things separated by a given string.  
		//	Return a string with the first separator changed to the second.
		changeSeparatorMod: function (string, separator1, separator2) {
			var stringArray = string.split(separator1),
				results = []
			;
			
			for (var i=0; i < stringArray.length; i++) {
				results.push(stringArray[i]);
			}	
			
			return (results.join (separator2));	
		}, //end changeSeparator function


		//Format a number to use a specific number of decimal places
		//??? DO WE USE 2 Arguments for this?????
		numDecimalMod: function (decNum, decPlaces) {
			var numAsString = decNum.toString(),
				decimalLoc = (numAsString.indexOf(".") + 1),
				currentDecPlace = (numAsString.length - (decPlace + 1))
			; 
			
			console.log (decimalLoc);
			console.log (numAsString.length);
			console.log (currentDecPlace);
			console.log ("The number argument is " + decNum + " and the number of decimal places passed as an argument is " + decPlaces + ".");
			
			if (currentDecPlace === decPlaces) {  //check to see if the current Decimal location is exactly the same as the decPlaces argument (# of decimal places desired to display)
				console.log ("The number passed " + decNum + " has the exact number of decimal places.  So nothing needs to be done.");
				return (decNum);
			
			} else if ((decimalLoc <= decPlaces) || (decimalLoc === -1) {  //if the current decimal location is less the decPlaces argument (# of decimal places desired to display)
				while (decimalLoc <= decPlaces) {
					if (decimalLoc === (numAsString.length)) {
						numAsString = numAsString + ".0";
					
					} else {
						numAsString = numAsString + "0";
					}
					
			} 
			// return (decNum);
		}, //end numDecimalMod function
		
		
		//Fuzzy-match a number: is the num above or below a number w/in a certain percent.
		fuzzyNum: function (num) {
			//TODO: code here
		}, //end fuzzyNum function

		
		//Find the number of hours or days difference between two dates
		dateDiff: function (date1, date2) {
			//TODO: code here
		}, //end dateDiff function
		
		
		//Given a string version of a number "42", return the value as an actual number 42.
		stringToNum: function (num) {
			//TODO: code here
		}, //end stringToNum function
		
		
		//Find the smallest value in an array that is greater than a given number
		smallNum: function (array, num) {
			//TODO: code here
		}, //end smallNum function
		
		
		//Find the total value of just the numbers in an array, even if some items are not numbers
		totalVal: function (num) {
			//TODO: code here
		}, //end totalVal function
		
		
		//Given an array of OBJECTS and the name of a key, return the array sorted by the value of that key is each object
		arraySort: function (array, key) {
			//TODO: code here
		}, //end arraySort function
		
};
  
// MAIN BODY	
console.log(validationLibrary.phoneNumberCheck ("4072303665"));

console.log(validationLibrary.emailCheck ("lmodomo@fullsail.com"));

console.log(validationLibrary.urlCheck ("http://www.fullsail.com"));

temp = validationLibrary.toProperCaseMod ("this is a test string");
console.log (temp);


temp = validationLibrary.changeSeparatorMod ("axxbxxc", "xx", "++");
console.log (temp);

temp1 = validationLibrary.numDecimalMod (200.1, 1);
console.log (temp1);