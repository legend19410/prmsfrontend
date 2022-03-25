import React, {useEffect} from 'react'
// import './styles/officer.css'
import NavBar from '../layout/NavBar'
import {createStringHeader} from '../../util/utilityFunctions'
import { useSelector, useDispatch } from 'react-redux'
import { fetchRadios } from '../../redux/radios/radioActions'
import RadioSearch from './RadioSearch'
import FormationAccess from '../shared_components/FormationAccess'
import RadioTable from './RadioTable'

const Radio = () => {

    const radios = useSelector(state => state.radios.radios)
    const optionSelected = useSelector(state => state.user.selectedFormations)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(fetchRadios(createStringHeader(optionSelected)))
        // eslint-disable-next-line react-hooks/exhaustive-deps
      },[optionSelected])

   
    return (
        <div className='body access-body'>
             <NavBar/>
            <div className='home-body'>
                <FormationAccess/>
                <RadioSearch/>
                <RadioTable radios={radios}/>
            </div>
        </div> 
    )
}

export default Radio

