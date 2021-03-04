function mostrar()
{
  var nombre;
	var cursada;
	var cantidadMaterias;
	var sexo;
	var notaPromedio;
	var edad;
	var respuesta;
  var nombrePromedio;
  var mejorPromedio;
  var joven;
  var edadJovenLibre;
  var acumuladorNotaFemenino;
  var acumuladorNotaMasculino;
  var acumuladorNotaNoBinario;
  var contadorMasculino;
  var contadorFemenino;
  var contadorNoBinario;
  var promedio;
  var nombreMayorMaterias;
  var edadMayorMaterias;
  var mayorCantidad; 
  var flagPromedio;
  var flagEdad;
  var flagMaterias;

  acumuladorNotaFemenino = 0;
  acumuladorNotaMasculino = 0;
  acumuladorNotaNoBinario = 0;
  contadorMasculino = 0;
  contadorFemenino = 0;
  contadorNoBinario = 0; 
  flagPromedio = 0;
  flagEdad = 0;
  flagMaterias = 0; 

	do{
		do{
			nombre = prompt("Ingrese nombre: ");
		} while(isNaN(nombre) == false);

		do{
			cursada = prompt("Ingrese cursada: ");
		} while(cursada != "Libre" && cursada != "Presencial" && cursada != "Remota");

		do{
			cantidadMaterias = parseInt(prompt("Ingrese cantidad de materias: "));
		} while(cantidadMaterias < 0 || cantMaterias > 8 || isNaN(cantidadMaterias));

		do{
			sexo = prompt("Ingrese sexo: ")
		} while(sexo != "Femenino" && sexo != "Masculino" && sexo != "No Binario");
		
		do{
			notaPromedio = parseInt(prompt("Ingrese nota: "));
		} while(notaPromedio < 0 || notaPromedio > 10 || isNaN(notaPromedio));

		do{
			edad = parseInt(prompt("Ingrese edad: "));
		} while (edad < 18 || edad > 90 || isNaN(edad));

		switch(sexo){
			case "Femenino":
				contadorFemenino++;
				acumuladorNotaFemenino = acumuladorNotaFemenino + notaPromedio;
				break;
			case "Masculino":
				contadorMasculino++;
				acumuladorMasculino = acumuladorMasculino + notaPromedio;
				break;
			case "No Binario":
				contadorNoBinario++;
				acumuladorNoBinario = acumuladorNoBinario + notaPromedio;
				break;		
    }
		
		if(flagPromedio == 0 && sexo != "Masculino"){
			flagPromedio++;
			mejorPromedio = notaPromedio;
			nombrePromedio = nombre;
		}
		else if(notaPromedio > mejorPromedio && sexo != "Masculino"){
			mejorPromedio = notaPromedio;
			nombrePromedio = nombre;
		}

		if(flagEdad == 0 && cursada == "Libre"){
			flagEdad++;
			joven = nombre;
			edadJovenLibre = edad;
		}
		else if(edad < edadMasJoven && cursada == "Libre"){
			joven = nombre;
			edadJovenLibre = edad;
		}

		if(flagMateria == 0 && cursada != "Remota"){
			flagMateria++;
			edadMayorMaterias = edad;
			nombreMayorMaterias = nombre;
			mayorCantidad = cantidadMaterias;
		}
		else if (cantidadMaterias > mayorCantidad && cursada != "Remota"){
			edadMayorCantMaterias = edad;
			nombreMayorMaterias = nombre;
			mayorCantidad = cantidadMaterias;
		}
	} while(respuesta = prompt("¿Ingresa otro dato?"));

	if(flagPromedio != 0){
		document.write("El nombre del mejor promedio es : " +nombrePromedio+ "<br>");
	}

	if(flagEdad != 0){
		document.write("El nombre es: " +joven+ "<br>");
	}

	if(contadorMasculino != 0){
		promedio = acumuladorNotaMaculino / contadorMasculino;
		document.write("El promedio masculino es: " +promedio+ "<br>");
	}
	else if(contadorFemenino = 0){
		promedio = acumuladorNotaFemenino / contadorFemenino;
		document.write("El promedio femenino es: " +promedio+ "<br>");
	}
	else if(contadorNoBinario != 0){
		promedio = acumuladorNotaNoBinario / contadorNoBinario;
		document.write("El promedio no binario es :" +promedio+ "<br>");
	}

	if (flagMateria != 0){
		document.write("La edad y nombre del alumno es: " +edadMayorMaterias+ "y" +nombreMayorMaterias+ "<br>");
  }
}
