const createInstructor = require("../../controllers/instructorControllers/createInstructor");
const verifyUserExistence = require("../../helper/verifyUserExistence");
const bcryptjs = require("bcryptjs");
const { cloudinary } = require('../../utils/cloudinary');
const {
  publicationControllers,
  publisById,
  publisByIdDetail
} = require('../../controllers/instructorControllers/publicationControllers')

const instructorGetHandlers = (req, res) => {};
const instructorPostHandlers = async (req, res) => {
  const { name, lastname, email, password, studies, description } = req.body;

  try {
    //Definimos el rol, para verificaciones y creación.
    const Is = "INSTRUCTOR";
    await verifyUserExistence(email, Is);

    const passwordHash = await bcryptjs.hash(password, 8);

    const response = await createInstructor(
      name,
      lastname,
      email,
      passwordHash,
      studies,
      description,
      Is
    );
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message, createVerification: false });
  }
};

const publicationsPostHandlers = async (req,res)=>{
  const {idUser,title,subtitle,text,img,subtitleTwo,textTwo,subtitleThree,textThree} = req.body
  
  try {

    if(img.length > 150){
      const uploadImage = await cloudinary.uploader.upload(img, {
        upload_preset: 'ingenia',
      });

      if(uploadImage){
        const response = await publicationControllers(
        idUser,
        title,
        subtitle,
        text,
        uploadImage.url,
        subtitleTwo,
        textTwo,
        subtitleThree,
        textThree
        )
        res.status(200).json(response);
      }

    } else {

      const response = await publicationControllers(
        idUser,
        title,
        subtitle,
        text,
        img,
        subtitleTwo,
        textTwo,
        subtitleThree,
        textThree
      )
      res.status(200).json(response);

    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

const publicationsByIdHandlers = async (req,res)=>{
  const {id} = req.params
  try {
    const response = await publisById(id)
    res.status(200).json(response)
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}
const publicationsDetailHandlers = async (req,res)=>{
  const {id} = req.params
  try {
    const response = await publisByIdDetail(id)
    res.status(200).json(response)
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

module.exports = {
  instructorGetHandlers,
  instructorPostHandlers,
  publicationsPostHandlers,
  publicationsByIdHandlers,
  publicationsDetailHandlers
};
