export class Dwarf {
    private name: string;
    private id: number;
    constructor (public height: number, public weight: number, public job: string, public age: number, name: string, id: number
    ) {
        console.log('Dwarf constructor');
        this,height = height;
        this.name = name;
        this.id = id;
        this.weight = weight;
        this.job = job;
        this.age = age;
    }
    public chambear(): void {
        console.log('Dwarf chambear');
        console.log('Muy chambeador');
        
        
    }
}