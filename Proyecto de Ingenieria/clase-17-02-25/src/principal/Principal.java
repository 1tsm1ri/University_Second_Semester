package principal;

public class Principal {
	public static void main(String[]args) {
		Persona persona1 = new Persona("Duvan", 50);
		System.out.println(persona1.nombre);
		
		Producto p1 = new Producto ("Arroz", "5000");
		System.out.println(p1.precio);
	}
}
