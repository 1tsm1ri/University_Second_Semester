import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('dishes')

export class Dish {
    @PrimaryGeneratedColumn('uuid')
    id:string;
    @Column('text',{
        default: 'Manuela jijija'
    })
    name?:string;
    @Column('numeric',{
        default:0
    })
    price:number;
    @Column('text',{
        default:'La mejor pizza uwu'
    })
    description:string;
    @Column('text',{
        default:'Esto es una descripcion uwu'
    })
    image:string;
    @Column('date',{
        default:()=> 'CURRENT_TIMESTAMP'
    })
    createAt?:Date;
    @Column('date',{
        default:()=> 'CURRENT_TIMESTAMP'
    })
    updateAt?:Date;
}
//Se crea la tabla desde acá, el id se genera automáticamente