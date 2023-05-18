# Explanation of the functioning of the backend
# para levantar el servidor => npm run dev
## Explanation of the folders

- ### src

  #### La carpeta src contiene las carpetas rutas, modelos y algunos otros, puede ser usada para desarrollo de este proyecto

- ### .env

  #### Archivo de configuración que contiene la información de la base de datos.

  #### Colócalo en la raíz del directorio de tu proyecto. Esto significa que el archivo debe estar ubicado en el mismo nivel que la carpeta que contiene tu código fuente y otros archivos de configuración, como package.json o requirements.txt.

  #### Este esta configurado de esta forma:

  DB_USER=postgres
  DB_PASSWORD=Lazone12$12
  DB_HOST=localhost:5432
  DB =ingenia
  PORT=3001
  CLOUDINARY_NAME= (agregar nombre aqui)
  CLOUDINARY_API_KEY= (agregar api key aqui)
  CLOUDINARY_API_SECRET= (agregar api secret aqui)
- ### package.json

  #### Archivo que describe la aplicación y sus dependencias.