/**
 * @author
 */

/* The purpose of this program is to create a list of cookies 
		 * with specific properties, and from that list create two new lists, 
		 * one of my favorites and one of the rest.
		 */
			var myCookies = [{
				"name" : "Oreo",
				"shape" : "round:"
			}, {
				"name" : "Chips Ahoy",
				"shape" : "round"
			}, {
				"name" : "Lorna Doone",
				"shape" : "square"
			}, {
				"name" : "Fig Newton",
				"shape" : "square"
			}];
			console.log(myCookies);

			// these are the lists I will sort my cookies into
		
			var myFaves = []
			var theRest = []
			
			/* For every cookie in my list, check its shaope. If it's round, add to faves; otherwise add to rest.
			 */
			
			for(var i=0; i<myCookies.length; i++) {
			//console.log(i);
			var currentCookie = myCookies[i];
			
			//console.log(currentCookie)
			if(currentCookie.shape ==  "square"){
			
			
			console.log(currentCookie);
			//because shape is square, add the currentCookie to my faves list.
			myFaves.push(currentCookie);
		}else{
			//otherwise, add the currentCookie to theRest list.
			theRest.push(currentCookie);
			
			}// this is the end of my if/else statement
				
			}// this is the end of my for loop
			
			console.log("finished list");
			console.log(myFaves);
			console.log(theRest);	
				
		