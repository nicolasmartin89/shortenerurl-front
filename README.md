# 🌐 ShortenerURL - Frontend

ShortenerURL es la interfaz de usuario de la aplicación ShortenerURL, diseñada para proporcionar una experiencia de usuario intuitiva y eficiente al acortar URLs largas.
Esta aplicación complementa el backend existente, ofreciendo una plataforma completa para la gestión y administración de enlaces acortados. 🚀

## 🗂️ Tabla de Contenidos

- [✨ Funcionalidades](#-funcionalidades)
- [⚙️ Instalación](#-instalación)
- [🛠️ Uso](#-uso)
- [🚀 Deploy](#-deploy)
- [🧰 Tecnologías Utilizadas](#-tecnologías-utilizadas)

## ✨ Funcionalidades

✅ Interfaz amigable para acortar URLs de manera rápida y sencilla.  
✅ Visualización y gestión de enlaces acortados.  
✅ Acceso a estadísticas detalladas sobre el uso de los enlaces.  
✅ Integración segura con el backend mediante autenticación JWT.  

## ⚙️ Instalación

¡Sigue estos pasos para configurar el frontend en tu entorno local! 🛠️

1. **Clona el repositorio:**

git clone https://github.com/nicolasmartin89/shortenerurl-front.git  
cd shortenerurl-front  

2. **Instala las dependencias:**

Asegúrate de tener Node.js y npm instalados en tu sistema. Luego, ejecuta:  

npm install  

3. **Configura las variables de entorno:**

Crea un archivo `.env` en la raíz del proyecto con el siguiente contenido:  

VITE_API_URL=http://localhost:8080  

Asegúrate de que la URL apunte al backend de ShortenerURL.  

4. **Inicia la aplicación:**

npm run dev  

La aplicación estará disponible en:  

http://localhost:5173  

## 🛠️ Uso

Una vez que la aplicación esté en funcionamiento, podrás:

- Ingresar URLs largas en el campo designado para obtener una versión acortada.
- Ver una lista de tus enlaces acortados y sus estadísticas asociadas.
- Eliminar o gestionar tus enlaces según sea necesario.

Para una experiencia completa, asegúrate de que el backend de ShortenerURL esté configurado y ejecutándose correctamente.  
Puedes encontrar más información sobre el backend en su [repositorio](https://github.com/nicolasmartin89/shortenerurl).  

## 🚀 Deploy

El proyecto está deployado en **Netlify** y disponible en el siguiente dominio:

🔗 [https://inquisitive-capybara-d6f091.netlify.app/](https://inquisitive-capybara-d6f091.netlify.app/)  

Puedes acceder a la aplicación directamente desde el navegador y comenzar a acortar enlaces de inmediato.

## 🧰 Tecnologías Utilizadas

Este proyecto fue construido con las siguientes herramientas:

- **Vite** ⚡ (Empaquetador de aplicaciones web)
- **React** ⚛️ (Biblioteca de interfaces de usuario)
- **Tailwind CSS** 🎨 (Framework de estilos CSS)
- **Axios** 🔗 (Cliente HTTP para realizar solicitudes al backend)

Estas tecnologías se combinaron para crear una aplicación rápida, moderna y fácil de mantener.

---

¡Gracias por utilizar ShortenerURL! Si tienes alguna pregunta o sugerencia, no dudes en abrir un issue en el repositorio. 😊

