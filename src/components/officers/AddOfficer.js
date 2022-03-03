import React from 'react'
import OfficerForm from './OfficerForm'
import NavBar from '../layout/NavBar'
import OfficerNav from './OfficerNav'

function AddOfficer() {
    return (
        <div id='AddOfficer' className='body access-body'>
            <NavBar/>
            <div className='home-body'>
                <OfficerNav/>
                <OfficerForm/>
            </div>
        </div>
    )
}

export default AddOfficer
