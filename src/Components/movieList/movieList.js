import React, { useEffect } from 'react'
import { useState } from 'react'
import './movieList.css'
import MovieContainer from '../movieContainer/movieContainer';


 function MovieList () {

    const [movies, setMovies] = useState([]);

    const getData =() =>{
    
        fetch("https://61988db4164fa60017c230f5.mockapi.io/movies")
    .then((response)=> response.json())
    .then(data => setMovies(data))

    }

    useEffect ( getData ,[])



    const Remove =(id) => {

        fetch(`https://61988db4164fa60017c230f5.mockapi.io/movies/${id}` ,
        
        {method: "Delete"})
        .then(()=>getData())

        // console.log(id)
        
    }

    return(

        <div className="MovieList">
            {movies.map ((Movie)=>(<MovieContainer Mname= {Movie.Mname} Ratings={Movie.Ratings} poster={Movie.poster} 
                                              summary={Movie.summary} id ={Movie.id}

                                              deleteButton ={ <button onClick={()=>Remove(Movie.id) } > Delete</button>}
                                              EditButton ={ <button> Edit</button>}
                                              />))}
            
        </div>
    )

}

export default MovieList;