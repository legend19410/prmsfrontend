import React, {useLayoutEffect, useState} from 'react'
import NavBar from '../layout/NavBar'
import styles from './styles/VehicleAssignment.module.css'
import {request} from '../../util/APICall'
import Table from '../shared_components/Table'
import { useSelector, useDispatch } from 'react-redux'
import { getRankAbbrev } from '../../util/utilityFunctions'
import FormationAccess from '../shared_components/FormationAccess'

export default function VehicleAssignment(){

	const [vehicleAssignments, setVehicleAssignments] = useState([])
	const [newAssignment, setNewAssignment] = useState({
		licensePlate:'',
		regNo:'',
		datetimeAssigned:'',
		datetimeAssignEnd:'',
		status:''
	})
	const officers = useSelector(state => state.officers.officers)
	const vehicles = useSelector(state => state.vehicles.vehicles)

	const headings = ['LICENSE PLATE', 'REG NO', 'DATE/TIME ASSIGN.', 'DATE/TIME END.', 'STATUS']
	const columnLst = ['licensePlate', 'regNo', 'datetimeAssigned', 'datetimeAssignEnd', 'status']
    const colWidth = [
            {
                minWidth: '20%',
                maxWidth: '20%',
                fontSize: '15px'
            },
            {
                minWidth: '20%',
                maxWidth: '20%',
                fontSize: '15px'
            },
            {
                minWidth: '20%',
                maxWidth: '25%',
                fontSize: '15px'
            },
            {
                minWidth: '20%',
                maxWidth: '25%',
                fontSize: '15px'
            },
			{
                minWidth: '20%',
                maxWidth: '25%',
                fontSize: '15px'
            }
    ]

	const updateAttribute = (attrib, value) =>{

		setNewAssignment(prevData=>{
			prevData[attrib] = value
			return prevData
		})
		console.log(newAssignment)
	}

	useLayoutEffect(()=>{
		request('GET', 'api/officer-vehicle-assignments', {}, {})
			.then(res=>{
				console.log(res.data)
				setVehicleAssignments(res.data.content)
			})
			.catch(error=>console.log(error.message))
	},[])
	return(
		<div className='body access-body'>
        	<NavBar/>
        	<div className={`home-body ${styles.vehicleAssignment}`}>

				<div className={`${styles.formationAccess}`}>
					<FormationAccess/>
				</div>

        		<div className={`${styles.assignInfo}`}>

					<div className={`${styles.dataField}`}>
						<label>Officer:</label>
						<select onChange={(e)=>updateAttribute('regNo',e.target.value)}>
							<option>None</option>
							{
								officers.map(officer=>(
									<option key={officer.regNo} value={officer.regNo} >
										{officer.regNo} {getRankAbbrev(officer.rank)} {officer.firstName.charAt(0)}. {officer.lastName}
									</option>
								))
							}
						</select>
					</div>

					<div className={`${styles.dataField}`}>
						<label>Vehicle:</label>
						<select onChange={(e)=>updateAttribute('licensePlate',e.target.value)}>
							<option>None</option>
							{
								vehicles.map((vehicle, index)=>(
									<option key={index} value={vehicle.licensePlate} >
										{vehicle.licensePlate} {vehicle.make} {vehicle.model} 
									</option>
								))
							}
						</select>
					</div>
		
					<div className={`${styles.dataField}`}>
						<label>Start Date/Time:</label>
						<input type='datetime-local'/>
					</div>
					
					<div className={`${styles.dataField}`}>
						<label>End Date/Time:</label>
						<input type='datetime-local'/>
					</div>
				
					<div className={`${styles.dataField}`}>
						<label>Status:</label>
						<input type='text'/>
					</div>

					<div className={`${styles.dataField}`}>
						<button >Update</button>
					</div>
					

        		</div>
        		<div className={`${styles.vehicleAssignTable}`}>
				<Table dataLst={vehicleAssignments} headings={headings} columnLst={columnLst} colWidth={colWidth}/>
        		</div>
        	</div>	
		</div>
	)
}