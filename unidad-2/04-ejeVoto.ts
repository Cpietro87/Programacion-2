
//Sistema de voto electrónico

class PartidoPolitico {
    nombre: string;

    constructor(nombre: string){
        this.nombre = nombre;
    }
}

class Candidato {
    nombre: string;
    partidoPolitico: PartidoPolitico;

    constructor(nombre: string , partidoPolitico: PartidoPolitico ){
        this.nombre = nombre;
        this.partidoPolitico = partidoPolitico;
    }
}

class Lista {
    candidato: Candidato[]

    constructor(candidato: Candidato[]){
        this.candidato = candidato
    }
}

class Votante {
    nombre: string;
    dni: number;
    constructor(nombre: string, dni: number){
        this.nombre = nombre
        this.dni = dni
    }
}

class Voto {
    votante: Votante;
    lista: Lista;
    constructor(votante: Votante, lista: Lista){
        this.votante = votante;
        this.lista = lista;
    }
}

const partidoPolitico1 = new PartidoPolitico('Partido Justicialista');
const partidoPolitico2 = new PartidoPolitico('Partido Democrata');

console.log(partidoPolitico1,partidoPolitico2)

const candidato1 = new Candidato('Candidato 1', partidoPolitico1);
const candidato2 = new Candidato('Candidato 2', partidoPolitico2);

console.log(candidato1,candidato2)

const lista1 = new Lista([candidato1]);
const lista2 = new Lista([candidato2]);

console.log(lista1,lista2)

const votante1 = new Votante('Votante 1', 12345678);
const votante2 = new Votante('Votante 2', 98765432);

console.log(votante1,votante2)

const voto1 = new Voto(votante1, lista1);
const voto2 = new Voto(votante2, lista2);
  
console.log(voto1,voto2)


