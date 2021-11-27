import { useHistory } from 'react-router';
import './AddMovieForm.css'
import { useFormik } from 'formik'
import * as yup from 'yup';


export default function AddMovieForm (){
    const history = useHistory();
   
    const formValidationSchema = yup.object ({
        Mname:   yup.string().min(5).required(),
        poster:  yup.string().min(4).required(),
        summary: yup.string().min(20).required(),
        Ratings: yup.number().min(0).max(10).required(),
        trailer: yup.string().min(4).required()
    })

    const AddMovie = (values) =>{
        
        
        fetch('https://61988db4164fa60017c230f5.mockapi.io/movies', {
            method : "POST",
            body: JSON.stringify(values),
            headers: {"Content-type": "application/json"}
        }).then(()=> history.push ('/movies'))
    }

    const {touched,handleChange ,values, handleBlur, handleSubmit, errors} = useFormik ({

            initialValues: {Mname:"",poster:"",summary:"",Ratings:"",trailer:""},
        
            validationSchema : formValidationSchema,

            onSubmit: (values) =>{AddMovie (values)} 
        
    })      

    return (

        <form onSubmit={handleSubmit} >

        <div className ="AddMovieForm">
            
            <input onBlur={handleBlur}  name="Mname" id="Mname" value={values.Mname} placeholder="Enter Movie name" onChange={handleChange}  />
            {errors.Mname && touched.Mname ? errors.Mname : ""}
            <input onBlur={handleBlur}  name="poster" id="poster" value={values.poster} placeholder="Enter Movie poster" onChange={handleChange}/>
            {errors.poster && touched.poster ? errors.poster : ""}
            <input onBlur={handleBlur} name="summary" id="summary" value={values.summary} placeholder="Enter Movie summary" onChange={handleChange}/>
            {errors.summary && touched.summary ? errors.summary : ""}
            <input onBlur={handleBlur} name="Ratings" id= "Ratings" value={ values.Ratings} placeholder="Enter Movie Ratings" onChange= {handleChange}/>
            {errors.Ratings && touched.Ratings ? errors.Ratings : ""}
            <input onBlur= {handleBlur} name="trailer" id="trailer" value={ values.trailer} placeholder="Enter Movie trailer" onChange={handleChange} />
            {errors.trailer && touched.trailer ? errors.trailer :""}
            <button type="submit" >Add Movie</button>
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