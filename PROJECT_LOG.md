# Bitácora del Proyecto Bookier+

Este documento registra el progreso, las decisiones técnicas y las funcionalidades implementadas en el proyecto Bookier+.

## Changelog (Registro de Cambios)

### 29 de Julio, 2025

*   **Formulario de Reseñas (v1):**
    *   Se implementó un nuevo componente `ReviewForm` en la pantalla de detalle del libro.
    *   Se añadió la lógica para la validación de campos (calificación y texto de la reseña).
    *   Se implementó un guardado simulado con una alerta de éxito al enviar.
    *   Se mejoró el componente `StarRating` para que sea interactivo y reutilizable tanto para mostrar calificaciones como para seleccionarlas en un formulario.

*   **Pantalla de Detalle del Libro (v1):**
    *   Se implementó la navegación desde la tarjeta del libro a una pantalla de detalle.
    *   Se creó una ruta dinámica (`/book/[id].tsx`) usando Expo Router.
    *   La pantalla de detalle ahora busca y muestra la información completa del libro seleccionado (imagen, título, autor, descripción, rating).
    *   Se integró el botón de "Agregar/Quitar de Favoritos", sincronizado con el estado global.

---

## Pasos del Desarrollo

1.  **Inicialización y Configuración del Proyecto:**
    *   Análisis inicial de los requisitos del proyecto.
    *   Configuración de la estructura básica del proyecto con Expo Router.

2.  **Implementación de la Navegación Principal:**
    *   Se implementó el menú lateral principal (Drawer Navigator) con las secciones `Home` y `Configuración`.
    *   Se anidó el navegador por pestañas (Tab Navigator) para `Libros`, `Favoritos` y `Noticias` dentro de la pantalla `Home`.

3.  **Depuración del Entorno y Build para Web:**
    *   Se encontraron y resolvieron conflictos de dependencias importantes entre `react@19`, `react-native` y `expo@49`.
    *   Se actualizó el proyecto a una base estable con **Expo SDK 51**.
    *   Se corrigieron múltiples problemas de configuración en `babel.config.js` y `tailwind.config.js` para habilitar la compilación para la web.
    *   Se solucionaron errores persistentes de TypeScript (propiedad `className` no encontrada) creando un archivo `nativewind-env.d.ts` y configurando `tsconfig.json` correctamente.

4.  **Pantalla "Libros" (Pestaña Principal):**
    *   Se refactorizó la pantalla para mostrar los libros agrupados por categoría.
    *   Se implementaron listas horizontales (`FlatList`) para cada categoría.
    *   Se mejoró el espaciado entre las tarjetas de los libros usando `ItemSeparatorComponent`.
    *   Se buscaron y actualizaron las portadas de los libros usando la API de Google Books.
    *   Se creó e integró un componente reutilizable `StarRating`.

5.  **Sistema de Favoritos:**
    *   Se implementó una solución de estado global usando la **Context API de React** (`FavoritesContext`).
    *   Se integró **AsyncStorage** para el guardado persistente de favoritos en el dispositivo.
    *   Se añadió la funcionalidad de "Agregar a Favorito" (ícono de corazón) en la pantalla de `Libros`.

6.  **Pantalla "Favoritos":**
    *   Se desarrolló la pantalla para mostrar la lista de todos los libros marcados como favoritos.
    *   Se implementó la funcionalidad de "Quitar de Favoritos" (ícono de basura).

7.  **Calidad de Código y Herramientas:**
    *   Se instaló y configuró **ESLint** con las reglas estrictas de **Google** para un código de alta calidad.
    *   Se instaló y configuró **Prettier** para un formateo de código automático y consistente.
    *   Se integraron ESLint y Prettier para que funcionen en conjunto y con VSCode, proveyendo feedback en tiempo real.

---

## Mejoras Posibles y Próximos Pasos

*   **Sistema de Reseñas (v2):**
    *   Guardar las reseñas localmente (AsyncStorage) asociadas al ID del libro.
    *   Mostrar las reseñas guardadas en la pantalla de detalle.
*   **Backend e Integración con la Nube (AWS):**
    *   Reemplazar el `books.json` local con una API real usando **API Gateway + Lambda**.
    *   Guardar los datos de los libros y las reseñas de los usuarios en **DynamoDB**.
    *   Implementar autenticación de usuarios con **AWS Cognito**.
*   **Mejoras de UI/UX:**
    *   Implementar el switch para modo oscuro/claro en la pantalla de `Configuración`.
    *   Añadir animaciones al renderizado de las tarjetas o a las transiciones de pantalla.
    *   Desarrollar la pestaña `Noticias`, actualmente vacía.
*   **Refinamiento del Código:**
    *   Crear un archivo `types.ts` dedicado para los tipos de TypeScript compartidos.
    *   Reemplazar todos los usos de `any` con tipos más estrictos y específicos.
    *   Añadir tests unitarios y de componentes usando **Jest** y **React Native Testing Library**.

---

## Funcionalidades Clave Implementadas en el Proyecto

*   **Navegación Moderna:** Expo Router con una estructura anidada de Drawer y Tab Navigator.
*   **Gestión de Estado Global:** Estado centralizado para favoritos usando la Context API de React.
*   **Persistencia de Datos:** Los favoritos se guardan localmente en el dispositivo del usuario a través de AsyncStorage.
*   **Herramientas Profesionales:**
    *   **TypeScript:** Para tipado estático y mayor seguridad en el código.
    *   **Tailwind CSS / NativeWind v4:** Para un enfoque de estilos moderno y "utility-first".
    *   **ESLint (Config de Google):** Para forzar reglas de calidad y estilo de código estrictas.
    *   **Prettier:** Para un formateo de código automático y consistente en todo el proyecto.
*   **Componentes Reutilizables:** Componentes modulares como `StarRating` para un código limpio y mantenible.