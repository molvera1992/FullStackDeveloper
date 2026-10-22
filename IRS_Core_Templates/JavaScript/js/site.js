// Importar componentes globales (Los que se usan en el _Layout.cshtml)
import { initNavbar } from './3-Services/navbar.js';
// import { intLoadTable } from './5-Features/program.data.js'
import { intLoadTable } from './5-Features/DashboarOee.js'

// Importar helpers o utilidades si necesitas usarlos globalmente



// =========================================================================
// 2. SECCIÓN DE EJECUCIÓN (El orquestador)
// =========================================================================
// Esperamos a que todo el HTML de la página esté cargado antes de ejecutar el código

document.addEventListener('DOMContentLoaded', () => {
    initNavbar()
    intLoadTable()
})