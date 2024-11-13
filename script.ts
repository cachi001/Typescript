'use strict'

console.log('Hola mundo, mi primer programa en TS')

// Tipos de datos
// Declaración de variables con tipos de datos básicos (string, number, boolean, undefined y null)
let nombre: string = "Emiliano";
let edad: number = 21;
let esMayor: boolean = true;
let undefinedVar: undefined = undefined;
let nullVar: null = null;

// ANY
//No usar any
let disney: any;
disney = "Star wars y Marvel"
console.log(disney)

disney = 15000000
console.log(disney)

disney = true

console.log(disney)

// Arrays con tipos específicos (string, number y boolean)
// Definición de arreglos con tipos de datos específicos para cada elemento
const materias: string[] = ['Elementos de Investigacion Operativa', 'Programacion', 'Organizacion Empresarial'];
const edades: number[] = [18, 21, 22, 19, 16];
const resultado: boolean[] = [true, false, false, true];

// Enum
// Definición de enumeraciones para representar los días de la semana
enum DiaSemana {
    Lunes,
    Martes,
    Miercoles,
    Jueves,
    Viernes
}

// Funciones con retorno
// Ejemplo de función que recibe dos números y devuelve la suma
function suma(a: number, b: number): number {
    return a + b;
}

// Función sin retorno con distintos tipos de datos
// Una función que simula un partido de fútbol y evalúa si juega Messi
let interMiami = 11;
let fcDallas = 10;
let messi = 1;
let juegaMessi = true;

function jugar(equipo1: number, equipo2: number, juegaMessi: boolean) {
    let motivo: string = '';
    if (juegaMessi) {
        equipo1 += messi;
        motivo = '¡Porque juega Messi!';
    }
    if (equipo1 > equipo2) console.log(`Gana Inter Miami ${motivo}`);
    if (equipo1 == equipo2) console.log('Empate');
    if (equipo1 < equipo2) console.log('Gana FC Dallas');
}
jugar(interMiami, fcDallas, juegaMessi);


//Type
type Programador = {
    nombre: string,
    tecnologias: string[],
    tomaMate?: boolean | null,
};

//Interface
interface ProgramadorInter{
    nombre: string,
    tecnologias: string[],
    tomaMate?: boolean | null

}

// Notación de objetos
// Definición del tipo 'Programador' y creación de objetos programador1 y programador2
let programador1: Programador = {
    nombre: 'Emiliano',
    tecnologias: ['React', 'Angular', 'TS'],
    tomaMate: true
};

let programador2: Programador = {
    nombre: 'Milagros',
    tecnologias: ['C#'],
    tomaMate: false
};

// Función que recibe un objeto de tipo Programador y muestra su nombre
function enviarCurriculum(programador: Programador) {
    console.log(`Este curriculum es de ${programador.nombre}`);
}

enviarCurriculum(programador1);
enviarCurriculum(programador2);

// Clases
// Definición de la clase 'Pelicula' que incluye propiedades y un método para proyectarla en el cine
class Pelicula {
    private nombre?: string;
    private protagonista?: string;
    private genero?: string;

    constructor(nombre: string, protagonista: string, genero: string) {
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
class Sorteo<T> {
    private ticket?: T;

    constructor(private nombre: string) {}

    setNumero(ticket: T) {
        this.ticket = ticket;
    }

    getNumero() {
        return this.ticket;
    }

    getNombre() {
        return this.nombre;
    }

    public sortear(): string {
        return `Para ${this.nombre} el ticket es ${this.ticket}`;
    }
}

let sorteo = new Sorteo<number>('Emiliano Caceres');
sorteo.setNumero(7);
console.log(sorteo.sortear());
