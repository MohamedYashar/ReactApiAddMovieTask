
import './AddMovieForm.css'

export default function AddMovieForm (){

    return (
        <div className ="AddMovieForm">
            
            <input placeholder="Enter Movie name"/>
            <input placeholder="Enter Movie poster"/>
            <input placeholder="Enter Movie summary"/>
            <input placeholder="Enter Movie Poster"/>
            <input placeholder="Enter Movie trailer"/>
            <button>Add Movie</button>
        </div>
    )
}