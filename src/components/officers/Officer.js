import React, {useLayoutEffect} from 'react'
import './styles/officer.css'
import { createStringHeader} from '../../util/utilityFunctions'
import { useSelector, useDispatch } from 'react-redux'
import { fetchOfficers } from '../../redux/officers/officerActions'
import OfficerSearch from './OfficerSearch'
import FormationAccess from '../shared_components/FormationAccess'
import OfficerTable from './OfficerTable'
import OfficerNav from './OfficerNav'
import Table from '../shared_components/PaginationTable'

const columnList = [
        {
            Header: 'REG NO',
            Footer: 'REG NO',
            accessor: 'regNo'
        },
        {
            Header: 'RANK',
            Footer: 'RANK',
            accessor: 'rank'
        },
        {
            Header: 'FIRST NAME',
            Footer: 'First Name',
            accessor: 'firstName'
        },
        {
            Header: 'LAST NAME',
            Footer: 'Last Name',
            accessor: 'lastName'
        },
        {
            Header: 'CONTACT',
            Footer: 'Contact',
            accessor: 'telephone'
        },
        {
            Header: 'COMPANY',
            Footer: 'Company',
            accessor: 'company'
        },
        {
            Header: 'PLATOON',
            Footer: 'Platoon',
            accessor: 'platoon'
        }
      
]

const Officer = () => {

    const officers = useSelector(state => state.officers.officers)
    const optionSelected = useSelector(state => state.user.selectedFormations)
    const dispatch = useDispatch()

    useLayoutEffect(()=>{
        dispatch(fetchOfficers(createStringHeader(optionSelected)))
        // eslint-disable-next-line react-hooks/exhaustive-deps
      },[optionSelected])

    return (
        <div className='body access-body'>
            <div className='officer home-body'>
                <div className='officer-head'>
                    <OfficerNav/>
                    <FormationAccess/>
                    <OfficerSearch/>
                    <div className='tableContainer'>
                            {/* <OfficerTable officers={officers}/> */}
                            
                            <Table columnList={columnList} tableData={officers}/>
                    </div>
                </div>
            </div>
        </div> 
    )
}

export default Officer

