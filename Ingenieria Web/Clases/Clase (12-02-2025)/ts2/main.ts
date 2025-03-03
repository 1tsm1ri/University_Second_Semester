import {Mediano, Hero, heroes} from "./objetos";
import {Player} from "./Players"

let jp:Mediano={
    id:13,
    tatuajes: 2,
    nombre: 'Juan Pablo',
    estatura: 1.87,
    novia:'Ximena'
}

// Desestructuracion
const {nombre, estatura}=jp;
console.log(nombre, estatura);

// Cambiar un valor 
jp.estatura=1.9;
jp.tatuajes=14;
jp.novia='Daniela';


//Creacion de vectores
let objeto:Mediano[]=[
    {id:2,
        tatuajes: 0,
        nombre: 'Mariana',
        estatura: 1.50
    },
    {id:3,
        tatuajes:5,
        nombre:'Basti',
        estatura:1.71
    }
]

console.log(objeto);




/* Organizar los herios de mayor a menor poder
Si el poder es igual, mirar el poder magico */
console.log(heroes); 
// sort organiza dependiendo de una caracteristica (iterar)
function powerA(a:Hero, b:Hero):number{
    if(a.power==b.power) {
        return b.magicPower-a.magicPower;
    }
    return b.power-a.power;
}

heroes.sort((a,b)=>powerA(a,b))
.forEach(a =>console.log(a));

heroes.map(a=>{
    a.habilities.push("Joder Porfe");
}).forEach(a=>console.log(a));

// filter
let heroesMayor90=
heroes.filter(a=>a.power>90);
console.log(heroesMayor90);

// Devuelve el primer dato que cumpla la condicion
console.log(heroes.find(a=>a.id==10));



let luka:Player=new Player (
    "Lukita Doncic", 25, 11110, 0
);
console.log(luka);
