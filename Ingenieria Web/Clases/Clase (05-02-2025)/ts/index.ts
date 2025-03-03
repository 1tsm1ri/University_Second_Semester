// let es para asignar variables 
let nombre:string="Hola";
const PI:number=3.14575;
console.log(nombre);


/* TIPOS DE DATOS TYPESCRIPT
- number
- string
- boolean
- any */

// Puede dar valores de string, boolean o number
let apellido:string|boolean|number;

let k=10;
console.log(k<10?"Soy menor":"Nonono");

if(k==10) {
    console.log("No se jijija");
} else {
    console.log("Mira soy" + "un texto");
}

// FUNCIONES
function nombreFuncion():number{
    return 3;
}




// EJERCICIOS
// Encontrar la suma de los 20 primeros numeros
function sumaPrimerosN(n:number):number{
    return n*(n+1)/2;
}
console.log(sumaPrimerosN(20));

// Encontrar si un numero es primo o no
function isPrime(n:number):boolean {
    if(n==1)return false;
    if(n==2)return true;
    for(let i=2; i*i<=n;i++){
        if(n%i==0)return false;  
    }
    return true;
}

// Dado 3 lados decir que tipo de triangulo es
let lado1, lado2, lado3:number;



