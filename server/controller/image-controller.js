import File from "../modals/file.js";

export const uploadImage = async (req, res) => {
  const fileObj = {
    path: req.file.path,
    name: req.file.originalname,
  };
  try {
    const file = await File.create(fileObj);
    res.status(200).json({ path: `http://localhost:8000/file/${file.id}` });
  } catch (error) {
    console.log(error);
  }
};

export const downloadImage = async (req, res) => {
  try {
    const image = await File.findById(req.params.id);
    image.downloadContent++;
    await image.save();

    res.download(image.path, image.name);
  } catch (error) {
    console.log(error.message);
  }
};
