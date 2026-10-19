// ejercicio 1
// const button__red = document.getElementById("button__red");
// const body = document.getElementById("body");

// button__red.addEventListener("click", () => {
//   body.style.backgroundColor = "red";
// });

// // ejercicio 2
// const button__title = document.getElementById("button__title")
// const titulo = document.getElementById("titulo")

// button__title.addEventListener("click", ()=>{
//     titulo.style.fontSize= "72px";
// })

// // ejercicio3
// const button_center = document.getElementById("button__center");
// const parrafo = document.getElementById("parrafo");

// button_center.addEventListener("click", () => {
//   parrafo.style.width = "300px";
//   parrafo.style.textAlign = "center";
// });

// // ejercicio 4
// const button__box = document.getElementById("button__box");
// const box = document.getElementById("box");

// button__box.addEventListener("click", () => {
//   box.style.borderRadius = "50px";
// });

// // ejercicio 5
// const button__textcolor = document.getElementById("button__textcolor");
// const parrafo = document.getElementById("parrafo");

// button__textcolor.addEventListener("click", () => {
//   parrafo.style.color = "red";
// });

// ejercicio 6
// const button__ghost = document.getElementById("button__ghost");

// button__ghost.addEventListener("click", ()=>{
//     button__ghost.style.display = "none";
//     // button__ghost.hidden = "true";
// } )

// ejercicio 7
// const button__img = document.getElementById("button__img");
// const img = document.getElementById("img");

// button__img.addEventListener("click", () => {
//   img.src =
//     "https://images.unsplash.com/photo-1644604324741-e50705a4c12a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D";
// });

// ejercicio 8
// const button__disney = document.getElementById("button__disney");
// const enlace = document.getElementById("enlace");

// button__disney.addEventListener("click", () => {
//   enlace.href = "https://es.wikipedia.org/wiki/Wikipedia:Portada";

//   //   enlace.setAttribute("target", "blank");
// });

// ejercicio 9
// const button__robot = document.getElementById("button__robot");
// const input__text = document.getElementById("input__text");

// button__robot.addEventListener("click", () => {
//   input__text.value = "¡Hola, soy un robot!";
// });

//  ejercicio 10
// const button__gris = document.getElementById("button__gris");

// button__gris.addEventListener("click", () => {
//   button__gris.disabled = "true";
// });

// ejercicio 11
// const button__text = document.getElementById("button__text");
// const body = document.getElementById("body");

// button__text.addEventListener("click", () => {
//   const parrafo = document.createElement("p");

//   parrafo.textContent = "¡Me he clonado!";

//   body.appendChild(parrafo);
// });

// ejercicio 12
// const body = document.getElementById("body");
// const button = document.createElement("button");

// button.textContent = "Soy nuevo";

// body.appendChild(button);

// ejercicio 13
// const caja = document.getElementById("caja");
// const h2 = document.createElement("h2");

// h2.textContent = "¡Sorpresa!";
// caja.appendChild(h2);

// ejercicio 14
// const body = document.getElementById("body");
// const img = document.createElement("img");

// img.src =
//   "https://images.unsplash.com/photo-1763718205007-fb085a276026?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D";

// body.appendChild(img);

// ejercicio 15
// const parrafo__vacio = document.getElementById("parrafo__vacio");
// const body = document.getElementById("body");

// parrafo__vacio.innerHTML = "<strong> hola </strong>";

// ejercicio 16 y 17 (17 es el "mouseleave")
// const button__hover = document.getElementById("button__hover");

// button__hover.addEventListener("mouseenter", () => {
//   button__hover.style.backgroundColor = "yellow";
// });

// button__hover.addEventListener("mouseleave", () => {
//   button__hover.style.backgroundColor = "";
// });

// ejercicio 18
// const h1 = document.getElementById("h1");

// h1.addEventListener("dblclick", () => {
//   h1.textContent = "¡Me rompiste!";
// });

// ejercicio 19
// const input = document.getElementById("input")
// const body = document.getElementById("body")

// input.addEventListener("keyup", ()=>{
//     body.style.backgroundColor= "red";
// })

// ejercicio 20
// const container__text = document.getElementById("container__text");

// container__text.addEventListener("click", () => {
//   container__text.classList.add("clase-magica");
// });

// ejercicio 21
// const button = document.getElementById("button");
// const body = document.getElementById("body");

// button.addEventListener("click", () => {
//   body.classList.toggle("noche");
// });

// ejercicio 22
// const button = document.getElementById("button");
// const mensaje = document.getElementById("mensaje");

// button.addEventListener("click", () => {
//   mensaje.style.opacity = "1";
// });

// ejercicio 23 REPETIR CUANDO DEMOS BUCLES!!!!!
// const container = document.getElementById("container");
// const button__fuego = document.getElementById("button__fuego");
// const button__agua = document.getElementById("button__agua");
// const button__tierra = document.getElementById("button__tierra");

// button__fuego.addEventListener("click", () => {
//   container.className = "fuego";
// });

// button__agua.addEventListener("click", () => {
//   container.className = "agua";
// });

// button__tierra.addEventListener("click", () => {
//   container.className = "tierra";
// });

// ejercicio 24
// const container = document.getElementById("container")
// const input = document.getElementById("input")

// input.addEventListener("input", () =>{
// container.style.backgroundColor=input.value
// });

// ejercicio 25
const button = document.getElementById("button");

button.addEventListener("mouseenter", () => {
  button.style.position = "absolute";
  button.style.top = "200px";
  button.style.left = "200px";
});

button.addEventListener("mouseout", () => {
  button.style.position = "absolute";
  button.style.top = "400px";
  button.style.left = "400px";
});
