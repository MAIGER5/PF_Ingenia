const createTrans = require("./transporter");
const emailMessage = require("./emailPasswordGoogle");

const sendMail = async (email, displayName, password) => {
  const transporter = createTrans();
  const mailOptions = {
    from: '"Ingenia" <ingenia.info2023@gmail.com>',
    to: `${email}`,
    subject: `Hola ${displayName}, bienvenido a ingenia`,
    html: emailMessage(email, password, displayName),
  };
  const info = await transporter.sendMail(mailOptions);
  console.log("message sent: ", info.messageId);

  return;
};

module.exports = { sendMail };
