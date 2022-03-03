import React, {useEffect, useState}  from 'react'
import {useDispatch, useSelector} from 'react-redux'
import './styles/officer_search.css'
import {createStringHeader} from '../../util/utilityFunctions'
import {searchOfficers} from '../../redux/officers/officerActions'


export default function OfficerSearch() {

    const [officerQuery, setOfficerQuery] = useState('')
    const optionSelected = useSelector(state=>state.user.selectedFormations)
    const dispatch = useDispatch()
    

    useEffect(()=>{
        dispatch(searchOfficers(createStringHeader(optionSelected), officerQuery))
    }, [officerQuery])


    return (
        <div id='officerSearch'>
            <label className='search-label'>Enter search query:</label>
            <input 
                className='search-input' 
                placeholder="name or reg no" 
                type="text" value={officerQuery} 
                onChange={(e)=>{setOfficerQuery(e.target.value)}}> 
            </input>
        </div>
    )
}
