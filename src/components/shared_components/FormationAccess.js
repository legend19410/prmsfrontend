import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Option from './Option'
import styles from './styles/FormationAccess.module.css'
import { getFormationOptions } from '../../util/utilityFunctions'
import { updateSelectedFormations } from '../../redux/user/userActions'

import { default as ReactSelect } from "react-select";

function FormationAccess() {

    const permissions = useSelector(state=>state.user.user.roles)
    const optionSelected = useSelector(state=>state.user.selectedFormations)
    const dispatch = useDispatch()

    return (
        <div  className={styles.formationAccess}>
            
                <span
                    className={styles.options}
                    data-toggle="popover"
                    data-trigger="focus"
                    data-content="Please select account(s)"
                >
                    <ReactSelect
                        options={getFormationOptions(permissions)}
                        isMulti
                        closeMenuOnSelect={false}
                        hideSelectedOptions={false}
                        components={{
                            Option
                        }}
                        allowSelectAll={true}
                        onChange={(selected)=>dispatch(updateSelectedFormations(selected))}
                        value={optionSelected}
                    />
                    
                    
                </span>
            <button 
                className={styles.selectAll} 
                onClick={()=>dispatch(updateSelectedFormations(getFormationOptions(permissions)))}>
                Select All
            </button>
        </div>
    )
}

export default FormationAccess
