import React from 'react'
import { useSelector } from 'react-redux'
import Nav from './Nav'

import styles from './styles/Header.module.css'

export default function Header() {

     const user = useSelector(state=>state.user.user)
     const isAuth = useSelector(state => state.user.isAuth)
     const officerHeadDress = './images/officer_head_dress.jpg'
     const rankAndFileHeadDress = './images/rank_N_file_head_dress.jpg'

     const getHeadDress = (rank) => {
        if (user.rank === 'DC') return rankAndFileHeadDress
         if (user.rank === 'Constable') return rankAndFileHeadDress
         if (user.rank === 'Corporal') return rankAndFileHeadDress
         if (user.rank === 'Sergeant') return rankAndFileHeadDress
         if (user.rank === 'Inspector') return rankAndFileHeadDress
         if (user.rank === 'ASP') return officerHeadDress
         if (user.rank === 'DSP') return officerHeadDress
         if (user.rank === 'SP') return officerHeadDress
         if (user.rank === 'SSP') return officerHeadDress
         if (user.rank === 'ACP') return officerHeadDress
         if (user.rank === 'DCP') return officerHeadDress
         if (user.rank === 'CP') return officerHeadDress
     }

    return (
        <div id='header' className={styles.header}>
            <img className={styles.logo} alt='' src="./images/jcf_logo2.jpg"></img>
            <div className={styles.headings}>
                <p className={styles.entityName}>Jamaica Constabulary Force</p>
                <p className={styles.entityMotto}>Resource Management System</p>
            </div>
            {isAuth?(<Nav/>):(<div></div>)}
            {
                isAuth?(
                    <div className={styles.profile}>
                        <div className={styles.profilePhoto}>
                                <img  src='./images/profile-photo.jpg' alt=''/>
                        </div>
                        <p className={styles.profileName}>{user.rank} {user.firstName} {user.lastName}</p>
                        <img className={styles.headDress} src={getHeadDress(user.rank)} alt=""/>

                    </div>
                ):(<div className={styles.profile}></div>)
            }
            
        </div>
    )
}
