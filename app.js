const people = require("./people");
const work = require("./work");
const weather = require("./weather");
const axios = require('axios');

async function main(){
    try{
        const peopledata = await people.getPeople();
        console.log (peopledata[0].id);
        try{const person = await people.getPersonById(43); // Returns: "Brew Peat"
        console.log(person);}
        catch(e){console.log(e);}
		try{const person2 = await people.getPersonById(-1); // Throws Error
		console.log(person2);}
		catch(e){console.log(e);}
		try{const person3 = await people.getPersonById(1000); // Throws Error
		console.log(person3);}
        catch(e){console.log(e);}
		try{ const person4 = await people.getPersonById(); // Throws Error
		console.log(person4);}
        catch(e){console.log(e);}
		const person5 = await people.lexIndex(2); // Returns: "Dermot Abberley"
		console.log(person5);
		try{const person6 = await people.lexIndex(-1); // Throws Error
		console.log(person6);}
        catch(e){console.log(e);}
		try{const person7 = await people.lexIndex(1000); // Throws Error
		console.log(person7);}
        catch(e){console.log(e);}
		try{const person8 = await people.lexIndex(); // Throws Error
		console.log(person8);}
        catch(e){console.log(e);}
		try{const output = await people.firstNameMetrics();
		console.log(output);}
        catch(e){console.log(e);}
		const work1 = await work.findTheHacker("79.222.167.180"); // Returns: "Robert Herley is the hacker!"
		console.log(work1);
		try{const work2 = work.findTheHacker("foobar"); // Throws Error
		console.log(work2);}
        catch(e){console.log(e);}
		try{const work3 =work.findTheHacker(); // Throws Error
		console.log(work3);}
        catch(e){console.log(e);}
		const work4 = await work.whereDoTheyWork("Demetra", "Durrand"); // Returns: "Demetra Durrand - Nuclear Power Engineer at Buzzshare. They will be fired."
		console.log(work4);
		const work5 = await work.whereDoTheyWork("Hank", "Tarling"); // Returns: "Hank Tarling - Technical Writer at Babbleblab. They will not be fired."
		console.log(work5);
		try{const work6 = work.whereDoTheyWork(); // Th;rows Error
		console.log(work6);}
        catch(e){console.log(e);}
		try{const work7 = work.whereDoTheyWork("Bob") // Throws Error
		console.log(work7);}
        catch(e){console.log(e);}
		try{const work8 = work.whereDoTheyWork("Bob", "Smith"); // Throws Error
     	console.log(work8);}
        catch(e){console.log(e);}
    	const weather1 = await weather.shouldTheyGoOutside("Scotty", "Barajaz"); // Returns "Yes, Scotty should go outside
    	console.log(weather1);		
    	const weather2 = await weather.shouldTheyGoOutside("Calli", "Ondrasek"); // Returns "No, Calli should not go outside."
    	console.log(weather2);
		try{const weather3 = await weather.shouldTheyGoOutside(); // Throws Error
		console.log(weather3);}
        catch(e){console.log(e);}
		try{const weather4 = await weather.shouldTheyGoOutside("Bob"); // Throws Error
		console.log(weather4);}
        catch(e){console.log(e);}
		try{const weather5 = await weather.shouldTheyGoOutside("Bob", "Smith") // Throws Error
		console.log(weather5);}
        catch(e){console.log(e);}
    }catch(e){
        console.log (e);
    }

}

//call main
main()