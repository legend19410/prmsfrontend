import React, {useLayoutEffect} from 'react'
import NavBar from '../layout/NavBar'
import LeaveTable from './LeaveTable'
import {useDispatch, useSelector} from 'react-redux'
import { fetchLeave } from '../../redux/officers/officerActions'
import {createStringHeader} from '../../util/utilityFunctions'

function Leave() {

    const leaves = useSelector(state=> state.officers.leaves)
    const optionSelected = useSelector(state => state.user.selectedFormations)
    const dispatch = useDispatch()

    useLayoutEffect(() => {
        dispatch(fetchLeave(createStringHeader(optionSelected)))    
    }, [])

    return (
        <div id='Leave' className='body access-body'>
             <NavBar/>
            <div className='home-body'>
                welcome to leave page
                <LeaveTable leaves={leaves}/>
            </div>
        </div>
    )
}

export default Leave
