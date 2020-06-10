/*
HTML DE REFERENCIA:
<body>
   <script src="../Dynamics/Actividad6.js"></script>
   <div style="background-color: lightgray; border: 0.3em dashed">
     <br>
     <h1><a href="google.com">Soy el más grande...</a></h1>
     <h2>Curso Web 2020</h2>
     <h2><a href="google.com"><i>Mediano</i></a></h2>
     <h3 style="color: red">Jelou</h3>
    <h3>Estoy medio chiquito :(</h3>
   </div>
</body>
*/
// Creo elementos. Les consedo atributos si es necesario. Los "meto" a la sección correspondiente. Todo este proceso en bucle hasta llegar al texto y agregarlo a la etiqueta correspondiente.
var body = document.getElementsByTagName("body");
var div = document.createElement("div");
div.setAttribute("style", "background-color: lightgray; border: 0.3em dashed");
var br = document.createElement("br");
var h1 = document.createElement("h1");
var h2b = document.createElement("h2");
var h2a = document.createElement("h2");
var h3a = document.createElement("h3");
h3a.setAttribute("style", "color: red");
var h3b = document.createElement("h3");
body[0].appendChild(div);
div.prepend(br, h1, h2a, h2b, h3a, h3b);
var a1 = document.createElement("a");
a1.setAttribute("href", "google.com");
var a2 = document.createElement("a");
a2.setAttribute("href", "google.com");
h1.prepend(a1);
h2b.prepend(a2);
var i = document.createElement("i");
a2.prepend(i);
a1.innerText = "Soy el más grande...";
h2a.innerText = "Curso Web 2020";
i.innerText = "Mediano";
h3a.innerText = "Jelou";
h3b.innerText = "Estoy medio chiquito :(";
