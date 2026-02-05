/**
 * funcion de notificacion
 * @param {string} message
 */

let toastTimer;

export function showToast(message, type = "error") {
  const toast = document.getElementById("toast");
  const toastText = document.getElementById("toast-message");
  const iconContainer = document.getElementById("icon-toast");

  clearTimeout(toastTimer);

  if (type === "error") {
    iconContainer.className = "bg-red-500/10 p-2 rounded-xl text-red-500";
    iconContainer.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i>`;
  } else {
    iconContainer.className = "bg-green-500/10 p-2 rounded-xl text-green-500";
    iconContainer.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
  }

  toastText.textContent = message;
  toast.classList.replace("opacity-0", "opacity-100");
  toast.classList.replace("top-5", "top-8");
  toast.classList.remove("pointer-events-none");

  // Auto-ocultar después de 3 segundos
  toastTimer = setTimeout(() => {
    toast.classList.replace("opacity-100", "opacity-0");
    toast.classList.replace("top-8", "top-5");
    toast.classList.add("pointer-events-none");
  }, 3000);
}
