const axios = require('axios');

async function getPeople(){

  const { data } = await axios.get('https://gist.githubusercontent.com/robherley/5112d73f5c69a632ef3ae9b7b3073f78/raw/24a7e1453e65a26a8aa12cd0fb266ed9679816aa/people.json')
  return data; // this will be the array of people

}

async function getWork(){

  const { data } = await axios.get('https://gist.githubusercontent.com/robherley/61d560338443ba2a01cde3ad0cac6492/raw/8ea1be9d6adebd4bfd6cf4cc6b02ad8c5b1ca751/work.json')
  return data; // this will be the array of people

}

const whereDoTheyWork = async function whereDoTheyWork(firstName, lastName){

try{
	if(typeof firstName == 'undefined' || typeof lastName == 'undefined' || typeof firstName != 'string' || typeof lastName != 'string')
		throw 'please enter a valid first and last name'

	const peopleData = await getPeople();
	const workData = await getWork();

	var i = 0;

	while(i < Object.keys(peopleData).length && !(peopleData[i].firstName == firstName && peopleData[i].lastName == lastName))
			i++;

	if(i == Object.keys(peopleData).length)
		throw 'name is not in system'

	const ssn = peopleData[i].ssn;

	i = 0;

	while(i < Object.keys(workData).length && !(ssn == workData[i].ssn))
		i++

	var toReturn = firstName + " " + lastName + " - " + workData[i].jobTitle + " at " + workData[i].company;

	if(workData[i].willBeFired)
		toReturn += ". They will be fired."

	else
		toReturn += ". They will not be fired."

	return toReturn;

	}catch(e){
        console.log (e);
    }


}

const findTheHacker = async function findTheHacker(ip){

	try{

	if(typeof ip == 'undefined' || typeof ip != 'string')
		throw 'please enter a valid ip'

	const peopleData = await getPeople();
	const workData = await getWork();

	var i = 0;
	while(i < Object.keys(workData).length && !(ip == workData[i].ip))
		i++;

	if(i == Object.keys(workData).length)
		throw 'IP address not found'

	const ssn = workData[i].ssn;

	i = 0;
	while(i < Object.keys(peopleData).length && !(peopleData[i].ssn == ssn))
		i++

	if(i == Object.keys(peopleData).length)
		throw 'IP has no person linked'	

	return peopleData[i].firstName + " " + peopleData[i].lastName + " is the hacker!"

	}catch(e){
        console.log (e);
    }

}

module.exports={
	firstName: "LAUREN", 
    lastName: "SACHS", 
    studentId: "10411006",
    whereDoTheyWork,
    findTheHacker
};