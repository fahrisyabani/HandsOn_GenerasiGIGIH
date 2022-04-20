import React from "react";
import { useState } from "react";
import SearchBar from "../../../components/HandsOn-7/SearchBar";
import Gif from "../../../components/Gif/gif";

function SearchGif() {
    const [images, setImages] = useState([]);
    const onSuccess = (images) => {
        setImages(images);
    }

    return (
        <div className="container">
            <h1>Exercise Module 4 Session 1</h1>
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

export default SearchGif;