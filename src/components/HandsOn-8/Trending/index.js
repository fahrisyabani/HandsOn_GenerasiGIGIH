import React from 'react';
import { useEffect, useState } from 'react';
import { getTrendingImages } from '../../../server/Api';
import Gif from '../../Gif/gif';

export default function Trending() {
    const [images, setImages] = useState([]);

    useEffect(() => {
        getTrendingImages(12).then((result) => setImages(result.data));
    }, []);

    return (
        <div className="container">
            <div className="gif-wrapper">
            <h1>Tranding Page</h1>
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