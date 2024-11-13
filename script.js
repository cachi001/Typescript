'use strict';
console.log('Hola mundo, mi primer programa en TS');
// Tipos de datos
// Declaración de variables con tipos de datos básicos (string, number, boolean, undefined y null)
let nombre = "Emiliano";
let edad = 21;
let esMayor = true;
let undefinedVar = undefined;
let nullVar = null;
// ANY
//No usar any
let disney;
disney = "Star wars y Marvel";
console.log(disney);
disney = 15000000;
console.log(disney);
disney = true;
console.log(disney);
// Arrays con tipos específicos (string, number y boolean)
// Definición de arreglos con tipos de datos específicos para cada elemento
const materias = ['Elementos de Investigacion Operativa', 'Programacion', 'Organizacion Empresarial'];
const edades = [18, 21, 22, 19, 16];
const resultado = [true, false, false, true];
// Enum
// Definición de enumeraciones para representar los días de la semana
var DiaSemana;
(function (DiaSemana) {
    DiaSemana[DiaSemana["Lunes"] = 0] = "Lunes";
    DiaSemana[DiaSemana["Martes"] = 1] = "Martes";
    DiaSemana[DiaSemana["Miercoles"] = 2] = "Miercoles";
    DiaSemana[DiaSemana["Jueves"] = 3] = "Jueves";
    DiaSemana[DiaSemana["Viernes"] = 4] = "Viernes";
})(DiaSemana || (DiaSemana = {}));
// Funciones con retorno
// Ejemplo de función que recibe dos números y devuelve la suma
function suma(a, b) {
    return a + b;
}
// Función sin retorno con distintos tipos de datos
// Una función que simula un partido de fútbol y evalúa si juega Messi
let interMiami = 11;
let fcDallas = 10;
let messi = 1;
let juegaMessi = true;
function jugar(equipo1, equipo2, juegaMessi) {
    let motivo = '';
    if (juegaMessi) {
        equipo1 += messi;
        motivo = '¡Porque juega Messi!';
    }
    if (equipo1 > equipo2)
        console.log(`Gana Inter Miami ${motivo}`);
    if (equipo1 == equipo2)
        console.log('Empate');
    if (equipo1 < equipo2)
        console.log('Gana FC Dallas');
}
jugar(interMiami, fcDallas, juegaMessi);
// Notación de objetos
// Definición del tipo 'Programador' y creación de objetos programador1 y programador2
let programador1 = {
    nombre: 'Emiliano',
    tecnologias: ['React', 'Angular', 'TS'],
    tomaMate: true
};
let programador2 = {
    nombre: 'Milagros',
    tecnologias: ['C#'],
    tomaMate: false
};
// Función que recibe un objeto de tipo Programador y muestra su nombre
function enviarCurriculum(programador) {
    console.log(`Este curriculum es de ${programador.nombre}`);
}
enviarCurriculum(programador1);
enviarCurriculum(programador2);
// Clases
// Definición de la clase 'Pelicula' que incluye propiedades y un método para proyectarla en el cine
class Pelicula {
    constructor(nombre, protagonista, genero) {
        this.nombre = nombre;
        this.protagonista = protagonista;
        this.genero = genero;
    }
    proyectarEnCine() {
        console.log(`La pelicula ${this.nombre} de género ${this.genero} protagonizada por ${this.protagonista} sera proyectada`);
    }
}
let pelicula = new Pelicula('Barbie', 'Margot Robbie', 'Comedia');
pelicula.proyectarEnCine();
// Encapsulamiento y genéricos
// Definición de la clase genérica 'Sorteo' que utiliza un tipo genérico T y contiene métodos para manejar un ticket
class Sorteo {
    constructor(nombre) {
        this.nombre = nombre;
    }
    setNumero(ticket) {
        this.ticket = ticket;
    }
    getNumero() {
        return this.ticket;
    }
    getNombre() {
        return this.nombre;
    }
    sortear() {
        return `Para ${this.nombre} el ticket es ${this.ticket}`;
    }
}
let sorteo = new Sorteo('Emiliano Caceres');
sorteo.setNumero(7);
console.log(sorteo.sortear());
