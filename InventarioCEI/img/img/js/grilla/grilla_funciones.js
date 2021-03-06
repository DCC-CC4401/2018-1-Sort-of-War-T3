
//-----------------------------------------------------------------------------------------------------------------//
//Funciones

function agregar_reserva(nombre_sala, estado, dia, horario_inicio, horario_termino, color_sala, espacio)
{
	var reserva = canvas.append("g").attr("class", "reserva_grilla")
										.attr("id", nombre_sala.replace(/ /g,"_"));

	var alto = (hora2minutos(horario_termino) - hora2minutos(horario_inicio))/7200*7*height;
	var inicio = (hora2minutos(horario_inicio) - 600)/7200*7*height + height*(1 + 14/3)/20;

	var arreglo_aux = [3,5,7,9,11];

	reserva.append("rect")
			.attr("fill", color_sala)
			.attr("height", alto)
			.attr("width", Math.min(width/7,width*arreglo_aux[dia - 1]/12 - (2*dia - 0.95) * width/12 - espacio*width/147))
			.attr("x", (2*dia - 0.95) * width/12 + espacio*width/147)
			.attr("y", inicio);
	var texto_titulo = nombre_sala;


	reserva.append("text")
			.attr("x", (2*dia - 0.92) * width/12 + espacio*width/147)
			.attr("y", inicio+height/80)
			.text(texto_titulo);

	reserva.append("text")
				.attr("x", (2*dia - 0.92) * width/12 + espacio*width/147)
				.attr("y", inicio+height*5/80)
				.text(estado + " " + entero2string(horario_inicio.hora,2) + ":" + entero2string(horario_inicio.minuto,2) + " - " + entero2string(horario_termino.hora,2) + ":" + entero2string(horario_termino.minuto,2));
}

function agregar_linea_hora()
{
	var d = new Date();
	var minutos = d.getHours()*60 + d.getMinutes();
	minutos = minutos - 600;

	if(minutos<-2*60 || minutos > 10*60)
		return;

	var var_x = 15*width/192;
	var var_y = (minutos)/7200*7*height + height*(1 + 14/3)/20;

	var grupo_linea_hora_actual = canvas.append("g").attr("class", "linea_hora_actual")

	var alto_rect = 22;
	var ancho_rect = 55;

	grupo_linea_hora_actual.append("rect")
							.attr("x", var_x - ancho_rect + width/192)
							.attr("width", ancho_rect)
							.attr("y", var_y - alto_rect/2)
							.attr("height", alto_rect)
							.attr("fill","#dd0");

	grupo_linea_hora_actual.append("text")
			.attr("x",var_x)
			.attr("y",var_y)
			.text(entero2string(d.getHours(),2) + ":" + entero2string(d.getMinutes(),2));

	grupo_linea_hora_actual.append("line")
							.attr("y1", var_y)
							.attr("y2", var_y)
							.attr("x1", width/12)
							.attr("x2", width*11/12)
							.attr("stroke", "#dd0")
							.attr("stroke-width", 2);
}

function ocultar_reservas_sala(id)
{
	canvas.selectAll("#" + id.replace(/ /g,"_")).attr("opacity", 0.0);
}

function mostrar_reservas_sala(id)
{
	canvas.selectAll("#" + id.replace(/ /g,"_")).attr("opacity", 1.0);
}

function hora2minutos(hora)
{
	return hora.hora*60 + hora.minuto;
}

function entero2string(val, numero_caracteres)
{
	if(numero_caracteres == 1)
		return (val%10).toString();
	else
		return entero2string(parseInt(val/10), numero_caracteres - 1) + (val%10).toString();
}

//------------------------------------------------------------------------------------------------------------------------//
