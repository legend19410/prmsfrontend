import React, {useEffect, useState}  from 'react'
import {useDispatch, useSelector} from 'react-redux'
import styles from './styles/RadioSearch.module.css'
import {createStringHeader} from '../../util/utilityFunctions'
import {searchRadios} from '../../redux/radios/radioActions'


export default function RadioSearch() {

    const [radioQuery, setRadioQuery] = useState('')
    const optionSelected = useSelector(state=>state.user.selectedFormations)
    const dispatch = useDispatch()
    

    useEffect(()=>{
        dispatch(searchRadios(createStringHeader(optionSelected), radioQuery))
    }, [radioQuery])


    return (
        <div className={styles.RadioSearch}>
            <label className='searchLabel' for=''>Enter search query:</label>
            <input 
                className='searchInput' 
                placeholder="serial #" 
                type="text" value={radioQuery} 
                onChange={(e)=>{setRadioQuery(e.target.value)}}> 
            </input>
        </div>
    )
}
