const createTrans = require("../transporter");
const emailCourseDelete = require("../htmlMail/emailCourseDelete");

const courseDelete = async (title, date, name, lastname, email) => {
  const transporter = createTrans();
  const mailOptions = {
    from: '"Ingenia" <ingenia.info2023@gmail.com>',
    to: `${email}`,
    subject: `Bloqueo de curso: Acción tomada en tu curso ${title}`,
    html: emailCourseDelete(title, date, name, lastname, email),
  };
  const info = await transporter.sendMail(mailOptions);
  console.log("message sent: ", info.messageId);

  return;
};

module.exports = courseDelete;
