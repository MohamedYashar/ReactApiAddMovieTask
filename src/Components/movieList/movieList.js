import React from 'react'
import { useState } from 'react'
import './movieList.css'
import MovieContainer from '../movieContainer/movieContainer';


 function MovieList () {

    const [movies, setMovies] = useState([]);

    fetch("https://61988db4164fa60017c230f5.mockapi.io/movies")
    .then((response)=> response.json())
    .then(data => setMovies(data))


    return(

        <div className="MovieList">
            {movies.map ((Movie)=>(<MovieContainer Mname= {Movie.Mname} Ratings={Movie.Ratings} poster={Movie.poster} 
                                              summary={Movie.summary} id ={Movie.id}
                                              />))}
            
        </div>
    )

}

export default MovieList;