import React from 'react';

function FormationAssignmentTable({className, formAssign}) {
  return(
   <div className={className}>
    <table>
        <thead>
          <tr>
              <th>Formation Code</th>
              <th>Date Assigned</th>
              <th>Date Ended</th>
              <th>Status</th>
          </tr>
        </thead>
        <tbody>
        {
          formAssign.map((assign, index)=>(
              <tr key={index}>
                <td>{assign.id.formCode}</td>
                <td>{assign.id.dateAssigned}</td>
                <td>{assign.dateAssignEnd}</td>
                <td>{assign.status}</td>
              </tr>
            ))
        }   
        </tbody>
      </table>
    </div>
  )
}

export default FormationAssignmentTable