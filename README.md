# React boilerplate

Este repositorio contiene el código para del React boilerplate. A continuación se detalla el uso de **Commitlint**, **Commitizen** y **Vercel** para asegurar una colaboración efectiva y un flujo de trabajo ágil.

## Contenido

- [React boilerplate](#react-boilerplate)
  - [Contenido](#contenido)
  - [Introducción](#introducción)
  - [Uso de Commitlint](#uso-de-commitlint)
    - [Reglas de Commitlint](#reglas-de-commitlint)
    - [Ejemplo de Mensaje de Commit](#ejemplo-de-mensaje-de-commit)
    - [Cómo Funciona](#cómo-funciona)
  - [Uso de Commitizen](#uso-de-commitizen)
    - [Cómo Usar Commitizen](#cómo-usar-commitizen)
  - [Contribuciones](#contribuciones)
    - [Consideraciones Finales](#consideraciones-finales)

## Introducción

Para mantener un historial de commits limpio y comprensible, utilizamos **Commitlint** y **Commitizen**. Además, implementamos **Vercel** para la creación de entornos efímeros para cada rama de desarrollo.

## Uso de Commitlint

**Commitlint** asegura que los mensajes de commit sigan un formato específico. Esto nos ayuda a mantener un registro claro de los cambios en el proyecto.

### Reglas de Commitlint

Los mensajes de commit deben seguir el siguiente formato:

<tipo>(<ámbito>): <asunto>

- **tipo**: (ej. `feat`, `fix`, `chore`, etc.)
- **ámbito**: (opcional, puede ser el nombre de un componente o archivo)
- **asunto**: Debe ser una breve descripción en minúsculas, sin puntuación al final.

### Ejemplo de Mensaje de Commit

feat: agregar nueva sección de testimonios

### Cómo Funciona

Cada vez que hagas un commit, **Commitlint** validará el mensaje. Si no cumple con las reglas, el commit será rechazado. Asegúrate de que tu mensaje esté correctamente formateado antes de hacer el commit.

## Uso de Commitizen

**Commitizen** facilita la creación de mensajes de commit que cumplan con las reglas de **Commitlint**. Puedes usarlo para generar un mensaje de commit a través de una interfaz de línea de comandos.

### Cómo Usar Commitizen

1. Asegúrate de que tus cambios estén listos para ser commitados (usa `git add`).
2. Ejecuta el siguiente comando:

   ```bash
   yarn commit

   ```

3. Sigue las instrucciones en pantalla para seleccionar el tipo de cambio, el ámbito (opcional) y escribir el asunto y la descripción del commit.

## Integración con Vercel

Vercel nos permite crear entornos efímeros automáticamente para cada pull request o rama de desarrollo. Esto facilita la revisión de cambios antes de que se integren en la rama principal.
Cómo Configurar Vercel

    1. Conectar el Repositorio: Asegúrate de que tu repositorio esté conectado a Vercel.
    2. Despliegue Automático: Cada vez que se crea una nueva rama o se realiza un pull request, Vercel desplegará automáticamente la aplicación en un entorno aislado.
    3. Verificación de Cambios: Los desarrolladores pueden ver y probar los cambios en el entorno efímero proporcionado por Vercel.
    4. Hacer git push

Despliegue Manual (si es necesario)

Para desplegar manualmente usando Vercel, puedes usar el siguiente comando:

yarn vercel:preview

## Uso de Docker

Docker permite contenerizar la aplicación, facilitando el desarrollo, pruebas y despliegue. A continuación se detalla cómo construir y ejecutar la aplicación utilizando un Dockerfile.
Dockerfile

Asegúrate de tener un Dockerfile configurado en la raíz de tu proyecto. Un ejemplo de un Dockerfile para tu proyecto puede verse así:

```bash
# Usar la imagen oficial de Node.js como base
FROM node:16

# Establecer el directorio de trabajo
WORKDIR /usr/src/app

#  Copiar los archivos de package.json y yarn.lock
COPY package*.json ./

#  Instalar dependencias
RUN yarn install

#  Copiar el resto de la aplicación
COPY . .

#  Construir la aplicación
RUN yarn build

# Exponer el puerto en el que la app estará corriendo
EXPOSE 3000

#Comando para ejecutar la aplicación
CMD ["yarn", "start"]
```

Construir la Imagen de Docker

Para construir la imagen de Docker, ejecuta el siguiente comando en la raíz de tu proyecto:

docker build -t pixelwise-official-site .

Ejecutar el Contenedor

Para ejecutar el contenedor en modo interactivo, usa el siguiente comando:

docker run -p 3000:80 pixelwise-official-site

Accede a la aplicación en tu navegador en http://localhost:3000.

## Contribuciones

¡Apreciamos tus contribuciones! Asegúrate de seguir las normas de commit mencionadas anteriormente y crea pull requests para cualquier cambio que desees proponer.

¡Gracias por colaborar en el proyecto PixelWise! Si tienes preguntas, no dudes en comunicarte con el equipo.

### Consideraciones Finales

- **Ajustes**: Siente la libertad de ajustar cualquier sección para adaptarla a las necesidades específicas de tu equipo y proyecto.
- **Actualización**: Asegúrate de actualizar este documento según evolucione el proyecto o cambien los procesos de trabajo.
