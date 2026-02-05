import { validationInput, validateCard, namePatter } from "./regex.js";
import { showToast } from "./alertZ.js";
import {
  bancamigaBins,
  banesBins,
  bbvaBins,
  banplusBins,
  bdvBins,
  delTesoroBins,
  mercaltilBins,
} from "./binBanck.js";

const salveCard = document.getElementById("salveCard");

salveCard.addEventListener(`click`, (e) => {
  e.preventDefault();
  const nameCardInput = document.getElementById("nameCard");
  const numberCardInput = document.getElementById("numberCard");
  const expiryValue = dataCardInput.value;

  let numberCard = numberCardInput.value;
  let nameCard = nameCardInput.value;

  if (nameCard === ``) {
    showToast(`EL nombre no puede estar vacio`);
    nameCardInput.focus();
    return;
  }

  if (numberCard === ``) {
    showToast(`el numero de tarjeta no puede estar vacios`);
    numberCardInput.focus();
    return;
  }

  if (!validationInput(nameCard, namePatter)) {
    showToast(`Error en el formato del nombre`, `error`);
    nameCardInput.classList.remove(
      "border-gray-100",
      "dark:border-slate-800",
      "border-green-500",
      "dark:border-green-500"
    );
    nameCardInput.classList.add("border-red-500", "dark:border-red-500");
    return;
  } else {
    // Limpiamos el error y aplicamos éxito
    nameCardInput.classList.remove(
      "border-gray-100",
      "dark:border-slate-800",
      "border-red-500",
      "dark:border-red-500"
    );
    nameCardInput.classList.add("border-green-500", "dark:border-green-500");
  }

  if (!validateCard(numberCard)) {
    showToast(`Tarjeta invalida`, `error`);
    numberCardInput.classList.remove(
      "border-gray-100",
      "dark:border-slate-800",
      "border-green-500",
      "dark:border-green-500"
    );
    numberCardInput.classList.add("border-red-500", "dark:border-red-500");
    return;
  } else {
    // Limpiamos el error y aplicamos éxito
    numberCardInput.classList.remove(
      "border-gray-100",
      "dark:border-slate-800",
      "border-red-500",
      "dark:border-red-500"
    );
    numberCardInput.classList.add("border-green-500", "dark:border-green-500");
  }

  if (expiryValue.length === 5) {
    const currentYear = new Date().getFullYear() % 100;
    const userYear = parseInt(expiryValue.substring(3, 5));
    if (userYear < currentYear) {
      showToast("La tarjeta está vencida", "error");
      return;
    }
  }

  showToast(`La tarjeta fue añadida correctamente`, `success`);
  clearForm();
});

/* Previsualizacion de la tarjeta con los datos ingresados por el cliente */
const nameCardInput = document.getElementById("nameCard");
const numberCardInput = document.getElementById("numberCard");
const dataCardInput = document.getElementById("dataCard");

const nameCardPreview = document.getElementById("card-name-preview");
const numberCardPreview = document.getElementById("card-number-preview");
const dataCardPreview = document.getElementById("card-expiry-preview");

nameCardInput.addEventListener(`input`, () => {
  nameCardPreview.textContent = nameCardInput.value || `NOMBRE Y APELLIDO`;
});

numberCardInput.addEventListener(`input`, () => {
  let val = numberCardInput.value;
  numberCardPreview.textContent = val
    .replace(/\s?/g, "")
    .replace(/(\d{4})/g, "$1 ")
    .trim();
});

dataCardInput.addEventListener(`input`, (e) => {
  let value = e.target.value.replace(/\D/g, "");

  //formato de fecha
  if (value.length > 2) {
    value = value.substring(0, 2) + `/` + value.substring(2, 4);
  }

  e.target.value = value;

  dataCardPreview.textContent = value || `MM/AA`;

  if (value.length === 5) {
    const getYear = new Date().getFullYear() % 100;
    const userYear = parseInt(value.substring(3, 5));

    if (userYear < getYear) {
      showToast(`La tarjata esta vencida`, `error`);
      dataCardInput.classList.remove(
        "border-gray-100",
        "dark:border-slate-800",
        "border-green-500",
        "dark:border-green-500"
      );
      dataCardInput.classList.add("border-red-500", "dark:border-red-500");
    } else {
      dataCardInput.classList.remove(
        "border-gray-100",
        "dark:border-slate-800",
        "border-red-500",
        "dark:border-red-500"
      );
      dataCardInput.classList.add("border-green-500", "dark:border-green-500");
    }
  }
});

/**
 * funcion dedicadda a limpiar la tarjeta y el formulario despues de guardada la informacion de la tarjeta
 */
function clearForm() {
  let form = document.getElementById("formCard");
  form.reset();

  // 2. Resetear la Vista Previa (Preview)
  document.getElementById("card-name-preview").textContent = "Nombre Apellido";
  document.getElementById("card-number-preview").textContent =
    "**** **** **** ****";
  document.getElementById("card-expiry-preview").textContent = "MM/AA";

  // 3. Limpiar estilos de validación (bordes verdes/rojos)
  const inputs = form.querySelectorAll("input");
  inputs.forEach((input) => {
    input.classList.remove(
      "border-red-500",
      "border-green-500",
      "dark:border-red-500",
      "dark:border-green-500"
    );
    input.classList.add("border-gray-100", "dark:border-slate-800");
  });
}
