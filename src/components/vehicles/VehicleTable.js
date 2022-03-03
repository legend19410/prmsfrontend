import React from 'react'
import {NavLink} from 'react-router-dom'
import styles from './styles/VehicleTable.module.css'

function VehicleTable({vehicles}) {
    console.log(vehicles)
  return(
        <div className={`${styles.vehicleTable}`}>
            <ul className={`${styles.responsiveTable}`}>
            <li className={`${styles.tableHeader}`}>
                <div className={`${styles.col} ${styles.col1}`}>License Plate</div>
                <div className={`${styles.col} ${styles.col2}`}>Make</div>
                <div className={`${styles.col} ${styles.col3}`}>Model</div>
                <div className={`${styles.col} ${styles.col4}`}>Year</div>
            </li>
            {
            vehicles.map((vehicle, index) => (
                                        
            <NavLink key={index} style={{textDecoration: 'none',
                            color: 'inherit'}} 
                    to={`/vehicle-info/${vehicle.regNo}`}>
                <li className={`${styles.tableBody}`}>
                    <div className={`${styles.col} ${styles.col1}`}>{vehicle.licensePlate}</div>
                    <div className={`${styles.col} ${styles.col2}`}>{vehicle.make}</div>
                    <div className={`${styles.col} ${styles.col3}`}>{vehicle.model}</div>
                    <div className={`${styles.col} ${styles.col4}`}>{vehicle.year}</div> 
                    {/* <div className={`${styles.col} ${styles.col5}`}>{officer.enlistmentDate}</div>
                    <div className={`${styles.col} ${styles.col6}`}>{officer.telephone}</div>
                    <div className={`${styles.col} ${styles.col7}`}>{officer.jcfemail}</div> */}
                </li>
            </NavLink>
                                    
            ))
            }       
        </ul>
     </div>
    ) 
}

export default VehicleTable;
