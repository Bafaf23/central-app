(function () {
  const themeToggleDarkIcon = document.getElementById("theme-toggle-dark-icon");
  const themeToggleLightIcon = document.getElementById(
    "theme-toggle-light-icon"
  );
  const switchInput = document.getElementById("mode");
  const textMode = document.getElementById("modeText");

  if (!switchInput) return;

  // Función para aplicar el tema e intercambiar iconos al instante
  const applyTheme = (isDark) => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      switchInput.checked = true;
      // Intercambio de iconos instantáneo
      if (themeToggleLightIcon) themeToggleLightIcon.classList.remove("hidden");
      if (themeToggleDarkIcon) themeToggleDarkIcon.classList.add("hidden");

      if (textMode) textMode.textContent = "Modo Claro";
    } else {
      document.documentElement.classList.remove("dark");
      switchInput.checked = false;
      // Intercambio de iconos instantáneo
      if (themeToggleLightIcon) themeToggleLightIcon.classList.add("hidden");
      if (themeToggleDarkIcon) themeToggleDarkIcon.classList.remove("hidden");
      if (textMode) textMode.textContent = "Modo Oscuro";
    }
  };

  // Al cargar la página
  const savedTheme = localStorage.getItem("color-theme");
  const systemPrefersDark = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;
  applyTheme(savedTheme === "dark" || (!savedTheme && systemPrefersDark));

  // Al cambiar el switch (esto ocurre al presionar el botón)
  switchInput.addEventListener("change", function () {
    const shouldBeDark = this.checked;
    applyTheme(shouldBeDark); // Aquí se llama a la función que ahora sí cambia iconos
    localStorage.setItem("color-theme", shouldBeDark ? "dark" : "light");
  });
})();
