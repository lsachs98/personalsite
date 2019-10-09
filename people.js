const axios = require('axios');


async function getPeople(){

  const { data } = await axios.get('https://gist.githubusercontent.com/robherley/5112d73f5c69a632ef3ae9b7b3073f78/raw/24a7e1453e65a26a8aa12cd0fb266ed9679816aa/people.json')
  return data; // this will be the array of people

}

const getPersonById = async function getPersonById(id){

	if(typeof id == 'undefined' || typeof id != 'number' || id <= 0)
		throw "ID out of bounds, please provide a valid ID"

	try{

		const data = await getPeople();

		if(id > Object.keys(data).length)
			throw "ID out of bounds, please provide a valid ID"

		var findPerson = id - 1;
		return(data[findPerson]);

	}catch(e){
        console.log (e);
    }


}

function compare(a, b){

	if(a.lastName > b.lastName)
		return 1;

	if(b.lastName > a.lastName)
		return -1;

	else
		return 0;


}

const lexIndex = async function lexIndex(index){

	if(typeof index == 'undefined' || typeof index != 'number' || index < 0)
		throw 'please enter a valid index'

	try{

		const data = await getPeople();

		if(Object.keys(data).length <= index)
			throw 'please entera  valid index'

		data.sort(compare);
		return data[index];

	}catch(e){
        console.log (e);
    }
}

const firstNameMetrics = async function firstNameMetrics(){

	const data = await getPeople();
	const vowels = "aeiouAEIOU";
	var totalLetters = 0;
	var totalVowels = 0;
	var totalConsonants = 0;
	var longestName = "";
	var shortestName = data[1].firstName;

	for(var i = 0; i < Object.keys(data).length; i++){

		var currName = data[i].firstName;
		totalLetters += currName.length;

		for(var j = 0; j < currName.length; j++){

			if(vowels.indexOf(currName[j]) >= 0)
				totalVowels++;

			else
				totalConsonants++;

		}

		if(currName.length >= longestName.length)
			longestName = currName;

		if(currName.length <= shortestName.length)
			shortestName = currName;

	}

	return {"total letters ": totalLetters, "total vowels ": totalVowels, "total consonants": totalConsonants, "longest name": longestName, "shortest name": shortestName}


}

module.exports={
	firstName: "LAUREN", 
    lastName: "SACHS", 
    studentId: "10411006",
    getPeople,
    getPersonById,
    lexIndex,
    firstNameMetrics
};
