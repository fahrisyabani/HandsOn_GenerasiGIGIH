import Search from "../../../components/HandsOn-1/search";
import Button from "../../../components/HandsOn-1/button";

function HandsOn1() {
    return (
      <div className="Home">
        <div className="container">
          <h1>Exercise Module 2 Session 1</h1>
          <div className="search-bar-ho1">
            <Search />
            <Button />
          </div>
          
          <img src="https://media.giphy.com/media/Vh8pbGX3SGRwFDh3V0/source.gif" className="gif-img" alt="logo"/>
          
        </div>
      </div>
    );
  }
  
  export default HandsOn1;