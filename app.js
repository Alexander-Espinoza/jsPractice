var platillos = document.querySelectorAll(".container p");
console.log(platillos);

var platillosArrayHtml = Array.from(platillos);
console.log(platillosArrayHtml);

/* var platillosArray = [].map.call(platillos, function (p) {
  return p.contentText;
}) */
let platillosArray = platillosArrayHtml.map((platillo) => platillo.textContent);
console.log(platillosArray);

// platillosArray.forEach( platillo => console.log(platillo) )

var menu = [
  {
    nombre: "Arroz con pollo",
    precio: 20,
    country: "Perú",
  },
  {
    nombre: "Tacos",
    precio: 15,
    country: "Mexico",
  },
];
let pElegido = menu.find((platillo) => platillo.nombre == "Tacos");
//console.log(pElegido);

var numPlatillo = platillosArray.findIndex((platillo) => platillo == "Limón");
console.log(numPlatillo);

var numPlatilloMenu = menu.findIndex(
  (platillo) => platillo.nombre.toUpperCase() == "tacos".toUpperCase()
);
console.log(platillosArrayHtml);

//Creando imagen con evento click
var foto = document.createElement("img");
foto.src = "1.jpg";
foto.name = "foto1";
foto.height = 300;
document.body.appendChild(foto);

foto.onclick = function () {
  if (foto.name === "foto1") {
    foto.src = "2.jpg";
    foto.name = "foto2";
  } else {
    foto.src = "1.jpg";
    foto.name = "foto1";
  }
};
//**************************************************
//Propiedades y métodos del BOM
var btn = document.getElementById("btn");
var principal = document.getElementsByClassName("container")[0];

localStorage.setItem("contenido", "Hola que tal mi español es chuprado");
var contenido = localStorage.getItem("contenido");
var p = document.getElementsByClassName("p")[0];
p.innerHTML = contenido;
p.style.display = "none";
var toggled = false;
btn.addEventListener("click", function () {
  stateToggle(toggled);
  console.log(toggled);

  //window.history.forward();
});

function stateToggle() {
  if (toggled == false) {
    toggled = true;
    principal.style.display = "none";
    p.style.display = "block";
    return;
  }
  if (toggled) {
    toggled = false;
    principal.style.display = "block";
    p.style.display = "none";
    return;
  }
}

/********Let y var**/
function printNumbers() {
  
  for (let i = 0; i < 10; i++) {

    setTimeout(function print() {
      //debugger;
      console.log(i);
    }, 100 * i);
  }
}

printNumbers();