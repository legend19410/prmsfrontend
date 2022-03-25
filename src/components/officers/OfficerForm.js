import React, {useState, useEffect} from 'react'
import styles from './styles/OfficerForm.module.css'

function OfficerForm() {

    const [officerData, setOfficerData] = useState({
        regNo:"",
        rank:"",
        firstName:"",
        lastName:"",
        telephone:"",
        dateOfBirth:"",
        enlistmentDate:"",
        jcfEmail:"",
        emailPassword:"",
        address:""
    }) 

    const [passwordConfirmation, setPasswordConfirmation] = useState('')

    // const [message, setMessage] = useState("")

    // const [formations, selectedFormations] = useState([{name:"SO"},{name:"CIB"}])
    const [ranks, setRanks] = useState(['Cons.', 'Cpl.', 'Sgt.'])

    const handleSubmit = (event)=>{
        event.preventDefault()

        //submit to server
        // request('POST', )
        
    }

    // const validateOfficerData = ()=>{

    // }


    const handleChange = event => {
            const newData = {...officerData}
            newData[event.target.name] = event.target.value
            setOfficerData(newData)
            console.log(newData)
        
    }
    useEffect(() => {
        
        // fetch all the formations and store them in state

    }, [])

    return (
        <div className={`${styles.container}`}>
            <form className={`${styles.officerForm}`} onSubmit={event=>handleSubmit(event)}>

                <div className={`${styles.dataField}`}>
                    <label for='reg-no'>Reg No:</label>
                    <input 
                        id='reg-no' name="regNo" onChange={event=>handleChange(event)} 
                        value={officerData.regNo} type='number'
                    />
                </div>

                <div className={`${styles.dataField}`}>
                    <label>Rank:</label>
                    <select name="rank" onChange={event=>handleChange(event)} 
                            value={officerData.rank}
                    >
                        {
                            ranks.map((rank, index)=>(
                                <option key={index} value={rank}>{rank}</option>
                            ))
                        }
                    </select>
                </div>

                <div className={`${styles.dataField}`}>
                    <label>First Name:</label>
                    <input name="firstName" onChange={event=>handleChange(event)} 
                        value={officerData.firstName} type='text'
                />
                </div>

                <div className={`${styles.dataField}`}>
                    <label>Last Name:</label>
                    <input name="lastName" onChange={event=>handleChange(event)} 
                        value={officerData.lastName} type='text'
                    />
                </div>

                <div className={`${styles.dataField}`}>
                    <label>Telephone</label>
                    <input name="telephone" onChange={event=>handleChange(event)} 
                        value={officerData.telephone} type='text'
                    />
                </div>

                <div className={`${styles.dataField}`}>
                    <label>D.O.B:</label>
                    <input name="dateOfBirth" onChange={event=>handleChange(event)} value={officerData.dateOfBirth} type='date'/>
                </div>

                <div className={`${styles.dataField}`}>
                    <label>Enlist. Date:</label>
                    <input name="enlistmentDate" onChange={event=>handleChange(event)} value={officerData.enlistmentDate} type='date'/>
                </div>

                <div className={`${styles.dataField}`}>
                    <label>JCF Email Address:</label>
                    <input name="email" onChange={event=>handleChange(event)} value={officerData.email} type='email'/>
                </div>

                <div className={`${styles.dataField}`}>
                    <label>Password:</label>
                    <input name="emailPassword" onChange={event=>handleChange(event)} value={officerData.emailPassword} type='password'/>
                </div>

                <div className={`${styles.dataField}`}>
                    <label>Confirm Password:</label>
                    <input name="passwordConfirmation" onChange={event=>setPasswordConfirmation(event.target.value)} value={passwordConfirmation} type='password'/>
                </div>

                <div className={`${styles.dataField}`}>
                    <label>Address:</label>
                    <textarea name="address" onChange={event=>handleChange(event)} value={officerData.address}></textarea>
                </div>
                
                <div className={`${styles.dataField} ${styles.btnContainer}`}>
                    <button className={`${styles.submitBtn}`}>Submit</button>
                </div>

                
                {/* 
                <select name="cars" id="cars" multiple>
                    <option value="volvo">Role 1</option>
                    <option value="saab">Role 2</option>
                    <option value="opel">Opel</option>
                    <option value="audi">Audi</option>
                </select> */}

            </form>
        </div>
    )
}

export default OfficerForm
