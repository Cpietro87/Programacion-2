// ejercicio 1 crear una clase abstracta llamada Animal y dos clases hijas 
// llamadas Perro y Gato que extiendan la clase Animal. 
// Cada una de las clases hijas debe implementar el método hacerSonido() de forma diferente.
class Animal {
    sonido
    raza
    edad
    constructor(sonido:string, raza:string, edad:number){
        this.sonido= sonido
        this.raza = raza
        this.edad = edad
    }
    
    hacersonido(){
        return console.log(this.sonido)
    }
}
class Gato extends Animal{
    hacersonido(){
        return console.log(this.sonido)
    }    
}
class Perro extends Animal{
    hacersonido(){
        return console.log(this.sonido)
    }
}
let gato1= new Gato("miau", "Siames", 2)
let perro1= new Perro ("Guau", "Pastor Aleman", 1)
gato1.hacersonido()
perro1.hacersonido()