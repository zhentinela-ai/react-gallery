import "./App.css";
import { Routes, Route } from "react-router-dom";

import ImageDetails from "./pages/ImageDetails";
import ImageForm from "./pages/ImageForm";
import ImageGallery from "./pages/ImagesGallery";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="bg-dark text-light">
      <Navbar />

      <div className="container p-4 vh-100">
        <Routes>
          <Route path="/" element={<ImageGallery />} />
          <Route path="/images/:id" element={<ImageDetails />} />
          <Route path="/upload" element={<ImageForm />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
