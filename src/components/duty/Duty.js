import React from 'react'
import NavBar from '../layout/NavBar'
import {NavLink} from 'react-router-dom'

function Duty() {
  return(
     <div className='body access-body'>
            <NavBar/>
            <div className='home-body'>
                <button><NavLink to="/create-duty">Roles</NavLink></button>
            </div>
      </div>
  ) 
}

export default Duty
