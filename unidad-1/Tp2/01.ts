/* Crear una clase de Auto con los atributos (marca, modelo, potencia, max. velocidad)
    • Crear 5 autos en un array
    • Iterar el array y mostrar los autos por pantalla
    • Iteramos los autos y calculamos con un método (calcular tiempo) cuanto tarda en forma óptima en recorrer x kms */
    class Auto {
        marca: string;
        modelo: string;
        potencia: number;
        maxVelocidad: number;
      
        constructor(marca: string, modelo: string, potencia: number, maxVelocidad: number) {
          this.marca = marca;
          this.modelo = modelo;
          this.potencia = potencia;
          this.maxVelocidad = maxVelocidad;
        }

        calcularTiempo(distancia: number, velocidad: number){

            const velocidadOptima = velocidad/100 * this.maxVelocidad;
            const tiempo = distancia / velocidadOptima;
            return tiempo;
        }

        mostrar(auto){
            console.log(auto)
        }
    }

    const autos: Auto[] = []

    const a1 = new Auto('Fiat', '600',63, 110)
    const a2 = new Auto('Fiat', '500',500, 310)


    autos.push(a1,a2);

    autos.forEach((auto) => {
        console.log(`Marca: ${auto.marca}, Modelo: ${auto.modelo}, Potencia: ${auto.potencia}, Velocidad Máxima: ${auto.maxVelocidad}`);
      });

      for (const auto of autos) {
        console.log("Marca: " + auto.marca);
        console.log("Modelo: " + auto.modelo);
        console.log("Potencia: " + auto.potencia + " HP");
        console.log("Velocidad máxima: " + auto.maxVelocidad + " km/h");
        console.log("------------------------------");
      }
    
    console.log(autos)




    
    