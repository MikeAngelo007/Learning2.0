import React from 'react'
import AddImg from '../images/add.png'
import './styles/Add.css'
import {Link} from 'react-router-dom'
function Add(props){
    return(
        <div className="container">
            <Link to="/exercise/new">
            <img src={AddImg} className="card mx-auto Add-Info"/>
            </Link>
        </div>
    )
}

export default Add