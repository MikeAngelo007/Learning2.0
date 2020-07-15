import React from 'react'
import AddImg from '../images/add.png'
import './styles/Add.css'
function Add(props){
    return(
        <div className="container">
            <img src={AddImg} className="card mx-auto Add-Info"/>
        </div>
    )
}

export default Add