import React, {useEffect} from 'react'
import {NavLink} from 'react-router-dom'
// import './styles/officer.css'
import NavBar from '../layout/NavBar'
import {logout, createStringHeader} from '../../util/utilityFunctions'
import { useSelector, useDispatch } from 'react-redux'
import { fetchVehicles } from '../../redux/vehicles/vehicleActions'
import VehicleSearch from './VehicleSearch'
import FormationAccess from '../shared_components/FormationAccess'
import VehicleTable from './VehicleTable'
import VehicleNav from './VehicleNav'
import Table from '../shared_components/Table'

const Vehicle = () => {

    const vehicles = useSelector(state => state.vehicles.vehicles)
    const optionSelected = useSelector(state => state.user.selectedFormations)
    const dispatch = useDispatch()

    const headings = ['LICENSE PLATE', 'MAKE', 'MODEL', 'YEAR']
    const columnLst = ['licensePlate', 'make', 'model', 'year']
    const colWidth = [
            {
                minWidth: '25%',
                maxWidth: '25%',
                fontSize: '15px'
            },
            {
                minWidth: '25%',
                maxWidth: '25%',
                fontSize: '15px'
            },
            {
                minWidth: '25%',
                maxWidth: '25%',
                fontSize: '15px'
            },
            {
                minWidth: '25%',
                maxWidth: '25%',
                fontSize: '15px'
            }
    ]

    useEffect(()=>{
        dispatch(fetchVehicles(createStringHeader(optionSelected)))
      },[optionSelected])

   
    return (
        <div className='body access-body'>
             <NavBar/>
            <div className='home-body'>
                <FormationAccess/>
                <VehicleNav/>
                <VehicleSearch/>
                
                <Table dataLst={vehicles} headings={headings} columnLst={columnLst} colWidth={colWidth}/>
            </div>
        </div> 
    )
}

export default Vehicle

