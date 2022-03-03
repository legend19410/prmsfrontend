import React from 'react'
import {NavLink} from 'react-router-dom'
import styles from './styles/VehicleNav.module.css'


export default function VehicleNav(){

	return(

		<div className={`${styles.vehicleNav}`}>
			<ul>
				<NavLink className={`${styles.link}`} to='/vehicle-assignment'><li>Vehicle Assignments</li></NavLink>
				<NavLink className={`${styles.link}`} to='/create-vehicle'><li>Create Vehicle</li></NavLink>
				<NavLink className={`${styles.link}`} to='modify-vehicle'><li>Modify Vehicle</li></NavLink>
			</ul>
		</div>
	)
}