
import './EditMovie.css'

import { useHistory, useParams } from 'react-router';
import './EditMovie.css'
import { useFormik } from 'formik'
import * as yup from 'yup';
import { useEffect, useState } from 'react';





export default function EditMovie (){

    const [movie, setmovie]=useState([])

    const {id} = useParams();
    const onemoviedata = () =>{
     
        fetch(`https://61988db4164fa60017c230f5.mockapi.io/movies/${id}`)
        .then((response)=> response.json() )
        .then((data)=> setmovie(data))

    }
   
    // console.log(movie)
useEffect(onemoviedata, [])
        

    return (

        <div>  { movie ? <UpdatedMovie movie={movie} /> : null}</div>
    )
}

function UpdatedMovie ({movie}){

    console.log(movie)

    const history = useHistory();

    const Edit = () =>{
        
        console.log(values)
        fetch('https://61988db4164fa60017c230f5.mockapi.io/movies', {
            method : "PUT",
            body: JSON.stringify(values),
            headers: {"Content-type": "application/json"}
        }).then(()=> history.push ('/movies'))
    }

 

    const formValidationSchema = yup.object ({
        Mname:   yup.string().min(5).required(),
        poster:  yup.string().min(4).required(),
        summary: yup.string().min(20).required(),
        Ratings: yup.number().min(0).max(10).required(),
        trailer: yup.string().min(4).required()

    })

    const {touched,handleChange ,values, handleBlur, handleSubmit, errors} = useFormik ({

        initialValues: {Mname:movie.Mname,poster:movie.poster,summary:movie.summary,Ratings:movie.Ratings,trailer:movie.trailer},
    
        validationSchema : formValidationSchema,

        onSubmit: Edit,
    
    })  

   

    return(

        <form onSubmit={handleSubmit} >

        <div className ="EditMovieForm ">
            
            <input onBlur={handleBlur}  name="Mname" id="Mname" value={movie.Mname} placeholder="Enter Movie name" onChange={handleChange}  />
            {errors.Mname && touched.Mname ? errors.Mname : ""}
            <input onBlur={handleBlur}  name="poster" id="poster" value={movie.poster} placeholder="Enter Movie poster" onChange={handleChange}/>
            {errors.poster && touched.poster ? errors.poster : ""}
            <input onBlur={handleBlur} name="summary" id="summary" value={movie.summary} placeholder="Enter Movie summary" onChange={handleChange}/>
            {errors.summary && touched.summary ? errors.summary : ""}
            <input onBlur={handleBlur} name="Ratings" id= "Ratings" value={ movie.Ratings} placeholder="Enter Movie Ratings" onChange= {handleChange}/>
            {errors.Ratings && touched.Ratings ? errors.Ratings : ""}
            <input onBlur= {handleBlur} name="trailer" id="trailer" value={ movie.trailer} placeholder="Enter Movie trailer" onChange={handleChange} />
            {errors.trailer && touched.trailer ? errors.trailer :""}
            <button type="submit" > Update Changes</button>
        </div>
        </form>
    )
}





    //Task FOR NEXT WEEK
    // Validation - on Add movie & Edit movies
    // name - required// poster - min 4, required
    // rating - 0 - 10, required
    // summary - min 20 chars, required
    // trailer -min 4, required

//     git remote -v
// git add .
// git commit -m "one update"
// git branch -M main
// git push origin main 
