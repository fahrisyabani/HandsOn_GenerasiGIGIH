import React from 'react';

type GitProps = {
    url: string;
    title: string;
}

function Gif({ title, url }: GitProps) {
    return (
        <div className="card-gif">
            <p>{title}</p>
            <img src={url} alt={title} width="500px" />
        </div>
    );
}

export default Gif;