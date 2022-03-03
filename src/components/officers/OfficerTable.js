import React from 'react'
import {NavLink} from 'react-router-dom'
import styles from './styles/OfficerTable.module.css'

function OfficerTable({officers}) {
  return(
      <div className={`${styles.officerTable}`}>
        <ul className={`${styles.responsiveTable}`}>
            <li className={`${styles.tableHeader}`}>
                <div className={`${styles.col} ${styles.col1}`}>Reg No</div>
                <div className={`${styles.col} ${styles.col2}`}>Rank</div>
                <div className={`${styles.col} ${styles.col3}`}>First Name</div>
                <div className={`${styles.col} ${styles.col4}`}>Last Name</div>
                <div className={`${styles.col} ${styles.col5}`}>Enlist Date</div>
                <div className={`${styles.col} ${styles.col6}`}>Contact</div>
                <div className={`${styles.col} ${styles.col7}`}>Email</div>
            </li>
            {
            officers.map((officer, index) => (
                                        
            <NavLink key={officer.regNo} style={{textDecoration: 'none',
                            color: 'inherit'}} 
                    to={`/officer-info/${officer.regNo}`}>
                <li className={`${styles.tableBody}`}>
                    <div className={`${styles.col} ${styles.col1}`}>{officer.regNo}</div>
                    <div className={`${styles.col} ${styles.col2}`}>{officer.rank}</div>
                    <div className={`${styles.col} ${styles.col3}`}>{officer.firstName}</div>
                    <div className={`${styles.col} ${styles.col4}`}>{officer.lastName}</div> 
                    <div className={`${styles.col} ${styles.col5}`}>{officer.enlistmentDate}</div>
                    <div className={`${styles.col} ${styles.col6}`}>{officer.telephone}</div>
                    <div className={`${styles.col} ${styles.col7}`}>{officer.jcfemail}</div>
                </li>
            </NavLink>
                                    
            ))
            }       
        </ul>
     </div>
    ) 
}

export default OfficerTable;
