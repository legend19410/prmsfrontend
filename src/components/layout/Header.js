import React from 'react'
import './styles/header.css'
import { useSelector } from 'react-redux'

export default function Header() {

     const user = useSelector(state=>state.user.user)
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
        <div id='header' className='header'>
            <img className='logo' src="./images/jcf_logo2.jpg"></img>
            <div className='headings'>
                <p className="entity-name">Jamaica Constabulary Force</p>
                <p className='entity-motto'>Resource Management System</p>
                {/* <p className='entity-motto'>Rule of Law * Respect for All * A Force for Good</p> */}
            </div>
            {
                (Object.keys(user).length !== 0)?(
                    <div className='profile'>
                        <img className='profile-photo' src='./images/profile-photo.jpg'/>
                        <p className='profile-name'>{user.rank} {user.firstName} {user.lastName}</p>
                        <img className='head-dress' src={getHeadDress(user.rank)}/>

                    </div>
                ):(<div></div>)
            }
            
        </div>
    )
}
