# Usa la imagen base personalizada con Apache y Node.js instalado
FROM pixelwisedocker/pixelwise-server:v1.0 AS build

# Instala Yarn globalmente
RUN npm install -g yarn

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia solo los archivos necesarios para instalar dependencias
COPY package.json yarn.lock ./

# Instala las dependencias utilizando yarn
RUN yarn install --frozen-lockfile && yarn cache clean

# Copia el resto de los archivos de la aplicación
COPY . .

RUN yarn add -D @types/react-scroll

RUN echo "declare module 'vite-plugin-eslint';" > src/types/custom.d.ts

# Genera el build de la aplicación (carpeta 'dist')
RUN yarn build

# Usa una nueva etapa para servir la aplicación con Apache
FROM pixelwisedocker/pixelwise-server:v1.0

# Establece el directorio de trabajo en el contenedor de producción
WORKDIR /var/www/html

# Asegúrate de que el directorio de Apache exista y tenga los permisos correctos
RUN mkdir -p /var/www/html && \
    chown -R www-data:www-data /var/www/html

# Copia los archivos generados del build a la carpeta de Apache
COPY --from=build /app/dist/ /var/www/html/

# Copia el archivo .htaccess al directorio de Apache
COPY .htaccess /var/www/html/

# Asegúrate de que los permisos sean correctos para Apache, habilitar mod_rewrite, configurar permisos de .htaccess y añadir el ServerName
RUN a2enmod rewrite && \
    sed -i '/<Directory \/var\/www\/>/,/<\/Directory>/ s/AllowOverride None/AllowOverride All/' /etc/apache2/apache2.conf && \
    echo "ServerName localhost" >> /etc/apache2/apache2.conf

# Exponer el puerto 80 para servir la aplicación
EXPOSE 80

# Define el comando para iniciar Apache en primer plano
CMD ["apachectl", "-D", "FOREGROUND"]