import React, { useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { denyAccess } from '../../redux/user/userActions'
import { logout } from '../../util/utilityFunctions'
import styles from './styles/Nav.module.css'

function Nav() {

    const dropDown = useRef()
    const refMobile = useRef()

    const dispatch = useDispatch()

    const handleLogout = ()=>{
        logout()
        dispatch(denyAccess())
    }

    const remove = (ev)=>{
        console.log('evnt run')
            
            if (dropDown.current && !dropDown.current.contains(ev.target)) {
            
              dropDown.current.firstElementChild.style.display = "none"
            }
    }

    useEffect(()=>{
            document.addEventListener('click',  remove, true)
    },[])

    const display = (ev)=>{
        if(ev.target.id === 'mobile'){
            refMobile.current.style.display = 'initial'
            return
        }
        ev.target.firstElementChild.style.display = "initial"
    }
  return (
    <div className={styles.nav} >
        <div className={styles.desktopView}>
                <div className={styles.linkContainer}>
                        <NavLink to='/home'>Home</NavLink>
                </div>
                <div  onClick={e=>display(e)}  className={styles.linkContainer}>
                    Menu
                        <div  className={styles.drop}>
                            <NavLink className={`${styles.link}`} to="/officers"><li><img alt='' src="./images/officer.png"/>Officers</li></NavLink>
                            <NavLink className={`${styles.link}`} to="/schedule"><li><img alt='' src="./images/schedule.png"/>Work Schedule</li></NavLink>
                            <NavLink className={`${styles.link}`} to="/duty"><li><img alt='' src="./images/duty.png"/>Duties Performed</li></NavLink>
                            <NavLink className={`${styles.link}`} to="/vehicles"><li><img alt='' src="./images/vehicle.png"/>Vehicles</li></NavLink> 
                            <NavLink className={`${styles.link}`} to="/radios"><li><img alt='' src="./images/radio.png"/>Radios</li></NavLink>
                            <NavLink className={`${styles.link}`} to="/firearms"><li><img alt='' src="./images/firearm.png"/>Firearms</li></NavLink>
                            <NavLink className={`${styles.link}`} to="/leave"><li><img alt='' src="./images/leave.png"/>Leave</li></NavLink> 
                        </div>
                </div>
                <div className={styles.linkContainer}>
                    <button onClick={()=>handleLogout()} className={styles.logoutBtn}>Logout</button>
                </div>
        </div>
        <div className={styles.mobileView}>
            <div  onClick={e=>display(e)} ref={dropDown}  className={styles.linkContainer}>
                            <div  ref={refMobile} className={styles.drop}>
                                <NavLink className={`${styles.link}`} to="/home"><li><img alt='' src="./images/home.png"/>Home</li></NavLink>
                                <NavLink className={`${styles.link}`} to="/officers"><li><img alt='' src="./images/officer.png"/>Officers</li></NavLink>
                                <NavLink className={`${styles.link}`} to="/schedule"><li><img alt='' src="./images/schedule.png"/>Work Schedule</li></NavLink>
                                <NavLink className={`${styles.link}`} to="/duty"><li><img alt='' src="./images/duty.png"/>Duties Performed</li></NavLink>
                                <NavLink className={`${styles.link}`} to="/vehicles"><li><img alt='' src="./images/vehicle.png"/>Vehicles</li></NavLink> 
                                <NavLink className={`${styles.link}`} to="/radios"><li><img alt='' src="./images/radio.png"/>Radios</li></NavLink>
                                <NavLink className={`${styles.link}`} to="/firearms"><li><img alt='' src="./images/firearm.png"/>Firearms</li></NavLink>
                                <NavLink className={`${styles.link}`} to="/leave"><li><img alt='' src="./images/leave.png"/>Leave</li></NavLink> 
                                <a className={`${styles.link}`} onClick={()=>handleLogout()} href='#'><li><img alt='' src="./images/logout.png"></img>Logout</li></a>
                            </div>
                        <i  id='mobile' onClick={e=>display(e)} className='fas fa-bars'></i>
                    </div>
        </div>
        
    </div>
  )
}

export default Nav