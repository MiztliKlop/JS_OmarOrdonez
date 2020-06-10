// Especifico Regex para el Ciberterrorista, Y Aliados.
let regex = /(.*)(<script>).*(equisde(.*)){5}.*(<\/script>)(.*)/gms;
let regexd = /.*(equisde(.*)){5,}/gms;
let regexs = /(.*)(<script>)(.*)(<\/script>)(.*)/gms;
// Pongo la carnada (prompt).
var caza = prompt("Oh, Un Prompt: ");
// Convierto mi prompt en diferentes Objetos String.
var caza1 = new String(caza);
var aliadoxd = new String(caza);
var aliados = new String(caza);
// Verifico el texto ingresado si pertenece a una Regex.
var modus = caza1.match(regex); //Modus Operandi Ciberterrorista
var modusxd = caza1.match(regexd); //Modo por lo menos 5 "equisde"
var moduss = caza1.match(regexs); //Modo buscar etiqueta "script"
// Pongo mis condiciones para detectar al Ciberterrorista o Aliado.
if (modus)
{
    alert("Oso oso mentiroso, vete lejos antes de que te lanze mis calcetines olor a queso.");
}
else if (modusxd && !moduss)
{
  alert("¿Bob?\n¿Wade?");
}
else if (moduss && !modusxd)
{
  alert("¿Bob?\n¿Wade?");
}
