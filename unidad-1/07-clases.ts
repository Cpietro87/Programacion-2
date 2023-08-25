class Auto {
    // atributo
    marca: string;
    constructor(marca) {
        this.marca = marca;
    }
    // metodo
    arrancar() {
        return `Arrancando auto ${this.marca}`;
    }
};

const a1 = new Auto("Peugeot");

console.info(a1.arrancar());