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

// Reemplaza tu línea 46 con esto
function descargarFactura() {
  const jspdf_lib = window.jspdf;

  if (!jspdf_lib) {
    console.error("Error: La librería jsPDF no se ha cargado aún.");
    return;
  }

  // Asignación directa si el destructuring falla
  const doc = new jspdf_lib.jsPDF();
  // --- ENCABEZADO ---
  doc.setFillColor(225, 29, 72); // Rojo Central Madeirense
  doc.rect(0, 0, 210, 30, "F");

  doc.setTextColor(255, 255, 255);
  doc.setFontSize(22);
  doc.setFont("helvetica", "bold");
  doc.text("CENTRAL MADEIRENSE, C.A.", 15, 20);

  // --- DATOS FISCALES ---
  doc.setTextColor(100, 100, 100);
  doc.setFontSize(10);
  doc.setFont("helvetica", "normal");
  doc.text("Rif: J-00021502-0", 15, 40);
  doc.text("Sede: La Lagunita, Caracas", 15, 45);
  doc.text("Fecha: 14/01/2026  |  19:06", 15, 50);

  // --- DATOS DEL CLIENTE ---
  doc.setFont("helvetica", "bold");
  doc.text("CLIENTE:", 120, 40);
  doc.setFont("helvetica", "normal");
  doc.text("Bryant Facenda", 120, 45);
  doc.text("V-30.021.768", 120, 50);

  // --- TABLA DE PRODUCTOS ---
  doc.setFillColor(245, 245, 245);
  doc.rect(15, 60, 180, 8, "F");
  doc.setFont("helvetica", "bold");
  doc.text("Descripción", 20, 65);
  doc.text("Cant.", 130, 65);
  doc.text("Total Bs.", 160, 65);

  doc.setFont("helvetica", "normal");
  let y = 75;
  const productos = [
    { desc: "Harina de Maíz P.A.N. 1kg", cant: "2", precio: "88,24" },
    { desc: "Leche Completa Campestre 1L", cant: "1", precio: "80,20" },
    { desc: "Aceite Mazeite 1L", cant: "1", precio: "215,50" },
  ];

  productos.forEach((item) => {
    doc.text(item.desc, 20, y);
    doc.text(item.cant, 135, y);
    doc.text(item.precio, 165, y);
    y += 10;
  });

  // --- TOTALES ---
  doc.line(15, y, 195, y);
  y += 10;
  doc.setFontSize(14);
  doc.setFont("helvetica", "bold");
  doc.text("TOTAL A PAGAR:", 100, y);
  doc.text("Bs. 1.450,00", 160, y);

  y += 10;
  doc.setFontSize(10);
  doc.setTextColor(150, 150, 150);
  doc.text("Ref: $42,00  |  Tasa BCV: 34,52 Bs/$", 100, y);

  // --- PIE DE PÁGINA ---
  doc.setFontSize(8);
  doc.setFont("helvetica", "italic");
  doc.text(
    "¡Gracias por preferirnos! Somos lo que te llevas a casa.",
    105,
    280,
    { align: "center" }
  );

  // DESCARGA
  doc.save("Factura_CM_Bryant.pdf");
}

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
