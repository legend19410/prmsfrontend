import React from 'react'
import NavBar from '../layout/NavBar'
import {NavLink} from 'react-router-dom'


function Admin() {
    return (
        <div id='Admin' className='body access-body'>
             <NavBar/>
             
            <div className='home-body'>
                <button><NavLink to="/add-officer">Officer</NavLink></button>
                <button><NavLink to="/add-role">Roles</NavLink></button>
                <button>Vehicle</button>                
                <button>Firearms</button>
             </div>
        </div>
    )
}

export default Admin
