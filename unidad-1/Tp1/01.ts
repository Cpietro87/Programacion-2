/* Dado un arreglo de números determinar cuál es el
mayor y mostrarlo, si existe el número cero una o más veces en el
arreglo también mostrar “Hay un cero”, pero una sola vez. Por ej.
=> [3, 4, ​0​, 3, ​0​, 9, ​12​, 5]
12
“Hay un cero”
=> [4, -4, 10, 23, 3, 4, 12, ​50​]
50   */
let Arreglo: number[] = [3,24,3,18,9,12,5];
let mayor: number = 0;
let cero: number = 0;

for(let i in Arreglo)
    {
        if(mayor<Arreglo[i])
        {  
            mayor=Arreglo[i]
        }
        if(Arreglo[i]==0)
        {
            cero=1
        }
    }
console.log("el mayor es:")
console.log(mayor)
if(cero!=0)
{  
    console.log("Hay un cero")
}
else(cero==0)
{
    console.log("no hay ceros")
}

