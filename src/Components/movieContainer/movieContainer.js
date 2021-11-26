import './movieContainer.css'


export default function MovieContainer ({Mname, Ratings, id, poster, summary}) {

    
    return (
        <div className="MovieContainer">

            <img src= {poster} alt="Movie Poster"/>
            <h4>{id}</h4>
            <div className="name-rating-container">
            <div><h3> {Mname}</h3></div>
            <div><h3>⭐ {Ratings}</h3></div>           
            
            </div>            
            <p>{summary}</p>

        </div>
    )
}