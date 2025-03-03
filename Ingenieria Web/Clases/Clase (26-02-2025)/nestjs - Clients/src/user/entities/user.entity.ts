import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

// ENUM
export enum Role {
    Admin = "Admin", 
    Client = "Client", 
    Tester = "Tester", 
    Employee = "Employee",
    } 


@Entity('user')
export class User {

    // ID
    @PrimaryGeneratedColumn('uuid')

    id:string;
    @Column('text',{
        default: 'Unique identifier',
        unique:true
    })

    // NOMBRE
    name:string;
    @Column('text',{
        default:'Full name'
    })

    // CORREO
    email:string;
    @Column('text',{
        default:'Contact email'
    })

    // CONTRASEÑA
    password:string;
    @Column('text',{
        default:'Secure login'
    })

    // ENUM
    @Column('enum',{
        enum: Role,
        default: Role.Client, 
    })
    role: Role;
    /* 
    purchase_history:string;
    @Column('',{
        default:'All past purchases'
    })

    
    test_subjet_status:boolean;
    @Column('boolean',{
        default:'Whether the user is a test subject'
    })

    
    allergic_reactions:string;
    @Column('text',{
        default:'Any documented reactions to products'
    });

    */
}