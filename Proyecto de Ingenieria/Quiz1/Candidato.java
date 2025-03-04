/* QUIZ 1
 * Mariana Lemus Esguerra */

//Importar Biblioteca/Libreria Scanner
import java.util.Scanner;

public class Candidato {

    private String nombreCompleto, grado;
    private int dineroInvertido = 0, votoRedSocial = 0, votoPublicidadFisica = 0;

    public Candidato (String nombreCompleto, String grado, int dineroInvertido, int votoRedSocial, int votoPublicidadFisica) {
        this.nombreCompleto=nombreCompleto;
        this.grado=grado;
        this.dineroInvertido=dineroInvertido;
        this.votoRedSocial=0;
        this.votoPublicidadFisica=0;
    }


    public void votaciones (boolean esRedes) {  
        if (esRedes) {     
            votoRedSocial++; 
        } else { 
            votoPublicidadFisica++;
        }
    }

    public int recibirVotoSocial() {
        return (votoRedSocial * 1000);
    }
    public int recibirVotoFisico() {
        return (votoPublicidadFisica * 500);
    }

    public int costoFinal() {
        return costoFinal = dineroInvertido - recibirVoto;
    }
}


// nombreCompleto, grado, dineroInvertido, votoRedes = 1000, votoFisico = 500, creacionCanditados, poblacionVotante, recibirVoto, costoFinal = dineroInvertido - recibirVoto;