// Creacion de una clase
export class Player{
    constructor(
        public name:string,
        public age:number,
        public totalPoints:number,
        public throphies:number
    ) {
        this.name=name;
        this.age=age;
        this.throphies=throphies;
        this.totalPoints=totalPoints;
    }
}