Las curvas cuadráticas son un tipo concreto de curvas Bezier, es decir, una manera de expresar matemáticamente una curva, similar a las Bezier pero más simplificada. Mientras que en las curvas Bezier tenemos dos puntos para definir la tendencia de la curva, al principio y el fin de la misma, en las curvas cuadráticas sólo tendremos un punto.

Nota: No hemos visto todavía las mencionadas curvas Bezier, pues son más complejas que las curvas cuadráticas. Es por eso que las veremos más adelante.


# Método quadraticCurveTo() para dibujar curvas cuadráticas

Las curvas cuadráticas actúan como otros métodos para dibujar caminos en el canvas. Recordemos que al hacer un camino en el canvas partimos de un punto inicial, que es el punto donde está situado el puntero de dibujo (podríamos imaginar ese punto inicial como el lugar donde está situado el lápiz antes de empezar a dibujar la curva). Así que, para expresar una curva cuadrática, tendremos que definir el punto final de la misma y el punto imaginario hacia el que se curvará la línea entre esos dos puntos.

Utilizaríamos la siguiente llamada a un método del contexto del canvas.

    quadraticCurveTo(pcx, pcy, x, y)

Este método recibe cuatro valores, que corresponden con dos puntos del lienzo. Insisto en que el punto inicial ya está implícito en el contexto del canvas, con la posición dada del puntero de dibujo antes de comenzar la curva cuadrática. Luego, el punto (pcx, pcy) es el lugar "imaginario" al que tendrería la curvatura de la línea. El punto (x,y) sería el final de la curva.

En el anterior gráfico tenemos tres puntos:

    1) El primero, marcado con color morado, es la posición del puntero de dibujo al iniciar la curva cuadrática. Ese punto no lo definimos al hacer la llamada al método quadraticCurveTo() porque ya está implícito en el contexto del canvas. En cualquier caso se puede cambiar con una llamada a moveTo() como hemos visto en artículos anteriores.
    2) El segundo punto, marcado con color rojo, es la tendencia de la curva cuadrática. Ese punto decimos que es imaginario porque no aparece en la curva. Simplemente sirve para definir cómo será la curvatura. Se define con los parámetros pcx, pcy.
    3) El tercer punto, dibujado en verde, es el final de la curva, definido por los parámetros x, y.

Ejemplo de curva cuadrática
Ahora podemos ver un ejemplo de dibujo en canvas de un camino que incluye dos curvas cuadráticas.

    var ctx = cargaContextoCanvas('micanvas');
    if(ctx){
    ctx.beginPath();
    ctx.moveTo(10,60)
    ctx.quadraticCurveTo(10,10,60,10);
    ctx.lineTo(120,10);
    ctx.lineTo(120,50);
    ctx.quadraticCurveTo(120,110,60,110);
    ctx.lineTo(10,110);
    ctx.fill();
    }
    
Como se puede ver, aparte de la curva cuadrática tenemos otras líneas rectas en este dibujo, que luego se rellena de color con fill(). Nos da el resultado una forma parecida a una hoja, que se puede ver en el ejemplo en marcha.