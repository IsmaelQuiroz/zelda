var tablero, direccion;

var teclas={
	UP: 38,
	DOWN: 40,
	LEFT: 37,
	RIGHT: 39

};


var fondo = {
	imageURL: "images/fondo.png",
	imagenOK: false
};

var tifis={
	x: 100,
	y: 100,
	velocidad: 20,
	frenteURL: "diana-frente.png",
	frenteOK: false,
	atrasURL: "diana-atras.png",
	atrasOK: false,
	derURL: "diana-der.png",
	derOK: false,
	izqURL: "diana-izq.png",
	izqOK: false
	
};

var liz={
	lizURL: "liz.png",
	lizOK: false,
	x: 400,
	y: 200
};



function inicio(){
	var canvas = document.getElementById("campo");
	tablero = canvas.getContext("2d");

	fondo.imagen = new Image();
	fondo.imagen.src = fondo.imageURL;
	fondo.imagen.onload = confirmarFondo;

	tifis.frente = new Image();
	tifis.frente.src = tifis.frenteURL;
	tifis.frente.onload = confirmarFrente;

	tifis.atras = new Image();
	tifis.atras.src = tifis.atrasURL;
	tifis.atras.onload = confirmarAtras;

	tifis.izq = new Image();
	tifis.izq.src = tifis.izqURL;
	tifis.izq.onload = confirmarIzq;

	tifis.der = new Image();
	tifis.der.src = tifis.derURL;
	tifis.der.onload = confirmarDer;

	liz.lizy = new Image();
	liz.lizy.src = liz.lizURL;
	liz.lizy.onload = confirmarLiz;

	//var m = document.getElementById("mover");
	//m.addEventListener("click",movimiento);

	document.addEventListener("keydown",teclado);
}

function teclado(datos)
{
	//Guardo en codigo el # de la tecla oprimida
	var codigo = datos.keyCode;

	if(codigo == teclas.UP)
	{
		tifis.y -= tifis.velocidad;
	}

	if(codigo == teclas.DOWN)
	{
		tifis.y += tifis.velocidad;
	}

	if(codigo == teclas.LEFT)
	{
		tifis.x -= tifis.velocidad;
	}

	if(codigo == teclas.RIGHT)
	{
		tifis.x += tifis.velocidad;
	}

	direccion = codigo;

	dibujar();

}

function confirmarLiz(){
	liz.lizOK = true;
	dibujar();
}

function confirmarFondo(){
	fondo.imagenOK = true;
	dibujar();
}

function confirmarFrente(){
	tifis.frenteOK = true;
	dibujar();
}

function confirmarAtras(){
	tifis.atrasOK = true;
	dibujar();
}

function confirmarDer(){
	tifis.derOK = true;
	dibujar();
}

function confirmarIzq(){
	tifis.izqOK = true;
	dibujar();
}

function dibujar()
{
	//Capa 1: Fondo
	if(fondo.imagenOK == true){
		tablero.drawImage(fondo.imagen,0,0);
	}

	//Capa 2: Liz
	if(liz.lizOK)	
	{
		tablero.drawImage(liz.lizy, liz.x, liz.y);

	}

	//Capa 3: Tifis
	var tifiDibujo = tifis.frente ;
	if(tifis.frenteOK && tifis.atrasOK && tifis.derOK && tifis.izqOK)
	{
		if(direccion == teclas.UP)
		{
			tifiDibujo = tifis.atras;
		}
		if(direccion == teclas.DOWN)
		{
			tifiDibujo = tifis.frente;
		}
		if(direccion == teclas.RIGHT)
		{
			tifiDibujo = tifis.der;
		}
		if(direccion == teclas.LEFT)
		{
			tifiDibujo = tifis.izq;
		}

		tablero.drawImage(tifiDibujo, tifis.x, tifis.y);
	}
	
}

