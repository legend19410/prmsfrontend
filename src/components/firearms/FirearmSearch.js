import React, {useEffect, useState}  from 'react'
import {useDispatch, useSelector} from 'react-redux'
import styles from './styles/FirearmSearch.module.css'
import {createStringHeader} from '../../util/utilityFunctions'
import {searchFirearms} from '../../redux/firearms/firearmActions'


export default function FirearmSearch() {

    const [firearmQuery, setFirearmQuery] = useState('')
    const optionSelected = useSelector(state=>state.user.selectedFormations)
    const dispatch = useDispatch()
    

    useEffect(()=>{
        dispatch(searchFirearms(createStringHeader(optionSelected), firearmQuery))
    }, [firearmQuery])


    return (
        <div className={styles.firearmSearch}>
            <label className='searchLabel' for=''>Enter search query:</label>
            <input 
                className='searchInput' 
                placeholder="serial #" 
                type="text" value={firearmQuery} 
                onChange={(e)=>{setFirearmQuery(e.target.value)}}> 
            </input>
        </div>
    )
}
