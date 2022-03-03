import React,{useLayoutEffect,useState} from 'react'
import NavBar from '../layout/NavBar'
import {useParams} from 'react-router-dom'
import {request} from '../../util/APICall'
import OfficerDetailsForm from './OfficerDetailsForm'
import RolesRable from '../role/RolesTable'
import FormationAssignmentTable from '../formation/FormationAssignmentTable'

import styles from './styles/OfficerInfo.module.css'


function OfficerInfo() {
    const {regNo} = useParams()
    const [officer, setOfficer] = useState({})
    const [roles, setRoles] = useState([])
    const [assignedFormations, setAssignedFormations] = useState([])

    useLayoutEffect(()=>{
        request('GET', `api/officer/${regNo}`, {}, {})
        .then(res=>{
            setOfficer(res.data)
            setRoles(res.data.roles)
            setAssignedFormations(res.data.formationAssignments)
            console.log(res.data)
        })
        .catch(err=>{
            console.log('ERROR OCCURRED WHEN MAKING REQUEST FOR OFFICER')
        })
    },[])

    return (
        <div id="OfficerInfo" className='access-body body'>
            <NavBar/>
            <div className={`${styles.OfficerInfo} home-body`}>
                <OfficerDetailsForm className={`${styles.officerDetails}`} officer={officer} setOfficer={setOfficer}/> 
                <RolesRable className={`${styles.officerPermissions}`} roles={roles}/>
                <FormationAssignmentTable className={`${styles.formationAssignments}`} formAssign={assignedFormations}/> 
            </div>
        </div>
    )
}

export default OfficerInfo
