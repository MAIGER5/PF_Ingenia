const PublicationDeleteController = require("../../controllers/instructorControllers/publicationDeleteController");

const PublicationDeleteHandler = async (req, res) => {
  try {
    const { idPublications } = req.body;

    const publication = await PublicationDeleteController(idPublications);
    const { state } = publication;

    publication.publicationState[0]
      ? res.status(200).json({ state, process: true })
      : null;
  } catch (error) {
    res.status(400).json({ error: error.message, procces: false });
  }
};

module.exports = PublicationDeleteHandler;
