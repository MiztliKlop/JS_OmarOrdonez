// METACOMENTARIO: Diego, si lees esto, no entendí dónde quedan las instrucciones, ¿dentro o fuera de las etiquetas? ¿Por qué funciona así?
// Declaro variable: determina las dimensiones del tablero. (1x1, 2x2, 3x3... etc.)
var x = prompt("Ingrese las dimensiones: ")
var x = parseInt(x);
//Determino las dimensiones del tablero a una adecuada.
var body = document.getElementsByTagName("body");
var tabla = document.createElement("table");
tabla.setAttribute("style", "width:600px; height:600px");
tabla.setAttribute("border", "1");
body[0].appendChild(tabla);
// Determino que el proceso va a parar en el número "x" de veces. Para filas.
for (var i=1; i <= x; i++)
{
  // Marco una condición que si "var i" es par, hará las siguientes acciones. PARA ALTERNAR LOS COLORES DEL TABLERO EN FILAS.
  if ( i%2==0)
  {
    var tr = document.createElement("tr");
    tabla.appendChild(tr);
    // Determino que el proceso va a parar en el número "x" de veces. Para columnas.
    for (var e=1;  e <=  x;  e++)
    {
      // Marco una condición que si "var i" es par, hará las siguientes acciones. PARA ALTERNAR LOS COLORES DEL TABLERO EN COLUMNAS.
      if ( e%2==0)
      {
        var thr = document.createElement("th");
        thr.setAttribute("style", "background-color: #0EFF5D");
        tr.appendChild(thr);
      }
      // COLOR ALTERNO AL "if (var e%2==0)".
      else
      {
        var thb = document.createElement("th");
        thb.setAttribute("style", "background-color: #FF0802");
        tr.appendChild(thb);

      }
    }
  }
  // COLOR ALTERNO AL "if (var i%2==0)"
  else
  {
    var tr = document.createElement("tr");
    tabla.appendChild(tr);
    // Determino que el proceso va a parar en el número "x" de veces. Para columnas.
    // tr.innerHTML = "
    for (var e=1;  e<= x;  e++)
    {
      // Marco una condición que si "var i" es par, hará las siguientes acciones. PARA ALTERNAR LOS COLORES DEL TABLERO EN COLUMNAS.
      if ( e%2==0)
      {
        var thb = document.createElement("th");
        thb.setAttribute("style", "background-color: #FF0802");
        tr.appendChild(thb);

      }
      // COLOR ALTERNO AL "if (var e%2==0)".
      else
      {
        var thr = document.createElement("th");
        thr.setAttribute("style", "background-color: #0EFF5D");
        tr.appendChild(thr);
      }
    }
  }
}
