// Función asincrónica que devuelve una promesa después de un cierto tiempo
function esperar(ms: number): Promise<string> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('Tiempo de espera completado');
      }, ms);
    });
  }
  
  // Función asincrónica que utiliza la función esperar() con await
  async function ejecutar() {
    console.log('Iniciando');
    const resultado = await esperar(2000);
    console.log(resultado);
    console.log('Finalizando');
  }
  
  // Llamada a la función asincrónica
  ejecutar();