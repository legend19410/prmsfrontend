import React, {useEffect, useState}  from 'react'
import {useDispatch, useSelector} from 'react-redux'
import styles from './styles/VehicleSearch.module.css'
import {createStringHeader} from '../../util/utilityFunctions'
import {searchVehicles} from '../../redux/vehicles/vehicleActions'


export default function VehicleSearch() {

    const [vehicleQuery, setVehicleQuery] = useState('')
    const optionSelected = useSelector(state=>state.user.selectedFormations)
    const dispatch = useDispatch()
    

    useEffect(()=>{
        dispatch(searchVehicles(createStringHeader(optionSelected), vehicleQuery))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [vehicleQuery])


    return (
        <div className={styles.vehicleSearch}>
            <label className='searchLabel' for=''>Enter search query:</label>
            <input 
                className='searchInput' 
                placeholder="plate #" 
                type="text" value={vehicleQuery} 
                onChange={(e)=>{setVehicleQuery(e.target.value)}}> 
            </input>
        </div>
    )
}
