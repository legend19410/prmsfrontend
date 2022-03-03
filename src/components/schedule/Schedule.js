import React, {useLayoutEffect, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import NavBar from '../layout/NavBar'
import { request } from '../../util/APICall'
import RosterTable from './RosterTable'
import FormationAccess from '../shared_components/FormationAccess'
import {createStringHeader} from '../../util/utilityFunctions'
import { fetchSchedule } from '../../redux/officers/officerActions'
import { updateTask } from '../../redux/officers/officerActions'

import moment from 'moment'
import styles from './styles/Schedule.module.css'

export default function Schedule() {

    const [week, setWeek] = useState({})
    const weekSchedule = useSelector(state=>state.officers.schedule)
    const optionSelected = useSelector(state=>state.user.selectedFormations)
    const [selectedWeek, setSelectedWeek] = useState(moment())
    const dispatch = useDispatch()
    

    const generateWeek = (weekDate) =>{

        let startingDate = weekDate.startOf('week')
        setWeek({
            Sunday:startingDate.format("ddd MMM Do YYYY"),
            Monday:startingDate.add(1,'day').format("ddd MMM Do YYYY"),
            Tuesday:startingDate.add(1,'day').format("ddd MMM Do YYYY"),
            Wenesday:startingDate.add(1,'day').format("ddd MMM Do YYYY"),
            Thursday:startingDate.add(1,'day').format("ddd MMM Do YYYY"),
            Friday:startingDate.add(1,'day').format("ddd MMM Do YYYY"),
            Saturday:startingDate.add(1,'day').format("ddd MMM Do YYYY")
        })
         
    }

    const submitSchedule = ()=>{
        request('POST', 'api/submitSchedule', {}, {schedule:weekSchedule})
        .then(res=>{console.log('Check ur db')}).then(err=>{})
    }

    const generateWeekSchedule = (officers)=>{
        const startingDate = selectedWeek.startOf('week')
        const week = []
        week.push(startingDate.toISOString())
        for(let i=0; i<=5; i++){
            week.push(startingDate.add(1,'day').toISOString())
        }
        const newSchedule = []
        officers.forEach(officer=>{
            let officerSchedule = []
            week.forEach(date=>{
                officerSchedule.push({officerRegNo:officer.regNo, date:date, duty:null})
            })
            newSchedule.push({regNo:officer.regNo, 
                            rank:officer.rank,
                            firstName:officer.firstName, 
                            lastName:officer.lastName, 
                            weekDays:officerSchedule
            })
        })
        return newSchedule
    }

  
    useLayoutEffect(()=>{

        generateWeek(selectedWeek)
        dispatch(fetchSchedule(createStringHeader(optionSelected), generateWeekSchedule))
    
    },[optionSelected, selectedWeek])

    
    return (
        <div className='body access-body'>
            <NavBar/>
            <div className='home-body'>
                <FormationAccess/>
                <div className={styles.selectWeek}>
                    <label>Select Week:</label>
                    <input onChange={e=>setSelectedWeek(moment(e.target.value))} type='date'/>
                </div>
                <RosterTable submitSchedule={submitSchedule} week={week} weekSchedule={weekSchedule} updateTask={updateTask}/>
            </div>

        </div>
    )
}
