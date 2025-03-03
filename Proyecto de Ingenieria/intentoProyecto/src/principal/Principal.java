package principal;

//Importar clase Scanner
import java.util.Scanner;

public class Principal {

	public static void main(String[] args) {
				
			// Crear objeto de clase scanner Clase nombreObjeto =new Clase(parametros);
			Scanner lector = new Scanner(System.in);

			int primerEntero, segundoEntero, tercerEntero;
				
			System.out.println("Por favor digite tres numeros enteros");
				
			System.out.println("Primer entero: ");
			primerEntero = lector.nextInt();
			System.out.println("Segundo entero: ");
			segundoEntero = lector.nextInt();
			System.out.println("Tercer enterp: ");
			tercerEntero = lector.nextInt();
				
			System.out.printf("Los numeros digitados fueron: %d %d %d", primerEntero, segundoEntero, tercerEntero);

			lector.close();	
		
	}

}
