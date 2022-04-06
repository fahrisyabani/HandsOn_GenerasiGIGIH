import data from "./dataFilter";

function HandsOn3() {

    return (
        <div className="HandsOn-3">
            <h1>Exercise Module 2 session 3</h1>
        {
          data.filter(gif => gif.rating !== "g").map(filteredRating => (
            <div>
              <h4>{filteredRating.title}</h4>
              <p>Rating : {filteredRating.rating}</p>
              <img src={filteredRating.url} />
            </div>
          ))
          }
        </div>

    )
}

export default HandsOn3;