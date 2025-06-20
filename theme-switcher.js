document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('themeToggle'); // Este elemento puede no existir en todas las páginas
    const body = document.body;

    // 1. Cargar la preferencia del usuario
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
        body.classList.add(currentTheme); // Aplica la clase guardada
        // Intenta actualizar el texto del botón SOLO si el botón existe en esta página
        if (themeToggle) {
            updateButtonText(currentTheme);
        }
    } else {
        // Si no hay preferencia, establece un tema por defecto (puedes elegir 'dark-theme' o 'light-theme')
        body.classList.add('light-theme'); // Por defecto, iniciamos en el tema claro
        localStorage.setItem('theme', 'light-theme');
        if (themeToggle) {
            updateButtonText('light-theme');
        }
    }

    // Función para actualizar el texto del botón (solo relevante si el botón existe)
    function updateButtonText(theme) {
        if (themeToggle) { // Asegúrate de que themeToggle existe antes de usarlo
            if (theme === 'dark-theme') {
                themeToggle.textContent = 'Modo Claro';
            } else {
                themeToggle.textContent = 'Modo Oscuro';
            }
        }
    }

    // 2. Escuchar clics en el botón (solo si el botón existe en esta página)
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            if (body.classList.contains('light-theme')) {
                body.classList.remove('light-theme');
                body.classList.add('dark-theme');
                localStorage.setItem('theme', 'dark-theme');
                updateButtonText('dark-theme');
            } else {
                body.classList.remove('dark-theme');
                body.classList.add('light-theme');
                localStorage.setItem('theme', 'light-theme');
                updateButtonText('light-theme');
            }
        });
    }
});