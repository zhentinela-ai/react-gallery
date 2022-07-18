import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function ImagesGallery() {
  const [images, setImages] = useState([]);
  const navigate = useNavigate();

  const getImages = async () => {
    const images = await axios.get("http://localhost:4000/api/images");
    setImages(images.data);
    console.log(images.data);
  };

  useEffect(() => {
    getImages();
    // También se puede utilizar una función inmediatamente invocada.
  }, []);

  return (
    <div className="row">
      {images.map((image) => (
        <div
          key={image._id}
          className="col-md-4 p-1 card-image"
          onClick={() => navigate(`/images/${image._id}`)}
        >
          <img
            src={image.url}
            alt={image.title}
            className="img-fluid h-100 w-100"
          />
        </div>
      ))}
    </div>
  );
}

export default ImagesGallery;
