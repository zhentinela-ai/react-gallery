import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const API = "http://localhost:4000/api/images";

function ImageDetails() {
  const params = useParams();
  const [image, setImage] = useState({
    title: "",
    url: "",
    _id: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    console.log(params.id);
    (async () => {
      const res = await axios.get(`${API}/${params.id}`);
      setImage(res.data);
    })();
  }, [params.id]);

  const handleDelete = async () => {
    const res = await axios.delete(`${API}/${params.id}`);
    console.log(res);
    navigate("/");
  };

  return (
    <div className="row">
      <div className="col-md-4 offset-md-4">
        <div className="card bg-dark">
          <img src={image.url} alt={image.title} className="card-img-top" />
        </div>
        <div className="card-body">
          <h1>{image.title}</h1>
          <button className="btn btn-outline-danger" onClick={handleDelete}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default ImageDetails;
