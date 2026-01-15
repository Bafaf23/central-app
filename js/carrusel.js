const carrusel = document.getElementById("anuncio-carrusel");
const dots = document.querySelectorAll(".dot");
let interval;

function updateDot() {
  const index = Math.round(
    carrusel.scrollLeft / carrusel.firstElementChild.clientWidth
  );
  dots.forEach((dot, i) => {
    if (i === index) {
      dot.classList.add("bg-red-600", "w-6");
      dot.classList.remove("bg-gray-300", "w-2");
    } else {
      dot.classList.remove("bg-red-600", "w-6");
      dot.classList.add("bg-gray-300", "w-2");
    }
  });
}

function startAutoPlay() {
  interval = setInterval(() => {
    const maxScrolLetf = carrusel.scrollWidth - carrusel.offsetWidth;
    if (carrusel.scrollLeft >= maxScrolLetf - 10) {
      carrusel.scrollTo({ left: 0, behavior: "smooth" });
    } else {
      carrusel.scrollBy({ left: carrusel.offsetWidth, behavior: "smooth" });
    }
  }, 4000);
}

function stopAutoPlay() {
  clearInterval(interval);
}

carrusel.addEventListener("scroll", updateDot);
carrusel.addEventListener("touchstart", stopAutoPlay);
carrusel.addEventListener("touchend", startAutoPlay);

startAutoPlay();

/* carrusel.addEventListener("scroll", () => {
  const index = Math.round(carrusel.scrollLeft / carrusel.offsetWidth);

  dots.forEach((dot, i) => {
    if (i === index) {
      dot.classList.remove("bg-gray-300", "w-2");
      dot.classList.add("bg-red-600", "w-6");
    } else {
      dot.classList.remove("bg-red-600", "w-6");
      dot.classList.add("bg-gray-300", "w-2");
    }
  });
}); */
