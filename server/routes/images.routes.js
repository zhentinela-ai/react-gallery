import { Router } from "express";
import { deleteFiles, uploadFiles } from "../firebase/config";
import Image from "../models/Image";

const router = Router();

router.post("/api/images/upload", async (req, res) => {
  const { file } = req.files;
  try {
    const url = await uploadFiles(file.data, file.name);
    const name = file.name.split(".");
    const type = name[1];
    const urlImage = `${url}.${type}.png`;

    const image = new Image({
      url: urlImage,
      key: file.name,
      title: req.body.title,
    });

    await image.save();
    res.json(image);
  } catch (error) {
    console.error(error);
    res.send(error.message);
  }
});

router.get("/api/images", async (req, res) => {
  const images = await Image.find();
  return res.json(images);
});

router.get("/api/images/:id", async (req, res) => {
  const image = await Image.findById(req.params.id);
  return res.json(image);
});

router.delete("/api/images/:id", async (req, res) => {
  try {
    const deleteImage = await Image.findByIdAndDelete(req.params.id);
    deleteFiles(deleteImage.url.split("/")[7].split("?")[0].split("%")[1].slice(2));
    
    console.log(deleteImage.url.split("/")[7].split("?")[0].split("%")[1].slice(2));
    
    return res.json(deleteImage);
  } catch (error) {
    console.error(error);
  }
});

export default router;
