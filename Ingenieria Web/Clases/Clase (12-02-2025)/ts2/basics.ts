console.log('Un texto super creativo aca');
let nombre:string="Soy un string";
let edad:number=254;
let unBoolean:boolean=false;
let vector:number[]=[3,43,32];
vector.push(2);
console.log(vector);

/* 
if (condition) {} else {}
for (inicial, condicion, paso)
while(condition){}
*/

if (edad<=18) {
    console.log("Tomar tetero");
} else {
    console.log("A mamitas puebla");
}

for (let i=0; i<10; i++){
    console.log(i*i);
}

let m=1;
while (m!=1) {
    console.log("Bloquear el pc jijija");
}

function isPrime (n:number):boolean {
    if (n==1) return false;
    if (n==2) return true;
    for (let i=2; i*i<n; i++) {
        if (n%i==0) return false;
    }
    return true;
}



