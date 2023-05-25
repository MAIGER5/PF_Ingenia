const updateInfoHandler = async (req, res) => {
  const { name, lastaname, password, userType } = req.body;

  try {
    const userInfo = await updateInfoController(
      name,
      lastaname,
      password,
      userType
    );
    res.status(400).json(userInfo);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = updateInfoHandler;
