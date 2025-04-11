//const darkModeToggle = document.getElementById("darkModeToggle");

// Verificar preferencia guardada o del sistema
//const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
//const savedMode = localStorage.getItem("darkMode");

//if (savedMode === "enabled" || (!savedMode && prefersDarkMode)) {
//  document.body.classList.add("dark-mode");
//  darkModeToggle.textContent = "☀️ Modo Claro";
//}

// Alternar modo al hacer clic
//darkModeToggle.addEventListener("click", () => {
//  document.body.classList.toggle("dark-mode");
//  const isDarkMode = document.body.classList.contains("dark-mode");

  // Guardar preferencia
// localStorage.setItem("darkMode", isDarkMode ? "enabled" : "disabled");

  // Cambiar texto del botón
//  darkModeToggle.textContent = isDarkMode ? "☀️ Modo Claro" : "🌙 Modo Oscuro";
//  darkModeToggle.setAttribute('aria-pressed', isDarkMode);
//});
document.getElementById('darkModeToggle').addEventListener('click', function() {
  // Alternar clase en el body
  document.body.classList.toggle('dark-mode');
  const isDarkMode = document.body.classList.contains('dark-mode');
  
  // Actualizar accesibilidad
  this.setAttribute('aria-label', isDarkMode ? 'Activar modo claro' : 'Activar modo oscuro');
  this.setAttribute('aria-pressed', isDarkMode);
  
  // Guardar preferencia
  localStorage.setItem('darkMode', isDarkMode ? 'enabled' : 'disabled');
});

// Cargar preferencia al inicio
if (localStorage.getItem('darkMode') === 'enabled') {
  document.body.classList.add('dark-mode');
  const btn = document.getElementById('darkModeToggle');
  btn.setAttribute('aria-pressed', 'true');
}