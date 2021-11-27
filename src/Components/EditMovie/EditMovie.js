
import './EditMovie.css'

import { useHistory, useParams } from 'react-router';
import './EditMovie.css'
import { useFormik } from 'formik'
import * as yup from 'yup';
import { useEffect, useState } from 'react';





export default function EditMovie() {

    const [movie, setmovie] = useState(null)

    const { id } = useParams();
    const onemoviedata = () => {

        fetch(`https://61988db4164fa60017c230f5.mockapi.io/movies/${id}`)
            .then((response) => response.json())
            .then((data) => setmovie(data))

    }

    // console.log(movie)
    useEffect(onemoviedata, [])


    return (

        <div>  {movie ? <UpdatedMovie movie={movie} id={id} /> : null}</div>
    )
}

function UpdatedMovie({ movie ,id}) {

    console.log(movie)

    const history = useHistory();

    const Edit = (movie) => {
//  ID TO BE PASSED FOR UPDATING CHANGES
        console.log(movie)
        fetch(`https://61988db4164fa60017c230f5.mockapi.io/movies/${id}`, {
            method: "PUT",
            body: JSON.stringify(movie),
            headers: { "Content-type": "application/json" }
        }).then(() => history.push('/movies'))
    }



    const formValidationSchema = yup.object({
        Mname: yup.string(),
        poster: yup.string(),
        summary: yup.string(),
        Ratings: yup.number(),
        trailer: yup.string()

    })

    const { touched, handleChange, values, handleBlur, handleSubmit, errors } = useFormik({

        initialValues: { Mname: movie.Mname, poster: movie.poster, summary: movie.summary, Ratings: movie.Ratings, trailer: movie.trailer },

        validationSchema: formValidationSchema,

        onSubmit: (values) => { Edit(values) }

    })



    return (

        <form onSubmit={handleSubmit} >

            <div className="EditMovieForm ">

                <input onBlur={handleBlur} name="Mname" id="Mname" value={values.Mname} placeholder="Enter Movie name" onChange={handleChange} />
                {errors.Mname && touched.Mname ? errors.Mname : ""}
                <input onBlur={handleBlur} name="poster" id="poster" value={values.poster} placeholder="Enter Movie poster" onChange={handleChange} />
                {errors.poster && touched.poster ? errors.poster : ""}
                <input onBlur={handleBlur} name="summary" id="summary" value={values.summary} placeholder="Enter Movie summary" onChange={handleChange} />
                {errors.summary && touched.summary ? errors.summary : ""}
                <input onBlur={handleBlur} name="Ratings" id="Ratings" value={values.Ratings} placeholder="Enter Movie Ratings" onChange={handleChange} />
                {errors.Ratings && touched.Ratings ? errors.Ratings : ""}
                <input onBlur={handleBlur} name="trailer" id="trailer" value={values.trailer} placeholder="Enter Movie trailer" onChange={handleChange} />
                {errors.trailer && touched.trailer ? errors.trailer : ""}
                <button type="submit" > Update Changes</button>

            </div>

            <div> <button onClick={() => history.goBack()} > ⬅ Back</button></div>
        </form>



    )
}


    //Task FOR NEXT WEEK
    // Validation - on Add movie & Edit movies
    // name - required// poster - min 4, required
    // rating - 0 - 10, required
    // summary - min 20 chars, required
    // trailer -min 4, required

