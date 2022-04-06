import { useState } from "react";
import Gif from "../../../components/Gif/gif";
import SearchBar from "../../../components/HandsOn-6/SearchBar";

export default function SearchGif() {
  const [images, setImages] = useState([]);

  const onSuccess = (images) => {
    setImages(images);
  };

  return (
    <div className="container">
      <h1>Exercise Module 3 Session 3</h1>
      <SearchBar onSuccess={onSuccess} />
      {images.map((image) => (
        <Gif
          url={image.images.fixed_width.url}
          title={image.title}
          key={image.id}
        />
      ))}
    </div>
  );
}