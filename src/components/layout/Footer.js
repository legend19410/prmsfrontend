import React from 'react'
import styles from './styles/Footer.module.css'


export default function Footer() {

    return (
        <section className={styles.footer}>

    <div className={styles.boxContainer}>

        <div className={styles.box}>
            <h3> JCF Resource Manger </h3>
            <p>
            The mission of the Jamaica Constabulary Force is to serve, protect and reassure the people in Jamaica through the delivery of impartial and professional services aimed at:
            </p>
            <ul className={styles.jcfGoals}>
                    <li>Maintenance of law and order</li>
                    <li>Protection of life and property</li>
                    <li>Prevention and detection of crime</li>
                    <li>Preservation of peace</li>
                </ul>
            {/* <div className={styles.share}>
                <a href="#" className="fab fa-facebook-f"></a>
                <a href="#" className="fab fa-twitter"></a>
                <a href="#" className="fab fa-instagram"></a>
                <a href="#" className="fab fa-linkedin"></a>
                <a href="#" className="fab fa-github"></a>
            </div> */}
        </div>

        <div className={styles.box}>
            <h3>Contact Info</h3>
            <a href="#" className={styles.links}> <i className="fas fa-phone"></i> 119 - Emergency</a>
            <a href="#" className={styles.links}> <i className="fas fa-phone"></i> 311 - Crime Stop</a>
            <a href="#" className={styles.links}> <i className="fas fa-envelope"></i>  ccnops@jcf.gov.jm </a>
            <a href="#" className={styles.links}> <i className="fas fa-map-marker-alt"></i> Kingston, Jamaica HQ </a>
        </div>

        <div className={styles.box}>
            <h3>Social</h3>
            <a href="#" className={styles.links}> <i className="fab fa-facebook-f"></i> facebook </a>
            <a href="#" className={styles.links}> <i className="fab fa-twitter"></i> twitter </a>
            <a href="#" className={styles.links}> <i className="fab fa-instagram"></i> instagram </a>
            <a href="#" className={styles.links}> <i className="fab fa-linkedin"></i> linkedin </a>
        </div>

        <div className={styles.box}>
            <h3>Equiries</h3>
            <p>Send your enquires</p>
            <input type="email" placeholder="your email" className={styles.email}/>
            <input type="submit" value="subscribe" className={styles.btn}/>
            <img src="image/payment.png" className={styles.paymentImg} alt=""/>
        </div>

    </div>

    <div className={styles.credit}> Copyright © 2022. <span>All Rights Reserved </span></div>

</section>
    )
}
