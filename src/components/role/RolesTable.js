import React from 'react';
// import styles from './styles/RolesRable.css'

function RolesTable({className, roles}) {
  

  console.log(roles)
  return (
    <div className={className}>
      <table>
        <thead>
          <tr>
              <th>Role Name</th>
              <th>Role Type</th>
              <th>Formation</th>
          </tr>
        </thead>
        <tbody>
        {
          roles.map((role, index)=>(
              <tr key={index}>
                <td>roleName</td>
                <td>{role.type}</td>
                <td>{role.formation.formName}</td>
              </tr>
            ))
        }   
        </tbody>
      </table>
    </div>
  )
}

export default RolesTable;
