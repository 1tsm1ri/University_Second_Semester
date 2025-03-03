import { ApiProperty } from "@nestjs/swagger";
import { IsString, MinLength } from "class-validator";
// recibe la informacion de las cosas
export class CreateRecursoDto {
    @IsString()
    @MinLength(3)
    // @ApiProperty({'example':'hola','description':'Mariana hablo'})
    palabra: string;
    @IsString()
    @MinLength(10)
    // @ApiProperty({'example':'un saldo','description':'Ella feliz'})
    significado: string;
}
