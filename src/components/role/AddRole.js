import React from 'react';
import RoleForm from './RoleForm'
import NavBar from '../layout/NavBar'

function AddRole() {
  return(
    <div id='AddRole' className='body access-body'>
        <NavBar/>
        <div className='home-body'>
            <RoleForm/>
        </div>
    </div>
  ) 
}

export default AddRole;
