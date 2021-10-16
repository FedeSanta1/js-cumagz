const climas = ["⚡", "🌞", "☔", "🌈"];
const objeto = [{
  id:23,
  name:"pedro",
  profession:"electrician"
},
{
  id:25,
  name:"juan",
  profession:"farmer"
},
]
// console.log(climas[0]);
// console.log(climas[1]);
// console.log(climas[2]);
// console.log(climas[3]);
for(let i=0;i<climas.length;i++){
  console.log(climas[i])
}


























let persona = function (nombre, edad) {
  this.nombre = nombre;
  this.edad = edad;
};

let empleado = function (nombre, edad, title, isJournalist) {
  persona.call(this, nombre, edad);
  this.title = title;
  this.isJournalist = isJournalist;
};

empleado.prototype = Object.create(persona.prototype);
empleado.prototype.constructor = empleado;

empleado.prototype.saludar = function () {
  if (this.isJournalist) {
    console.log("👋 Hola, soy " + this.nombre + ", y soy " + this.title);
  } else {
    console.log("👋Hola, soy " + this.nombre + " y soy un empleado del lugar");
  }
};

let juan = new empleado("Juan", 41, "Builder", false);

function mostrarClima() {
  console.log("||||||| Los climas son: ||||||||||");
  for (let i = 0; i < climas.length; i++) {
    console.log(climas[i]);
    console.log(i);
  }
  console.log("||||||| ||||||||||| ||||||||||");
}

climas.push("⛅");
//juan.saludar();
class Person {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }

  introduce() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old, I am a ${this.gender}`
    );
  }
}

//let john = new Person("John",30,"Male")
//john.introduce();
new Person("John",30,"Male")



class Autito{
  constructor(name,motor,model,color,doors,isWorking){
    this.name=name;
    this.motor=motor;
    this.model=model;
    this.color=color;
    this.door=doors;
    this.isWorking=isWorking;
  }

  turnOn(){
    if(this.isWorking){
      console.log("BRRRRR 🚗")
    }else{
      console.log("chuchuchu ");
    }
  }

  cargarNafta(){
    console.log("Cargando nafta...")
  }
}

let nombreDeAuto = prompt("Inserte nombre del auto")
let motor = prompt("Inserte Motor del auto")
let color = prompt("Inserte Color del auto")
let puertas = prompt("Inserte cantidad de puertas del auto")
let funciona = prompt("El auto esta en funcionamiento?")
if(funciona=="si"){
  funciona=true;
}else{
  funciona=false;
}

const autoPersonalizado = new Autito(nombreDeAuto,motor,2005,color,puertas,funciona);

console.log(`Este es un auto ${autoPersonalizado.name} del año ${autoPersonalizado.model}, tiene ${autoPersonalizado.puertas} puertas, su color es ${autoPersonalizado.color}`);
autoPersonalizado.turnOn();


console.log(climas);
