var posA = prompt("Posición A:");
var posB = prompt("Posición B:");
var posG = prompt("Piso Gama:");
var intA = parseInt(posA);
var intB = parseInt(posB);
var intG = parseInt(posG);
var a = intG-intA
var b = intG-intB
if (a<0)
{
  var a = a*(-1);
  if (b<0)
  {
    var b = b*(-1);
  }
}
else if (b<0)
{
  var b = b*(-1);
}
alert("Posición A: " + intA);
alert("Posición B: " + intB);
alert("Piso Gama: " + intG);
if (a==b)
{
  alert("Gama, ambos elevadores están a la misma distancia de ti.");
}
else if (a<b)
{
  alert("Gama, el elevador A está más cerca de tu piso.");
}
else if (b<a)
{
  alert("Gama, el elevador B está más cerca de tu piso.");
}
