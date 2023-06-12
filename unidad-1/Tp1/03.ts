/* Crear una función que calcule la nota final de una
materia. Recibe como parámetro un arreglo de números enteros
que representa la nota de cada TP, calcular y retornar el promedio
del alumno. */

function calcularNotaFinal(notasTP: number[]): number {
    if (notasTP.length === 0) {
      return 0; // Si no hay notas, el promedio es 0
    }
  
    const sumaNotas = notasTP.reduce((total, nota) => total + nota, 0);
    const promedio = sumaNotas / notasTP.length;
    return promedio;
  }

  const notasTP = [7, 8, 6, 9, 10]; 
const promedioFinal = calcularNotaFinal(notasTP);
console.log('El promedio final es:', promedioFinal);