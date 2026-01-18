document.addEventListener("DOMContentLoaded", () => {
  const toggleButtons = document.querySelectorAll(".theme-toggle-btn");
  const themeIcons = document.querySelectorAll(".theme-icon-content");
  const html = document.documentElement;

  // 1. FUNÇÕES DE APLICAÇÃO
  function enableDarkMode() {
    html.setAttribute("data-bs-theme", "dark");
    themeIcons.forEach((icon) => {
      icon.textContent = "light_mode"; // Ícone de sol para voltar ao claro
      icon.classList.add("text-warning");
    });
    localStorage.setItem("theme", "dark");
  }

  function enableLightMode() {
    html.setAttribute("data-bs-theme", "light");
    themeIcons.forEach((icon) => {
      icon.textContent = "dark_mode"; // Ícone de lua para ir para o escuro
      icon.classList.remove("text-warning");
    });
    localStorage.setItem("theme", "light");
  }

  // 2. LÓGICA DE INICIALIZAÇÃO (FORÇAR CLARO POR PADRÃO)
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    enableDarkMode();
  } else {
    // Se for a primeira vez ou se o salvo for 'light', inicia no claro
    enableLightMode();
  }

  // 3. EVENTO DE CLIQUE (Sincronizado)
  toggleButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (html.getAttribute("data-bs-theme") === "light") {
        enableDarkMode();
      } else {
        enableLightMode();
      }
    });
  });
});
