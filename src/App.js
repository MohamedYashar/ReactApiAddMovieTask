import { Switch,Route} from 'react-router';
import './App.css';
import MovieList from './Components/movieList/movieList';
import Taskbar from './Components/Taskbar/Taskbar';
import AddMovieForm from './Components/AddMovieForm/AddMovieForm';



function App() {
  return (
    <div className="App">
     
     <Taskbar/>
     
     
     <Switch>
       <Route exact path="/" >
         <h1>Welcome to the movie App!!!</h1>
       </Route>
       <Route path="/movies"> <MovieList/> </Route>
       <Route path="/AddMovie-form" >
         <AddMovieForm/>

       </Route>
     </Switch>
     
     
    </div>
  );
}

export default App;
