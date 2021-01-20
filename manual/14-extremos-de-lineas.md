## En las líneas que se dibujan en los elementos canvas del HTML 5 se pueden configurar distintos tipos de extremos, cuadrados, redondeados, etc.

El elemento canvas del HTML 5 permite dibujar líneas que pasan por caminos a las que podemos asignar diferentes configuraciones. En el capítulo anterior del Manual de Canvas explicamos cómo hacer líneas con diferentes grosores. En el presente texto vamos a ver otra de las configuraciones posibles para líneas, que tiene que ver con la forma de sus puntas o extremos.

Para aprender a configurar el borde de una manera práctica, veremos además un par de ejemplos de dibujo en los elementos de canvas. Pero antes podemos comenzar por explicar qué tipos de extremos distintos podemos asignar a las líneas que dibujamos en un canvas.


# Tipos de extremos y propiedad lineCap

La propiedad lineCap, que pertenece al contexto de un canvas, nos sirve para asignar los tipos de extremos que queremos en las líneas. Admite tres valores distintos:

- butt
- round
- square

Vamos a explicar a continuación esos tres valores, pero para que sea más sencillo, veamos antes la siguiente imagen, con tres líneas en color verde que tienen configuradas cada uno de los posibles extremos que tenemos disponibles en el elemento canvas.

https://desarrolloweb.com/articulos/images/html5/lineas-con-extremos-diferentes.png

Nota: Aparte de las tres líneas horizontales para expresar los tres valores de extremos distintos, se puede ver una línea vertical de color rojizo que sirve para indicar el comienzo y fin de las líneas horizontales que se han dibujado.

La primera línea verde corresponde con el valor "butt", que es el predeterminado. En este caso la línea comienza justamente en el lugar donde comienza el camino definido antes de dibujar la línea (ver la línea roja para entender este punto).

La segunda línea horizontal tiene el valor de lineCap "round" y hace que los extremos de la línea estén redondeados. Cuanto más gruesa la línea, más notaremos que los extremos están redondeados, por eso hemos dibujado líneas con una espesura considerable (22 píxeles).

La tercera línea verde tiene el valor de lineCap "square", que es muy parecido al valor "butt", pero vemos que en este caso la línea sobrepasa un poco los extremos del camino. Esto es porque en vez de empezar en el lugar donde comienza el camino, empieza un poco más allá, atendiendo a su grosura. Por ejemplo, si la línea tenía como en este caso 22 píxeles de anchura, el extremo traspasará el límite del camino en un 50% de esa anchura. Es algo parecido a lo que ocurre con el extremo redondeado, pero sin redondear la punta de la línea.


# Ejemplo de caminos y líneas con diferentes extremos

La imagen anterior, con las diferentes líneas con distintos extremos, lo hemos creado a partir de un código fuente con el propio elemento canvas. Utilizaríamos un código como el que sigue.

    var ctx = cargaContextoCanvas('micanvas');
    if(ctx){
        //líneas verticales rojas
        ctx.lineWidth = 1;
        ctx.strokeStyle = '#900';
        ctx.beginPath();
        ctx.moveTo(20,20);
        ctx.lineTo(20,180);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(480,20);
        ctx.lineTo(480,180);
        ctx.stroke();
        
        //líneas horizontales verdes con diferentes configuraciones de extremos
        ctx.beginPath();
        ctx.lineWidth = 22;
        ctx.lineCap = "butt"; 
        ctx.strokeStyle = '#090';
        ctx.moveTo(20,60);
        ctx.lineTo(480,60);
        ctx.stroke();
   
        ctx.beginPath();
        ctx.lineCap = "round"; 
        ctx.moveTo(20,100);
        ctx.lineTo(480,100);
        ctx.stroke();
        
        ctx.beginPath();
        ctx.lineCap = "square"; 
        ctx.moveTo(20,140);
        ctx.lineTo(480,140);
        ctx.stroke();
    }

Este ejemplo lo podemos ver en una página aparte.

Ahora veamos un segundo ejemplo, para mostrar que los grosores de línea y los extremos se pueden aplicar a otros tipos de camino, no necesariamente líneas rectas creadas con el método lineTo().

En este segundo ejemplo dibujamos un smile sonriente, al que le hemos aplicado extremos de las líneas redondeados para suavizar la figura.

Si lo deseas, puedes comenzar por ver el ejemplo en una página aparte.

Esto se consigue haciendo varios caminos de tipo arco con configuraciones de línea con lineCap="round" y grosores distintos.

var ctx = cargaContextoCanvas('micanvas');
if(ctx){

   //Camino para la sonrisa
   ctx.beginPath();
   ctx.lineWidth = 20;
   ctx.lineCap = "round";
   ctx.strokeStyle = '#009';
   ctx.arc(75,75,60,Math.PI,0,true);
   ctx.stroke();
   
   //ojo izquierdo
   ctx.beginPath();
   ctx.lineWidth = 10;
   ctx.arc(35,25,10,0,Math.PI,true);
   ctx.stroke();
   
   //ojo derecho
   ctx.beginPath();
   ctx.arc(110,25,10,0,Math.PI,true);
   ctx.stroke();
   
   //círculo relleno para la nariz
   ctx.beginPath();
   ctx.arc(73,50,10,0,Math.PI*2,true);
   ctx.fillStyle = '#009';
   ctx.fill();
}
El ejemplo no reviste ninguna complicación, si se habían entendido los caminos con arcos en canvas.

Para que quede clara la construcción del ejemplo, vamos a mostrar el código HTML completo de este segundo ejemplo para el dibujo del smile.
