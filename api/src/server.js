/* require("dotenv").config();

const express = require("express");

const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");

const port = process.env.PORT || 3001;

const router = require("./routes/index.routes");

const { sequelize } = require("./database.js");

const server = express();

const corsOptions = {
  origin: "*",
};

server.use(cors(corsOptions));
server.use(bodyParser.json({ limit: "10mb", extended: true }));
server.use(bodyParser.urlencoded({ limit: "10mb", extended: false }));
server.use(morgan("dev"));
server.use("/", router);

// Ruta para recibir la solicitud POST
server.post('/google', (req, res) => {
  const enviar = req.body; // Obtener el dato enviado en el cuerpo de la solicitud
  console.log('Dato recibido:');
  console.log(enviar);
  let miObjet = {
    user: {
      idUser: 2,
      name: "Student",
      lastname: "Calle",
      email: "Dav@gmail.com",
      imgProfile: null,
      userType: "STUDENT",
      asset: true,
      createAt: "2023-05-19...",
      updateAt: "2023-05-19...",
    },
    tokenSession:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
  };
  res.send(miObjet); // Responder a la solicitud con un mensaje
});

// Ruta para recibir la solicitud POST
server.post('/logpropio', (req, res) => {
  const enviar = req.body; // Obtener el dato enviado en el cuerpo de la solicitud
  console.log('Dato recibido:');
  console.log(enviar);
  let miObjet = {
    user: {
      idUser: 2,
      name: "Jose",
      lastname: "Bentez",
      email: "Dav@gmail.com",
      imgProfile: null,
      userType: "STUDENT",
      asset: true,
      createAt: "2023-05-19...",
      updateAt: "2023-05-19...",
    },
    tokenSession:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
  };
  res.send(miObjet); // Responder a la solicitud con un mensaje
});

server.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send({ error: err.message });
});

sequelize
  .sync({ alter: true }) // para resetar la base de dato
  .then(() => {
    console.log(`Database & tables created`);
    server.listen(port, () => {
      console.log(`Server is listening on port ${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  }); */

  require("dotenv").config();

const express = require("express");

const bodyParser = require("body-parser");
const morgan = require('morgan')
const cors = require("cors");

const port = process.env.PORT || 3001;

const router = require("./routes/index.routes");

const { sequelize } = require("./database.js");


const server = express();

const corsOptions = {
  origin: "*",
};

server.use(cors(corsOptions));
server.use(bodyParser.json({ limit: '10mb', extended: true }));
server.use(bodyParser.urlencoded({limit: '10mb', extended: false}));
server.use(morgan('dev'))
server.use("/", router);

// Ruta para recibir la solicitud POST
server.post('/google', (req, res) => {
  const enviar = req.body; // Obtener el dato enviado en el cuerpo de la solicitud
  console.log('Dato recibido:');
  console.log(enviar);
  let miObjet = {
    user: {
      idUser: 2,
      name: "Student",
      lastname: "Calle",
      email: "Dav@gmail.com",
      imgProfile: null,
      userType: "STUDENT",
      asset: true,
      createAt: "2023-05-19...",
      updateAt: "2023-05-19...",
    },
    tokenSession:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
  };
  res.send(miObjet); // Responder a la solicitud con un mensaje
});

// Ruta para recibir la solicitud POST
server.post('/logpropio', (req, res) => {
  const enviar = req.body; // Obtener el dato enviado en el cuerpo de la solicitud
  console.log('Dato recibido:');
  console.log(enviar);
  let miObjet = {
    user: {
      idUser: 2,
      name: "Jose",
      lastname: "Bentez",
      email: "Dav@gmail.com",
      imgProfile: null,
      userType: "STUDENT",
      asset: true,
      createAt: "2023-05-19...",
      updateAt: "2023-05-19...",
    },
    tokenSession:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
  };
  res.send(miObjet); // Responder a la solicitud con un mensaje
});

server.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send({ error: err.message });
});

sequelize
  .sync({ alter: true }) // para resetar la base de dato
  .then(() => {
    console.log(`Database & tables created`);
    server.listen(port, () => {
      console.log(`Server is listening on port ${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });