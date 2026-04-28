# AstroWeb SPA

AstroWeb es una Aplicación de una Sola Página (SPA) desarrollada con React que simula un portal interactivo de reclutamiento para misiones espaciales. Este proyecto fue diseñado con un enfoque estricto en el rendimiento frontend, la navegación sin recargas y la creación de interfaces de usuario avanzadas sin depender de recursos gráficos externos.

## Características Principales

* **Arquitectura SPA:** Navegación instantánea y fluida entre vistas sin recargar el navegador, garantizando una experiencia de usuario similar a una aplicación nativa.
* **Navegación Dinámica (Routing):** Implementación de `react-router-dom` para gestionar el cambio de componentes (Inicio y Formulario de Reclutamiento) basado en la URL.
* **Formularios Controlados:** Uso del hook `useState` para gestionar el estado de los inputs en tiempo real y procesamiento de eventos `onSubmit` para el manejo de datos sin recargar la vista.
* **UI/UX Avanzado (Glassmorphism):** Diseño de interfaz moderno utilizando la técnica de cristal esmerilado, logrando profundidad y elegancia mediante CSS puro.
* **Recursos 100% Basados en Código:** * Cero dependencias de imágenes externas (.jpg, .png).
  * Construcción de planetas mediante gradientes y sombras (CSS).
  * Ilustración del astronauta generada completamente a través de trazados vectoriales (SVG en línea).
* **Parallax Interactivo 3D:** Efecto visual dinámico impulsado por el evento `onMouseMove` global, que calcula la posición del cursor para desplazar el fondo estrellado y los planetas a diferentes velocidades, creando un efecto de profundidad.

## Tecnologías Utilizadas

* **Framework:** React.js
* **Entorno/Bundler:** Vite
* **Enrutamiento:** React Router DOM
* **Estilos:** CSS3 Moderno (Variables, Flexbox, Grid, Animaciones, Backdrop-filter)
* **Gráficos:** SVG Puro

## Instalación y Configuración Local

Para ejecutar este proyecto en un entorno de desarrollo local, siga las siguientes instrucciones:

1. Clone este repositorio:
   ```bash
   git clone [https://github.com/usian24/SPA_SPACE.git](https://github.com/usian24/SPA_SPACE.git)
Acceda al directorio del proyecto:

Bash
cd astroweb-react-spa
Instale las dependencias necesarias:

Bash
npm install
Inicie el servidor de desarrollo local:

Bash
npm run dev
Abra su navegador web y diríjase a la ruta indicada en la consola (por defecto http://localhost:5173/).

Autor
Desarrollado por Jhon (Lucian)
Estudiante de Ingeniería de Software con Inteligencia Artificial - SENATI