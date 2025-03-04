import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('placas')
export class Placa {
    // ID
    @PrimaryGeneratedColumn('uuid')
    id:string;
    @Column('text',{
    })

    // PLACA
    name?:string;
    @Column('text',{
    unique:true
    })

    // MARCA
    marca:string;
    @Column('text',{
    })

    // MODELO
    modelo:number;
    @Column('string',{
    })

    // COLOR
    color:string;
    @Column('text',{
    })

    // FECHA INGRESO
    @Column('date', {
    })
    fecha_ingreso: Date;
}
