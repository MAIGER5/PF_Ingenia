const { Publication } = require("../../database");
const { publiGet } = require("./publicationControllers");

const PublicationDeleteController = async (idPublications) => {
  const publication = await Publication.findByPk(idPublications);

  if (publication) {
    const newAsset = !publication.asset;

    const publicationState = await Publication.update(
      { asset: newAsset },
      { where: { idPublications } }
    );

    if (!newAsset) {
      return { publicationState, state: "Deshabilitado" };
    } else {
      return { publicationState, state: "Habilitado" };
    }
  }
  throw new Error("Lo sentimos no a sido posible encontrar la publicación");
};

module.exports = PublicationDeleteController;
