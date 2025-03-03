let vector:number[]=[3, 4, 13, 43, 43];
vector.push(4);
vector.push(100);

// 
vector.filter(i=>i%2==0)
.forEach(i=>console.log(i));

//Suma de todos los vectores
const suma=vector.reduce((acumulador,actual)=>acumulador+actual,0);
console.log(suma);

// potencia del vector
let vector2=vector.map(i=>i*i);
console.log(vector2);

