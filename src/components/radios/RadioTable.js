import React from 'react'
import {NavLink} from 'react-router-dom'
import styles from './styles/RadioTable.module.css'

function RadioTable({radios}) {
  return(
        <div className={`${styles.RadioTable}`}>
            <ul className={`${styles.responsiveTable}`}>
            <li className={`${styles.tableHeader}`}>
                <div className={`${styles.col} ${styles.col1}`}>Serial Number</div>
                <div className={`${styles.col} ${styles.col2}`}>Type</div>
            </li>
            {
            radios.map((radio, index) => (
                                        
            <NavLink key={index} style={{textDecoration: 'none',
                            color: 'inherit'}} 
                    to={`/radio-info/${radio.serialNo}`}>
                <li className={`${styles.tableBody}`}>
                    <div className={`${styles.col} ${styles.col1}`}>{radio.serialNo}</div>
                    <div className={`${styles.col} ${styles.col2}`}>{radio.type}</div>
                </li>
            </NavLink>
                                    
            ))
            }       
        </ul>
     </div>
    ) 
}

export default RadioTable;
