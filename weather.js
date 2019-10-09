const axios = require('axios');

async function getPeople(){

  const { data } = await axios.get('https://gist.githubusercontent.com/robherley/5112d73f5c69a632ef3ae9b7b3073f78/raw/24a7e1453e65a26a8aa12cd0fb266ed9679816aa/people.json')
  return data; // this will be the array of people

}

async function getWeather(){

  const { data } = await axios.get('https://gist.githubusercontent.com/robherley/1b950dc4fbe9d5209de4a0be7d503801/raw/eee79bf85970b8b2b80771a66182aa488f1d7f29/weather.json')
  return data; // this will be the array of people

}


const shouldTheyGoOutside = async function shouldTheyGoOutside(firstName, lastName){

	if(typeof firstName == 'undefined' || typeof lastName == 'undefined' || typeof firstName != 'string' || typeof lastName != 'string')
		throw 'please enter a valid first and last name'

	try{

		const peopleData = await getPeople();
		const weatherData = await getWeather();
		var personObject;

		var i = 0;

		while(i < Object.keys(peopleData).length && !(peopleData[i].firstName == firstName && peopleData[i].lastName == lastName))
			i++;

		if(peopleData[i].firstName == firstName && peopleData[i].lastName == lastName){

				var zipcode = peopleData[i].zip;

				i = 0;

				while(i < Object.keys(weatherData).length && weatherData[i].zip != zipcode)
					i++;

				if(weatherData[i].zip != zipcode)
					throw 'zipcode is wonky and not in weather.json'

				if(weatherData[i].temp >= 34)
						return "Yes, " + firstName + " should go outside.";

				else
					return "No, " + firstName + " should not go outside.";



		}


		else
			throw 'person does not exist lol'


	}catch(e){
        console.log (e);
    }


}

module.exports={
	firstName: "LAUREN", 
    lastName: "SACHS", 
    studentId: "10411006",
    shouldTheyGoOutside
};