//interfaces 

interface Person{
	name: string;
	last_name: string;
	age?: number;
}


let persona:Person = {
	name		: "Benji",
	last_name	:"Castillo",
	age			:22
}

let otraPerson:Person = {
	name 		:"Gary",
	last_name	:"Guzman"
}  

console.log(persona);

console.log(otraPerson);