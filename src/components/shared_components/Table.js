import React from 'react'
import styles from './styles/Table.module.css'

function Table({dataLst, headings, columnLst, colWidth}) {
  return(
      <div className={`${styles.officerTable}`}>
        <ul className={`${styles.responsiveTable}`}>
            <li className={`${styles.tableHeader}`}>
                {
                    headings.map((heading, index)=>(
                        <div key={index} className={`${styles.col}`} style={colWidth[index + 1]}>{heading}</div>
                    ))
                }
            </li>
            {
                dataLst.map((data, outterIndex) => (
                            
                    <li className={`${styles.tableBody}`}>
                    {
                        columnLst.map((column, innerIndex) => (
                            <div key={innerIndex} className={`${styles.col}`} style={colWidth[innerIndex + 1]}>{data[column]?data[column]:data.id[column]}</div> 
                        ))
                    }
                    </li>               
                ))    
            }              
        </ul>
     </div>
    ) 
}

export default Table;
