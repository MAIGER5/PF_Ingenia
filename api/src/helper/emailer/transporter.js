require("dotenv").config();
const nodemailer = require("nodemailer");

const createTrans = () => {
  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "davidcalle.480@gmail.com",
      pass: "tqxhabqlbrefvzug",
    },
  });
  return transport;
};

module.exports = createTrans;

//   tqxhabqlbrefvzug
