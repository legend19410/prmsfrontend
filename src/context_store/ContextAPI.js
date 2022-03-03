import React, {useEffect, createContext, useState} from 'react'

export const Context = createContext()

export function Provider(props) {

    const [user, setUser] = useState({})
    const [officers, setOfficers] = useState([])
    const [officerQuery, setOfficerQuery] = useState('')
    const [isAuth, setIsAuth] = useState(false)
    const [permissions, setPermissions] = useState([])
    const [optionSelected, setOptionSelected] = useState([])

    useEffect(()=>{
        console.log('STORE RERENDERED')
    })

    return (
        <Context.Provider value={{
            officers: [officers, setOfficers],
            officerQuery: [officerQuery, setOfficerQuery],
            isAuth: [isAuth, setIsAuth],
            permissions: [permissions, setPermissions],
            optionSelected: [optionSelected, setOptionSelected],
            user: [user, setUser]
        }}>
            {props.children}
        </Context.Provider>
    )
}
