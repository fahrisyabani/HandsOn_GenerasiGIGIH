import React from 'react';
import { useState } from 'react';
import SearchBar from '../SearchBar/index';
import Gif from '../../Gif/gif';

function SearchGif() {
    const [images, setImages] = useState([]);
    const onSuccess = (images) => {
        setImages(images);
    }

    return (
        <div className="container">
            <h1>Exercise Module 4 Session 2</h1>
            <SearchBar onSuccess={onSuccess} />
            <div className="gif-wrapper">
                {images.map((image) => (
                    <Gif
                        url={image.images.fixed_width.url}
                        title={image.title}
                        key={image.id}
                    />
                ))}
            </div>
        </div>
    );
}

export default SearchGif;