Libreta de Contactos
Este proyecto, denominado "Libreta de Contactos", fue desarrollado como parte de una prueba técnica para la empresa Carvajal. La aplicación proporciona una plataforma simple y efectiva para gestionar una lista de contactos personales.

Características Principales
Registro y Autenticación: La aplicación ofrece un proceso de registro y autenticación para los usuarios, permitiéndoles acceder de manera segura a sus contactos.

Tabla de Contactos: Después del inicio de sesión, los usuarios son recibidos con una tabla que muestra sus contactos existentes. En caso de no tener contactos, la tabla se presenta vacía.

Creación y Edición de Contactos: Los usuarios pueden crear nuevos contactos proporcionando información detallada, incluyendo nombre, apellido, correo electrónico, teléfono, celular, dirección y su propio identificador de usuario.

Edición y Eliminación de Contactos: Cada contacto en la tabla tiene opciones para editar o eliminar, brindando flexibilidad al usuario para gestionar su lista de contactos.

Tecnologías Utilizadas
Backend:

Node.js y Express para la lógica del servidor.
MySQL para el almacenamiento de datos.
Bcrypt para encriptar y asegurar las contraseñas.
Sequelize como ORM para facilitar la interacción con la base de datos.
JSON Web Tokens (JWT) para la autenticación y gestión de sesiones.
Frontend:

React y React Router para la interfaz de usuario dinámica.
Instrucciones de Configuración
Backend
Ingresa a la carpeta backend.
Configura las credenciales de la base de datos en el archivo src/config/database.js.
Ejecuta el comando npm install para instalar las dependencias.
Inicia el servidor con el comando npm start.
El API estará disponible en http://localhost:4000.
Frontend
Ingresa a la carpeta frontend.
Ejecuta el comando npm install para instalar las dependencias.
Inicia la aplicación React con el comando npm start.
La aplicación estará disponible en http://localhost:3000.
Contribución
Si deseas contribuir al proyecto, sigue los pasos indicados en la sección de Contribución del archivo README.

Licencia
Este proyecto está licenciado bajo la Licencia MIT.

Contacto
Si tienes alguna pregunta o comentario, no dudes en contactarme en tu-correo@example.com. ¡Gracias por tu interés en la Libreta de Contactos!