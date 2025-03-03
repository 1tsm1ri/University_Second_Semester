import { Estudiante } from './Estudiante.interface';

let estudiante: Estudiante = {
    id: 1,
    nombre: 'Juan',
    edad: 20
};

console.log(estudiante);
estudiante.id=2;
estudiante.nombre='Pedro';
estudiante.edad=25;
console.log(estudiante);

// Creacion vector estudiantes
let estudiantes: Estudiante[] = [
    { // Posicion cero
        id: 1,
        nombre: 'Juan',
        edad: 20
    },
    {
        id: 2,
        nombre: 'Ana',
        edad: 21
    },
    {
        id: 3,
        nombre: 'Luis',
        edad: 19
    },
    {
        id: 4,
        nombre: 'Maria',
        edad: 23
    }
]
console.log(estudiantes[0].nombre);

// Mostrar estudiantes que tengan mas de 22 años 
estudiantes.filter(estudiante => estudiante.edad)
.forEach(estudiante => console.log(estudiante.nombre));
// Estudiante con id 3
console.log(estudiantes.find(estudiante => estudiante.id == 3));
// 
console.log(estudiantes.map(estudiante => {estudiante.edad+=1; return estudiante})); 
// Obtener las variables por apartes (desestructurar)
const {id, nombre, edad} = estudiante;
console.log(id, nombre, edad);





