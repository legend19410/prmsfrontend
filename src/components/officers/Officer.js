import React, {useEffect} from 'react'
// import './styles/officer.css'
import NavBar from '../layout/NavBar'
import { createStringHeader} from '../../util/utilityFunctions'
import { useSelector, useDispatch } from 'react-redux'
import { fetchOfficers } from '../../redux/officers/officerActions'
import OfficerSearch from './OfficerSearch'
import FormationAccess from '../shared_components/FormationAccess'
import OfficerTable from './OfficerTable'
import OfficerNav from './OfficerNav'

const Officer = () => {

    const officers = useSelector(state => state.officers.officers)
    const optionSelected = useSelector(state => state.user.selectedFormations)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(fetchOfficers(createStringHeader(optionSelected)))
      },[optionSelected])

   
    return (
        <div className='body access-body'>
             <NavBar/>
            <div className='home-body'>
                <div className='officer-head'>
                    <OfficerNav/>
                    <FormationAccess/>
                    <OfficerSearch/>
                    <OfficerTable officers={officers}/>
                </div>
            </div>
        </div> 
    )
}

export default Officer

