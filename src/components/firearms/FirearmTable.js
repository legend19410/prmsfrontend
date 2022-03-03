import React from 'react'
import {NavLink} from 'react-router-dom'
import styles from './styles/FirearmTable.module.css'

function FirearmTable({firearms}) {
  return(
        <div className={`${styles.FirearmTable}`}>
            <ul className={`${styles.responsiveTable}`}>
            <li className={`${styles.tableHeader}`}>
                <div className={`${styles.col} ${styles.col1}`}>Serial Number</div>
                <div className={`${styles.col} ${styles.col2}`}>brand</div>
                <div className={`${styles.col} ${styles.col3}`}>type</div>

            </li>
            {
            firearms.map((firearm, index) => (
                                        
            <NavLink key={index} style={{textDecoration: 'none',
                            color: 'inherit'}} 
                    to={`/firearm-info/${firearm.serialNo}`}>
                <li className={`${styles.tableBody}`}>
                    <div className={`${styles.col} ${styles.col1}`}>{firearm.serialNo}</div>
                    <div className={`${styles.col} ${styles.col2}`}>{firearm.brand}</div>
                    <div className={`${styles.col} ${styles.col3}`}>{firearm.type}</div>
                </li>
            </NavLink>
                                    
            ))
            }       
        </ul>
     </div>
    ) 
}

export default FirearmTable;
