import React from 'react';
import NavBar from '../layout/NavBar'
import styles from './styles/CreateDuty.module.css'

function CreateDuty() {
  return (
    <div className='body access-body'>
        <NavBar/>
        <div className={`${styles.createDuty} home-body`}>
            <form className={`${styles.startDuty}`}>
                <div>
                    <label>Start Date/Time:</label>
                    <input type='datetime-local'/>
                </div>
                <div>
                    <label>Nature:</label>
                    <input type='text'/>
                </div>
                <div>
                    <label>Location:</label>
                    <input type='text'/>
                </div>
                <button> start Duty</button>
            </form>

            <form className={`${styles.endDuty}`}>
                <div>
                    <label>End Date/Time:</label>
                    <input type='datetime-local'/>
                </div>
                <div>
                    <label>Report:</label>
                    <textarea>...</textarea>
                </div>

                <button>End Duty</button>
            </form>

            <div className={`${styles.officerAssign}`}>
                <p>officer 1</p>
                <p>officer 2</p>
                <p>officer 3</p>
                <p>officer 4</p>
                <p>officer 5</p>
                <p>officer 6</p>
            </div>

            <div className={`${styles.vehicleAssign}`}>
                vehicle assignments
            </div>

            <div className={`${styles.firearmAssign}`}>
                firearm assignments
            </div>

            <div className={`${styles.radioAssign}`}>
                radio assignments
            </div>
        </div>
    </div>
  )
  
}

export default CreateDuty;
