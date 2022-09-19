import React, {useMemo} from 'react'
import {NavLink, useNavigate} from 'react-router-dom'
import {useTable, usePagination, useRowSelect} from 'react-table'
import { Checkbox } from './Checkbox'
// import MOCK_DATA from './MOCK_DATA.json'
// import {COLUMNS} from './columns'
import './styles/PaginationTable.css'

function Table({columnList, tableData}) {

    const navigate = useNavigate()
    const columns = columnList//useMemo(()=> columnList, [])
    const data = tableData//useMemo(()=> tableData, [])

    const tableInstance = useTable({
        columns: columns,
        data: data,
        // initialState: {pageIndex: 23}
    }, usePagination, useRowSelect,
        (hooks)   =>{
                hooks.visibleColumns.push((columns)=>{
                    return [
                        {
                            id: 'selection',
                            Header: ({getToggleAllRowsSelectedProps})=>(
                                <Checkbox {...getToggleAllRowsSelectedProps()}/>
                            ),
                            Cell: ({row}) => <Checkbox {...row.getToggleRowSelectedProps()}/> ,      
                        },
                        ...columns,
                    ]
                })
        }
    )

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        nextPage,
        previousPage,
        canNextPage,
        canPreviousPage,
        pageOptions,
        state,
        gotoPage,
        pageCount,
        prepareRow,
        selectedFlatRows
    } = tableInstance

    const {pageIndex} = state
  return (
    <div id='table'>

        <table {...getTableProps()}>
            <thead>
                    {
                        headerGroups.map(headerGroup=>(
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                
                                {
                                    headerGroup.headers.map((column)=>(
                                        <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                                    ))
                                }
                               
                            </tr>

                        ))
                    }
                    
            </thead>
            <tbody {...getTableBodyProps()}>
                    {
                        page.map(row=>{
                            prepareRow(row)
                            return (
                                
                                <tr onClick={()=>navigate(`/officer-info/${row.values.regNo}`)} {...page.getRowProps}>
                                    
                                    {console.log(row.values,'RRRRRRRRRRRRROOWWWWWWWW')}
                                    
                                    
                                {
                                    row.cells.map((cell)=>{
                                        return(
                                           
                                            <td {...cell.getCellProps()}>
                                                    {console.log(cell, 'CELELLLLLLLLll')}
                                                    {
                                                        cell.column.id === 'selection'?(
                                                            cell.render('Cell')
                                                        ):(
                                                            <NavLink  to={`/officer-info/${row.values.regNo}`} style={{textDecoration: 'none', color: 'inherit'}} >
                                                                        {cell.render('Cell')}
                                                            </NavLink>
                                                        )
                                                    }
                                                    
                                            </td>
                                           
                                        ) 
                                    })
                                }
                
                                </tr>
                          
                            )
                        })
                    }
                   
            </tbody>
                    
        </table>
        <pre>
                        <code>
                            {
                                JSON.stringify(
                                    {
                                        selectedFlatRows: selectedFlatRows.map(row => row.original),
                                    },
                                    null,
                                    2
                                )
                            }
                        </code>
                    </pre>
        <div>
        <span>
                        Page{' '}
                        <strong>
                            {pageIndex + 1} of {pageOptions.length}
                        </strong>{' '}
                    </span>
                    <span>
                            | Go to page: {' '}
                            <input type='number' defaultValue={pageIndex + 1}
                            onChange={e=>{
                                const pageNumber = e.target.value ? Number(e.target.value) - 1: 0
                                gotoPage(pageNumber)
                            }}
                            style={{width: '50px'}}
                            />
                    </span>
                    <button onClick={()=>previousPage()} disabled={!canPreviousPage}>Previous</button>
                    <button onClick={()=>nextPage()} disabled={!canNextPage}>Next</button>
        </div>

    </div>
  )
}

export default Table