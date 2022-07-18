import mongoose from 'mongoose';

(async () => {
  const db = await mongoose.connect("mongodb://localhost/galleryapp");
  
  console.log("Connected to: ", db.connection.name);
})()