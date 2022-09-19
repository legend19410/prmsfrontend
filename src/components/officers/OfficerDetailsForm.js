import React, {useState} from 'react';
import {request} from '../../util/APICall'
import styles from './styles/OfficerDetailsForm.module.css'

function OfficerDetailsForm({className, officer, setOfficer}) {

    const [ranks, setRanks] = useState([
        'Constable', 'Corporal', 'Sergeant', 'Inspector', 'ASP', 
        'DSP', 'SSP', 'ACP', 'DCP', 'CP'
    ])
    const [platoons, setPlatoons] = useState([
        'Platoon One', 'Platoon Two', 'Platoons Three'
    ])

    const [responseMessage, setResponseMessage] = useState({
        error:false,
        message:''
    })

    const handleChange = (event) => {
        setOfficer((preVal) => {return {...preVal, [event.target.className]:event.target.value}})
        console.log(officer)
    }

    const handleSelection = (e) =>{
        setOfficer((preVal) => {return {...preVal, [e.target.className]:e.target.value}})
        console.log(officer)
    }

    const handleUpdate = (e) =>{
        const officerData = {  
            rank: officer.rank, 
            telephone: officer.telephone,
            JCFEmail: officer.jcfemail, 
            address: officer.address
        }

        request('PATCH', `api/officer/${officer.regNo}`, {}, officerData)
            .then(res=>{
                setResponseMessage({error: false, message: 'Successfully updated officer'})
                setOfficer(res.data)
            })
            .catch(error=>{
                setResponseMessage({error: true, message: error.message})
            })
    }
    

    return(
      <div className={`${className} ${styles.form}`}>
        <p className={`${styles.field}`}>
            <label>Reg No:</label>{officer.regNo}
        </p>
        <p className={`${styles.field}`}>
            <label>Rank:</label>
            <select value={officer.rank} onChange={e=>handleSelection(e)} className='rank'>
                {
                    ranks.map((rank, index)=>(
                        <option key={index} value={rank}>{rank}</option>
                    ))
                }
            </select>
        </p>
        <p className={`${styles.field}`}>
            <label>First Name:</label>
            <label>{officer.firstName}</label>
            {/* <input type='text' onChange={e=>handleChange(e)} className='firstName' value={officer.firstName}/> */}
        </p>
        <p className={`${styles.field}`}>
            <label>Last Name:</label>
            <label>{officer.lastName}</label>
            {/* <input type='text' onChange={e=>handleChange(e)} className='lastName' value={officer.lastName}/> */}
        </p>
        <p className={`${styles.field}`}>
            <label>D.O.B:</label>
            <label>{officer.dateOfBirth}</label>
            {/* <input type='date' onChange={e=>handleChange(e)} className='dateOfBirth' value={officer.dateOfBirth}/> */}
        </p>
        <p className={`${styles.field}`}>
            <label>Enlist. Date:</label>
            <label>{officer.enlistmentDate}</label>
            {/* <input type='date'   onChange={e=>handleChange(e)} className='enlistmentDate' value={officer.enlistmentDate}/> */}
        </p>
        <p className={`${styles.field}`}>
            <label>Telephone:</label>
            <input type='text' onChange={e=>handleChange(e)} className='telephone' value={officer.telephone}/>
        </p>
        <p className={`${styles.field}`}>
            <label>Email:</label>
            <input type='email' onChange={e=>handleChange(e)} className='jcfemail' value={officer.jcfemail}/>
        </p>
    
        <p className={`${styles.field}`}>
            <label>Address:</label>
            <textarea onChange={e=>handleChange(e)} className='address'  value={officer.address}/>
        </p>
    
        <p className={`${styles.field}`}>
            <label>Platoon:</label>
            <select value={officer.platoon} onChange={e=>handleSelection(e)} className='platoon'>
                {
                    platoons.map((platoon, index)=>(
                        <option key={index} value={platoon}>{platoon}</option>
                    ))
                }
            </select>
        </p>
        <p className={`${styles.field}`}>
            <label>Company:</label>
            <label>{officer.company}</label>
            {/* <input onChange={e=>handleChange(e)} className='company' type='text' value={officer.company}/> */}
        </p>
        <button className={`${styles.submitBtn}`} onClick={(e)=>{handleUpdate(e)}}>Submit Changes</button>
        <p className={`${responseMessage.error?styles.failed:styles.success} ${styles.message}`}>{responseMessage.message}</p>
    </div>
  ) 
}

export default OfficerDetailsForm
