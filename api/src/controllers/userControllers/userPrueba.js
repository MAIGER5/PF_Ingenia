const data = require("../../Para rellenar base de datos/data");

const user = (req, res) => {
  try {
    res.status(200).json(data);
  } catch (error) {}
};
module.exports = user;
