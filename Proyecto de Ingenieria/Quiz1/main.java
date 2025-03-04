/* QUIZ 1
 * Mariana Lemus Esguerra */

//Importar Biblioteca/Libreria Scanner
import java.util.Scanner;

public class main {
    // Metodo main, inicio de ejecucion del codigo
    public static void main(String args []) {

        Scanner teclado = new Scanner(System.in);

        Candidato primerCandidato = new Candidato("Mariana", "10B", 1000, 0, 0);  

        Candidato segundoCandidato = new Candidato("Isabela", "11A", 1500, 0, 0);

        System.out.println("Cual es la cantidad de poblacion votante? :");
        int poblacionVotante = teclado.nextInt();

        for (int i = 0; i >= poblacionVotante; i++) {
            
        }
    }
}


