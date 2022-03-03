import React, {useContext, useEffect, useState} from 'react'
import NavBar from '../layout/NavBar'
import {Context} from '../../context_store/ContextAPI'


export default function Home() {

    return (
        <div className='body access-body'>
            <NavBar/>
            <div className='home-body'>
                Welcome to the home page
            </div>
        </div>
    )
}
