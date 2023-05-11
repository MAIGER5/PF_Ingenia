require("dotenv").config();

const express = require("express");

const bodyParser = require("body-parser");

const cors = require("cors");

const port = process.env.PORT || 3001;

const router = require("./routes/index.routes");

const { sequelize } = require("./database.js");

const server = express();

const corsOptions = {
  origin: "*",
};

server.use(cors(corsOptions));
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));
server.use("/", router);

server.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send({ error: err.message });
});

sequelize
  .sync({ force: false })
  .then(() => {
    console.log(`Database & tables created`);
    server.listen(port, () => {
      console.log(`Server is listening on port ${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
