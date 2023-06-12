/* Dados 2 arreglos de números enteros de la misma
longitud, obtener un nuevo arreglo a partir de la suma de los
elementos de ambos arreglos en la misma posición, y mostrar el
arreglo resultante. Por ej.
=> [3, 4, 0, 3, 12, 2]
[2, 9, 0, 5, 22, 14]
[-1, 5, 0, 2, 10, 12] */

function sumarArreglos(arreglo1: number[], arreglo2: number[]): number[] {
    const resultado: number[] = [];
  
    if (arreglo1.length !== arreglo2.length) {
      throw new Error('Los arreglos deben tener la misma longitud');
    }
  
    for (let i = 0; i < arreglo1.length; i++) {
      const suma = arreglo1[i] + arreglo2[i];
      resultado.push(suma);
    }
  
    return resultado;
  }
  
  const arreglo1 = [3, 4, 0, 3, 12, 2];
  const arreglo2 = [2, 9, 0, 5, 22, 14];
  
  const resultado = sumarArreglos(arreglo1, arreglo2);
  console.log(resultado);
  
