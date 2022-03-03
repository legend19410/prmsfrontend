import React from 'react'
import {NavLink} from 'react-router-dom'
import styles from './styles/OfficerNav.module.css'
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';

export default function OfficerNav(){

	const iconStyles = {
		marginRight: 5 
	}

	return(

		<div className={`${styles.officerNav}`}>
				<img className={styles.officerLogo} src='/images/officer.png'/>
				<p className={styles.officerHeading}>OFFICERS</p>
				<NavLink className={`${styles.link}`} to='/officers'><GroupOutlinedIcon style={iconStyles}/>All Officers</NavLink>
				<NavLink className={`${styles.link}`} to='/add-officer'><PersonAddAltOutlinedIcon style={iconStyles}/>Create Officer</NavLink>
				<NavLink className={`${styles.link}`} to='/role-assignment'><AddBoxOutlinedIcon style={iconStyles}/>Role Assignment</NavLink>
		</div>
	)
}