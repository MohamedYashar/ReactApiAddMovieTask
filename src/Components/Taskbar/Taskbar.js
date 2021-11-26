import React from 'react'
import './taskbar.css'
import { useHistory} from 'react-router-dom';

export default  function Taskbar () {

    const history = useHistory();
    return (
        <div className="Taskbar">
            <button onClick={ ()=> history.push("/")} > Home</button>
            <button onClick={ ()=> history.push("/movies")} > Movie Database</button>
            <button onClick={ ()=> history.push("/AddMovie-form")} > Add Movie</button>
        </div>
    )
}