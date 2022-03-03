import {NavLink} from 'react-router-dom'
import styles from './styles/Navbar.module.css'
import { useDispatch } from 'react-redux'
import {denyAccess} from '../../redux/user/userActions'
import {logout} from '../../util/utilityFunctions'

const NavBar = () => {

    const dispatch = useDispatch()

    const handleLogout = ()=>{
        logout()
        dispatch(denyAccess())
    }

    return(
            <div id='navBar' className={`${styles.navBar}`}>     
                <NavLink className={`${styles.link}`} to="/home"><li><img src="./images/home.png"/>Home</li></NavLink>
                <NavLink className={`${styles.link}`} to="/officers"><li><img src="./images/officer.png"/>Officers</li></NavLink>
                <NavLink className={`${styles.link}`} to="/schedule"><li><img src="./images/schedule.png"/>Work Schedule</li></NavLink>
                <NavLink className={`${styles.link}`} to="/duty"><li><img src="./images/duty.png"/>Duties Performed</li></NavLink>
                <NavLink className={`${styles.link}`} to="/vehicles"><li><img src="./images/vehicle.png"/>Vehicles</li></NavLink> 
                <NavLink className={`${styles.link}`} to="/radios"><li><img src="./images/radio.png"/>Radios</li></NavLink>
                <NavLink className={`${styles.link}`} to="/firearms"><li><img src="./images/firearm.png"/>Firearms</li></NavLink>
                <NavLink className={`${styles.link}`} to="/leave"><li><img src="./images/leave.png"/>Leave</li></NavLink> 
                <NavLink className={`${styles.link}`} to="/about"><li><img src="./images/about.png"/>About</li></NavLink> 
                <NavLink className={`${styles.link}`} to="/" onClick={()=>handleLogout()}><li><img src="./images/logout.png"/>Log out</li></NavLink>
                <NavLink className={`${styles.link}`} to='/admin'><li><img src="./images/super_admin.png"/>Admin</li></NavLink>
                <a className={`${styles.link}`} href="http://www.jcfconstab.com/jcfpolicies/html/manuals.html"><li><img src="./images/jcf_logo3.png"/>JCF Docs</li></a>
            </div>
    )
}

export default NavBar 