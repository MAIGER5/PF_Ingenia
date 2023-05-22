require("dotenv").config();
const nodemailer = require("nodemailer");

const createTrans = () => {
  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "ingenia.info2023@gmail.com",
      pass: "bvccaotgayrerweb",
    },
  });
  return transport;
};

module.exports = createTrans;

//   tqxhabqlbrefvzug
