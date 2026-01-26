/* const btn = document.getElementById("menuButton");
const menu = document.getElementById("dropdownMenu");

btn.addEventListener("click", (e) => {
  e.stopPropagation(); // Evita que el click cierre el menú inmediatamente
  menu.classList.toggle("hidden");
});

// Cerrar si haces click afuera
document.addEventListener("click", () => {
  menu.classList.add("hidden");
}); */

/**
 * evento de despliege de lista de tiendad dispnibles
 */
const tiendasMovil = document.getElementById("tiendasMovil");
const optionMovil = document.getElementById("dropdownMenuMovil");

tiendasMovil.addEventListener(`click`, (e) => {
  e.stopPropagation();
  optionMovil.classList.toggle("invisible");
  optionMovil.classList.toggle("visible");
  optionMovil.classList.toggle("opacity-0");
});

/**
 * envento de despliege de opciones de monedas
 */

const verprecios = document.getElementById("verpercio");
const opcionesMoneda = document.getElementById("dropdownMenuMonedaMovil");

verprecios.addEventListener(`click`, (e) => {
  e.stopPropagation();
  opcionesMoneda.classList.toggle("visible");
  opcionesMoneda.classList.toggle("invisible");
  opcionesMoneda.classList.toggle("opacity-0");
});
