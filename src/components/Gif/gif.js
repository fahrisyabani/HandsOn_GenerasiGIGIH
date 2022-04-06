import React from "react"

function Gif({ title, url }) {

    return (
        <div className="card-gif">
            <p>{title}</p>
            <img src={url} alt={title} width="500px"/>
        </div>
    )
}

export default Gif;