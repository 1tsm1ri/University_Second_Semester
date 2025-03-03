package principal;
import java.util.Scanner;

/* Programe un algoritmo que determine si un numero es primo 
 * 	Es primo si es divisible por 1 y por si mismo*/

public class Principal {

	public static void main(String[] args) {
		
		Scanner lector = new Scanner(System.in);
		
		int numeroPrimo, i;
		
		System.out.println("Detector de numeros primos");
		System.out.print("Digite el numero que desee evaluar: ");
		numeroPrimo = lector.nextInt();
		
		if (numeroPrimo % 2 == 0 || numeroPrimo % 3==0 || numeroPrimo % 5==0 || numeroPrimo % 7 == 0) {
			System.out.println("El numero NO es primo");
		} else {
			System.out.println("El numero es primo");
		}
		
		lector.close();
		
	}
}
