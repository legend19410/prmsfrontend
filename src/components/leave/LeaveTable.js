import React from 'react'
import './LeaveTable.css'

function LeaveTable({leaves}) {

    return (
        <div>
            <div className="container">
                    <ul className="responsive-table">
                        <li className="table-header">
                            <div className="col col-1">Reg No</div>
                            <div className="col col-2">Rank</div>
                            <div className="col col-3">Name</div>
                            <div className="col col-4">type</div>
                            <div className="col col-5">Start Date</div>
                            <div className="col col-6">End Date</div>
                            <div className="col col-7">Address</div>
                        </li>
                     
                        {
                            leaves.map((leave, index) => (
                                                        
                            <li key={index} className='table-body'>
                                <div className="col col-1">{leave.id.officerRegNo}</div>
                                <div className="col col-2">{leave.officer.rank}</div>
                                <div className="col col-3">{leave.officer.firstName.charAt(0)}. {leave.officer.lastName}</div>
                                <div className="col col-4">{leave.id.type}</div> 
                                <div className="col col-5">{leave.id.startDate}</div>
                                <div className="col col-6">{leave.endDate}</div>
                                <div className="col col-7">{leave.address}</div>
                            </li>
                   
                                                    
                            ))
                        }       
                      
                    </ul>
                </div>
        </div>
    )
}

export default LeaveTable
