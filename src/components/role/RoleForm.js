import React, {useState, useEffect} from 'react'
import { request } from '../../util/APICall'
import styles from './RoleForm.module.css'

function RoleForm() {

    const [roleData, setRoleData] = useState({
        type:"",
        formCode:"",
        name:""
    }) 


    const [message, setMessage] = useState("")

    const [formations, selectedFormations] = useState([{name:"SO"},{name:"CIB"}])

    const [roleTypes, setRoleTypes] = useState(['User', 'Admin', 'Super-Admin'])


    const handleSubmit = (event)=>{
        event.preventDefault()

        //submit to server
        // request('POST', )
        
    }

    const validateRoleData = ()=>{

    }


    const handleChange = event => {
            const newData = {...roleData}
            newData[event.target.name] = event.target.value
            setRoleData(newData)
            console.log(newData)
        
    }
    useEffect(() => {
        
        // fetch all the formations and store them in state

    }, [])

    return (
        <div className={`${styles.container}`}>
            <form className={`${styles.officerForm}`} onSubmit={event=>handleSubmit(event)}>

                <div className={`${styles.dataField}`}>
                    <label>Role Name:</label>
                    <label>{roleData.name}</label>
                </div>

                <div className={`${styles.dataField}`}>
                    <label>Role Type:</label>
                    <select name="type" onChange={event=>handleChange(event)} 
                            value={roleData.type}
                    >
                        {
                            roleTypes.map((type, index)=>(
                                <option key={index} value={type}>{type}</option>
                            ))
                        }
                    </select>
                </div>

                 <div className={`${styles.dataField}`}>
                    <label>Formation:</label>
                    <select name="formCode" onChange={event=>handleChange(event)} 
                            value={roleData.formCode}
                    >
                        {
                            formations.map((formation, index)=>(
                                <option key={index} value={formation.name}>{formation.name}</option>
                            ))
                        }
                    </select>
                </div>
            </form>
        </div>
    )
}

export default RoleForm
