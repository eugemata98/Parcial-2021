	
function mostrar() 
{
	var nombre;
	var precio;
	var cantidadUnidades;
	var tipo;
	var marca;
	var promedioAlcohol;
	var promedioIac;
	var promedioQuat;
	var contadorAlcohol;
	var contadorIac;
	var contadorQuat;
	var acumuladorAlcohol;
	var acumuladorIac;
	var acumuladorQuat;
	var acumuladorCantidadIgnif;
	var acumuladorCantidadCombust;
	var acumuladorCantidadExplos;
	var acumuladorUnidadesIac;
	var precioIac;
	var mayorCantidadUni;
	var mayorPrecio;
	var flag;
	var marcaMayorPrecio;
	var tipoMayorPrecio;

	contadorAlcohol = 0;
	contadorIac = 0;
	contadorQuat = 0;
	acumuladorAlcohol = 0;
	acumuladorIac = 0;
	acumuladorQuat = 0;
	acumuladorCantidadIgnif = 0;
	acumuladorCantidadCombust = 0;
	acumuladorCantidadExplosivo = 0;
	acumuladorUnidadesIac = 0;
	flag = 0;

	for (var i = 0; i < 3; i++) {
		nombre = prompt("Ingrese el nombre: ");
		while (nombre != "Alcohol" && nombre != "Iac" && nombre != "Quat") {
			nombre = prompt("Ingrese un producto valido: ");
		}

		precio = parseInt(prompt("Ingrese el precio: "));
		while (precio < 100 || precio > 300 || isNaN(precio)) {
			precio = parseInt(prompt("Ingrese un valor valido: "));
		}

		cantidadUnidades = parseInt(prompt("Ingrese la cantidad de unidades: "));
		while (cantidadUnidades < 1 || cantidadUnidades > 1000 || isNaN(cantidadUnidades)) {
			cantidadUnidades = parseInt(prompt("Ingrese un valor valido: "));
		}

		tipo = prompt("Ingrese tipo de producto: ");
		while (tipo != "Ignífugo" && tipo != "Combustible" && tipo != "Explosivo") {
			tipo = prompt("Ingrese un valor valido: ");
		}

		marca = prompt("Ingrese marca: ");

		switch (nombre) {
			case "Alcohol":
				contadorAlcohol++;
				acumuladorAlcohol = acumuladorAlcohol + cantidadUnidades;
				break;

			case "Iac":
				contadorIac++;
				acumuladorIac = acumuladorIac + cantidadUnidades;

				if (precio <= 200) {
					acumuladorUnidadesIac = acumuladorUnidadesIac + cantidadUnidades;
				}
				break;

			case "Quat":
				contadorQuat++
				acumuladorQuat = acumuladorQuat + cantidadUnidades;
				break;
		}

		switch (tipo) {
			case "Ignifugo":
				acumuladorCantidadIgnif = acumuladorCantidadIgnif + cantidadUnidades;
				break;
			case "Combustible":
				acumuladorCantidadCombust = acumuladorCantidadCombust + cantidadUnidades;
				break;
			case "Explosivo":
				acumuladorCantidadExplosivo = acumuladorCantidadExplosivo + cantidadUnidades;
				break;
		}

		if (flag == 0) {

			tipoMayorPrecio = tipo;
			marcaMayorPrecio = marca;
			mayorPrecio = precio;
			flag = 1;
		}
	}

	if (contadorAlcohol != 0) {
		promedioAlcohol = acumuladorAlcohol / contadorAlcohol;
	}
	else if (contadorIac != 0) {
		promedioIac = acumuladorIac / contadorIac;
	}
	else if (contadorQuat != 0);
	promedioQuat = acumuladorQuat / contadorQuat;

document.write("El promedio del Iac es " + promedioIac + "<br>");
document.write("El promedio del Quat es " + promedioQuat + "<br>");
document.write("El inflamable con mas unidades es" + promedioAlcohol + "<br>");
document.write("Las unidades de Iac con menor precio son: " + acumuladorUnidadesIac + "<br>");
document.write("La marca y el tipo mas caros son: " + mayorPrecio + "y " + tipoMayorPrecio);

}
