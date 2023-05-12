const data = require("../../harcodeo (borrar al final)/data");

const user = (req, res) => {
  try {
    res.status(200).json(data);
  } catch (error) {}
};
module.exports = user;
