// Declaro variables.
var z=0;
var x=1;
var y=0;
var vacio = [];
// Pido las dimensiones de mi Arreglo.
var px = prompt("Dimensión X: ");
var px = parseInt(px);
var py = prompt("Dimensión Y: ");
var pt = px*py;
var num = parseInt(pt);
vacio.push(0);
// Sucesión de fibonacci insertada a mi arreglo vacío.
for (var i=0; i<num; ++i)
{
  var z=x+y;
  // console.log(z); Checar Sucesión.
  var x = y;
  var y = z;
  vacio.push(z);
}
// Se hace el arreglo bidimensional de acuerdo con los valores insertados.
var xi = 0;
var fibonacci = [];
for (var e = 0; e < py; e++)
{
  var a = vacio.splice(  xi, px );
  // console.log( a ); Checar arreglo.
  var push = fibonacci.push(a);
}
console.log(fibonacci);
// FALTA: Arreglar en forma de Caracol.
