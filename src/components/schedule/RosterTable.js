import React, {useState,useLayoutEffect,useEffect} from 'react'
import Officer from '../officers/Officer'
import styles from './styles/RosterTable.module.css'
import {useDispatch} from 'react-redux'
import {getRankAbbrev} from '../../util/utilityFunctions'

function RosterTable({submitSchedule, week, weekSchedule, updateTask}) {

    const dispatch = useDispatch()
    const  [reren, setRerend] = useState(false)
    const [dutyTypes, setDutyTypes] = useState([])
    
    useEffect(()=>{
        // fetch types from server
    },[])

    useLayoutEffect(() => {
       
    }, [reren])
    
    return (
        <div className={`${styles.rosterTable}`} id='RosterTable'>
                <button className={`${styles.submitBtn}`} onClick={(e)=>submitSchedule(e)}>Submit Schedule</button>
                <table>
                    <thead>
                        <tr className={`${styles.rosterTableHead}`}>
                            <th className={`${styles.nameCol} ${styles.borderTopLeftRadius}`} id='0'>Officer</th>
                            {
                                Object.keys(week).map((key, index)=>(
                                    <th className={`${styles.daysCol} column${index+1} ${index === 6? styles.borderTopRightRadius:''}`}>{week[key]}</th>
                                ))
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {
                            
                            weekSchedule.map((officer, outterIndex) => (
                                    <tr key={officer.regNo} id={officer.regNo}>
                                    
                                        <td className={`${styles.nameCol}`}>  {getRankAbbrev(officer.rank)} {officer.firstName.charAt(0)}. {officer.lastName}</td>
                                        {

                                            officer.weekDays.map((day, innerIndex)=>(
                                                <td className={`${styles.daysCol}`} key={innerIndex}>
                                                    
                                                    <input className={`${innerIndex}`} value={day.duty?day.duty:''}  onChange={(e)=>{
                                                        setRerend(reren?false:true);
                                                        dispatch(updateTask(e))}}  type="text" list="duties"/>    
                                                </td>
                                            ))
                                        }
							        </tr>
                                ))
                        }
                    </tbody>
                    <datalist id="duties">
                        <option>Patrol</option>
                        <option>Check point</option>
                    </datalist>
                </table>
            </div>
    )
}

export default RosterTable
