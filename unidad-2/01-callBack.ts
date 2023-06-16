function ejeCallback(callback: () => void){
    console.log("REnderizamos operacion asincronica");
    setTimeout(() => {
        console.log("Operacion asincrónica completada");
        callback(); // llamada al callback
    }, 5000);
}

ejeCallback(callbackEjemplo);
function callbackEjemplo(){
    console.log("Callback ejecutado!!");
}
