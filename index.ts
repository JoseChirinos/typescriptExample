console.log("Hola mundo");

//variable primitiva
//string
var myName: string = "Benji Castillo";

//number:  enteros, flotantes;

var age: number = 22;
var height: number = 1.78;

// bool 

var developer:boolean = true;

//array

//array con tipo primitivo
//string array
var frameworks: Array<String> = ['Angular','AngularJS','NodeJs','React','Vue'];
//otra forma de typeo
var languages: string[] = ['JavaScript', 'java', 'Go', 'Dart'];
//number array
var ages: Array<Number> = [1,2,2.3,4];
//bool
var values: Array<boolean> = [false,true];

//Enumerables
//Sirven para definir roles o configuraciones
// y evitar el uso de constantes

enum Role {Empleado, Usuario, Developer}
console.log('Roles: ', Role[0], ',', Role[1], 'and', Role[2]);

//Funciones

//function que no retorna nada y recibe un parametro de 
//tipo string

function setName(name:string):void{
	this.myName = name;
}
console.log(this.myName);
setName("benji");
console.log(this.myName);

function setDay(day:string):string{
	return day;
}
setDay("monday");