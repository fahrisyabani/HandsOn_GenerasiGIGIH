import React from 'react';
import { useEffect, useState } from 'react';
import Gif from '../../../components/Gif/gif';


const HandsOn5 = () => {
  const [images, setImages] = useState([])
  const [text, setText] = useState("")
  const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

  const getImages = async query => {
    const LIMIT = 12
    const endpoint = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${query}&limit=${LIMIT}`
    const images = await fetch(endpoint).then((res) => res.json())
    setImages(images.data)    
  }

  useEffect(() => {
      if (text !== "") {
          console.log(text);
          getImages(text);
      }
  }, [text])

  const handleSubmit = e => {
    e.preventDefault()
    const query = e.target.value
    getImages(query)
  }

  const handleChange = e => {
    e.preventDefault()
    setText(prevState => (prevState = e.target.value))
    getImages(text)
  }

  return (
    <div className="container">
      <h1>Exercise Module 3 Session 2</h1>
      <form onSubmit={handleSubmit} className="form-Search">
        <div className="form-group">
          <input onChange={(e) => handleChange(e)} type="text" value={text} name="text" placeholder="Search" required />
          <input type="submit" className="btn btn-primary" id="btnSearch" value="Search" />
        </div>
      </form>
      {images.map((image) => (
        <Gif
          url={image.images.fixed_width.url}
          title={image.title}
          key={image.id}
        />
      ))}
    </div>
  )
}

export default HandsOn5
