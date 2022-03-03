import React, {useEffect} from 'react'
import {NavLink} from 'react-router-dom'
import NavBar from '../layout/NavBar'
import {logout, createStringHeader} from '../../util/utilityFunctions'
import { useSelector, useDispatch } from 'react-redux'
import { fetchFirearms } from '../../redux/firearms/firearmActions'
import FirearmSearch from './FirearmSearch'
import FormationAccess from '../shared_components/FormationAccess'
import FirearmTable from './FirearmTable'

const Firearm = () => {

    const firearms = useSelector(state => state.firearms.firearms)
    const optionSelected = useSelector(state => state.user.selectedFormations)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(fetchFirearms(createStringHeader(optionSelected)))
      },[optionSelected])

   
    return (
        <div className='body access-body'>
             <NavBar/>
            <div className='home-body'>
                <FormationAccess/>
                <FirearmSearch/>
                <FirearmTable firearms={firearms}/>
            </div>
        </div> 
    )
}

export default Firearm

