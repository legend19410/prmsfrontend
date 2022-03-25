import React from 'react'
import styles from './styles/Home.module.css'


export default function Home() {

    return (
        <div className='body access-body'>
            <div className={`${styles.home} home-body`}>
                    <div className={styles.banner} style={{backgroundImage:"url(/images/banner.jpg)"}}>
                            <h1>jamaica </h1>
                            <h1> Constabulary</h1>
                            <h1> force</h1>
                            <h3>A Force For Good * Serve & Protect * Together We Are Strong</h3>
                            <button>About</button>
                    </div>
                    <div className={styles.content}>
                            <div className={styles.box}>
                                    <div className={styles.imgContainer}>
                                            <img alt='' src='/images/img-1.jpg'/>
                                    </div>
                                    <p>
                                    The Department of Weapons and Tactical Training (DWTT) came into
                                     existence in October 2006 for officers to have specialized responsibility for firearms and tactical training. 
                                     Its mandate is to provide our law enforcement professionals with the tactical knowledge 
                                     and expertise to protect the life, property and dignity of all.
                                    </p>
                            </div>
                            <div className={styles.box}> 
                            <div className={styles.imgContainer}>
                                            <img alt='' src='/images/img-2.jpg'/>
                                    </div>
                                    <p>
                                    The Jamaica Constabulary Force’s Visual Identification Unit (VIU) conducts 
                                    all Identification Parades and provides technical expertise to improve the quality of criminal investigations.
                                    </p>
                            </div>
                            <div className={styles.box}> 
                            <div className={styles.imgContainer}>
                                            <img alt='' src='/images/img-3.jpg'/>
                                    </div>
                                    <p>
                                        The Marine Division is committed to preventing and combating crime along the coastline and in the territorial waters of Jamaica.
                                        Some of its responsibilities include:
                                        Surveillance of the country’s more than 140 uncontrolled ports;
                                        Enforcing counter-narcotics, fisheries and firearm legislation;
                                        Search and rescue operations;
                                        Environmental and wildlife protection; and
                                        Monitoring threats to our borders
                                    </p>
                            </div>
                    </div>
                    

            </div>
        </div>
    )
}
