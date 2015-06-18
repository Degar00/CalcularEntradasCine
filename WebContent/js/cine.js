/*******************************************************************************
 * init
 ******************************************************************************/
var dias = [ "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado",
		"Domingo" ];
function init() {
	ldias = document.getElementById("listaDias");
	for (i = 0; i < dias.length; i++) {
		ldias[i] = new Option(dias[i], dias[i]);
		if (dias[i] == "Martes") {
			ldias[i].selected = true;
		}
	}
}

/*******************************************************************************
 * CINE DE ALMENDRALEJO (PAG 283)
 ******************************************************************************/

/**
 * Calcula el precio de la entrada del Cine de Almendralejo
 * 
 * @param dia:
 *            Dia de la semana escrito en minusculas, ej:
 *            ['lunes','martes',...'domingo']
 * @param edad:
 *            edad de la persona que compra la entrada, formato numero entero
 * @return precio en euros, null si
 */
function calcularEntrada(dia, edad) {
	var precio = null;
	var txt_precio = document.getElementById("precio");
	dia = dia.toLowerCase();
	if (!isNaN(edad)) {
		switch (dia) {
		case 'lunes':
			if (edad <= 35) {
				precio = 2;
			} else {
				precio = 5;
			}
			break;
		case 'martes':
			if (edad <= 25) {
				precio = 2;
			} else if (edad > 25 && edad <= 50) {
				precio = 5;
			} else {
				precio = 7;
			}
			break;
		case 'miercoles':
			if (edad <= 18) {
				precio = 3;
			} else if (edad > 18 && edad <= 50) {
				precio = 5;
			} else {
				precio = 8;
			}
			break;
		case 'jueves':
			if (edad <= 18) {
				precio = 5;
			} else {
				precio = 7;
			}
			break;
		case 'viernes':
		case 'sabado':
		case 'domingo':
			precio = 10;
			break;

		}// end switch
	}
	txt_precio.innerHTML = precio;
}
// end:function entradas (dia,edad)
