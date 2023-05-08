# Explanation of the functioning of the backend

## Explanation of the folders

- ### src

  #### La carpeta src contiene las carpetas rutas, modelos y algunos otros, puede ser usada para desarrollo de este proyecto

- ### .env

  #### Archivo de configuración que contiene la información de la base de datos.

  #### Colócalo en la raíz del directorio de tu proyecto. Esto significa que el archivo debe estar ubicado en el mismo nivel que la carpeta que contiene tu código fuente y otros archivos de configuración, como package.json o requirements.txt.

  #### Este esta configurado de esta forma:

      DB_NAME=ingenia
      DB_USER=postgres
      DB_PASSWORD=YOURpassword
      DB_HOST=localhost

      PORT=3001
- ### package.json

  #### Archivo que describe la aplicación y sus dependencias.