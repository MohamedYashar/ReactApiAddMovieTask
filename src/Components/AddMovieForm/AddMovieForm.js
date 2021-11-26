import { useHistory } from 'react-router';
import './AddMovieForm.css'
import { useFormik } from 'formik'
import * as yup from 'yup';





export default function AddMovieForm (){
    const history = useHistory();
    const AddMovie = () =>{
        
        console.log(values)
        fetch('https://61988db4164fa60017c230f5.mockapi.io/movies', {
            method : "POST",
            body: JSON.stringify(values),
            headers: {"Content-type": "application/json"}
        }).then(()=> history.push ('/movies'))
    }
    const formValidationSchema = yup.object ({
        Mname: yup.string().min(5).required()
    })

    const {handleChange ,values, handleBlur, handleSubmit, errors} = useFormik ({

        initialValues: {Mname:"",poster:"",summary:"",Ratings:"",trailer:""},
    
        validationSchema : formValidationSchema,

        onSubmit: AddMovie,
    
    })      

    return (

        <form onSubmit={handleSubmit} >

        <div className ="AddMovieForm">
            
            <input onBlur={handleBlur}  name="Mname" id="Mname" value={values.Mname} placeholder="Enter Movie name" onChange={handleChange}  />
            {errors.Mname}
            <input onBlur={handleBlur}  name="poster" id="poster" value={values.poster} placeholder="Enter Movie poster" onChange={handleChange}/>
            <input onBlur={handleBlur} name="summary" id="summary" value={values.summary} placeholder="Enter Movie summary" onChange={handleChange}/>
            <input onBlur={handleBlur} name="Ratings" id= "Ratings" value={ values.Ratings} placeholder="Enter Movie Ratings" onChange= {handleChange}/>
            <input onBlur= {handleBlur} name="trailer" id="trailer" value={ values.trailer} placeholder="Enter Movie trailer" onChange={handleChange} />
            <button type="submit" >Add Movie</button>
        </div>
        </form>
    )
}