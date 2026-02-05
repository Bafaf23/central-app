/**
 * funcion de validadcion de datos ingresador por el usurio
 * @param {*} regex
 * @param {*} value
 * @returns {boolean}
 */
export function validationInput(value, regex) {
  return regex.test(value);
}

//pattern
export const namePatter =
  /^[a-zA-ZáéíóúñÁÉÍÓÚÑ][a-zA-ZáéíóúñÁÉÍÓÚÑ_" "]{5,29}$/;

/* validacion de tarjeta Algoritmo de Luhn */

/**
 * Verifica si un número cumple con el Algoritmo de Luhn
 * @param {number} cardNumber - el numero de tarjeta (solo dijitos)
 * @returns {Boolean}
 */

export function validateCard(cardNumber) {
  let sanitized = cardNumber.replace(/[- ]/g, "");

  if (!/^\d{13,19}$/.test(sanitized)) return false;

  //algoridmo de luhn
  let sum = 0;
  let shouldDouble = false;

  for (let i = sanitized.length - 1; i >= 0; i--) {
    let digit = parseInt(sanitized.charAt(i));
    if (shouldDouble) {
      if ((digit *= 2) > 9) digit -= 9;
    }
    sum += digit;
    shouldDouble = !shouldDouble;
  }
  return sum % 10 === 0;
}
