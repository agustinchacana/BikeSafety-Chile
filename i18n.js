// ==========================================================
//   DICCIONARIO GLOBAL DE TRADUCCIÓN - BIKE SAFETY CHILE
// ==========================================================
const translations = {
    es: {
        // Enlaces de navegación comunes
        nav_inicio: "Inicio",
        nav_simulador: "Simulador DH",
        nav_precios: "Precios y Tienda",
        nav_ruta: "Rutas",
        nav_contacto: "Contacto",
        
        // Textos para la página de Inicio u otras secciones
        titulo_principal: "Seguridad y Rendimiento en Mountain Bike",
        desc_principal: "La guía definitiva sobre equipamiento protector, normativas y simulación de rendimiento para descensos en Chile.",
        
        // Textos del Simulador
        sim_titulo: "Simulador Definitivo de Descenso (DH)",
        sim_desc: "Desbloquea niveles, adquiere protecciones y bicicletas de gama alta según tu progreso.",
        dinero: "Dinero Actual",
        wins_amateur: "Victorias Amateur",
        wins_nacional: "Victorias Nacionales",
        salud: "Estado de Salud",
        sano: "Sano",
        lesionado: "Lesionado",
        btn_entrenar: "🚴 Entrenar en el Cerro",
        btn_competir: "🏁 Competir en el Nivel",
        btn_hospital: "🏥 Ir al Hospital (Curarse)",
        log_titulo: "Registro de Actividad",
        log_init: "Bienvenido al simulador. Prepárate para descender a fondo."
    },
    en: {
        // Common Navigation links
        nav_inicio: "Home",
        nav_simulador: "DH Simulator",
        nav_precios: "Pricing & Shop",
        nav_ruta: "Trails",
        nav_contacto: "Contact",
        
        // Main page texts
        titulo_principal: "Mountain Bike Safety & Performance",
        desc_principal: "The ultimate guide on protective gear, standards, and performance simulation for downhill riding in Chile.",
        
        // Simulator texts
        sim_titulo: "Ultimate DH Downhill Simulator",
        sim_desc: "Unlock levels, acquire high-end protection and top-tier bikes as you progress.",
        dinero: "Current Money",
        wins_amateur: "Amateur Wins",
        wins_nacional: "National Wins",
        salud: "Health Status",
        sano: "Healthy",
        lesionado: "Injured",
        btn_entrenar: "🚴 Train on the Hill",
        btn_competir: "🏁 Compete in Level",
        btn_hospital: "🏥 Go to Hospital (Heal)",
        log_titulo: "Activity Log",
        log_init: "Welcome to the simulator. Get ready to ride full speed."
    }
};

// Función global para cambiar el idioma en cualquier pestaña
function cambiarIdioma(lang) {
    localStorage.setItem('idiomaSeleccionado', lang);
    
    // Traducir todos los elementos con atributos data-i18n
    document.querySelectorAll('[data-i18n]').forEach(elemento => {
        const clave = elemento.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][clave]) {
            elemento.innerText = translations[lang][clave];
        }
    });

    // Actualizar también los placeholders si los hay
    document.querySelectorAll('[data-i18n-placeholder]').forEach(elemento => {
        const clave = elemento.getAttribute('data-i18n-placeholder');
        if (translations[lang] && translations[lang][clave]) {
            elemento.placeholder = translations[lang][clave];
        }
    });
}

// Cargar automáticamente el idioma guardado al abrir cualquier página
window.addEventListener('DOMContentLoaded', () => {
    const idiomaGuardado = localStorage.getItem('idiomaSeleccionado') || 'es';
    const selector = document.getElementById('select-idioma');
    if (selector) {
        selector.value = idiomaGuardado;
    }
    cambiarIdioma(idiomaGuardado);
});