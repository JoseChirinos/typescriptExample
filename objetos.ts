//palabra reservada!!
class Persona  {
	//declaramos variables de clase
	name: string;
	last_name: string;
	//parametros optativos con '?'
	constructor(name?: string, last_name?: string){
		
		this.name 		= name;
		this.last_name 	= last_name;
		console.log(this.name, this.last_name);
	}

	//funcion con interpolation
	tuxSaluda():string{
		let tux ="";
		//multiline string	
		return `
 ______________
< Hola ${this.name} ${this.last_name} >
 --------------- 
        .--.
       |o_o |
       |:_/ |
      //   | |
     (|     | )
    /'|_   _/ |
    |___)=(___/
	    
	    `+" Te saluda tux!";
	}
	
}

//instanciar la clase

//let variable global

let myPersona      = new Persona();
let otraPersona  = new Persona("Benji", "Castillo")
console.log(otraPersona.tuxSaluda());