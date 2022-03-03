import React, {useState} from 'react'
import './styles/login.css'
import Cookies from 'js-cookie'
import querystring from 'querystring'
import {request} from '../../util/APICall'
import img1 from '../../lockscreen.jpg'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUser } from '../../redux/user/userActions'


export default function Login() {

    const [authData, setAuthData] = useState({
        username:'',
        password:''
    })

    

    const dispatch = useDispatch()

    const [errorMessage, setErrorMessage] = useState("")  

    const handleSubmission = (event) => {
        event.preventDefault() 

        request('POST', 'api/login', {},querystring.stringify(authData))
        .then(response => {
            const {username, accessToken, refreshToken} = response.data
            Cookies.set("accessToken",accessToken)
            Cookies.set("refreshToken",refreshToken)
            dispatch(fetchUser())
        })
        .catch(error=>{
            setErrorMessage("Bad Credentials Provided")
        })

    }

    const handleChange = (event) => {
        const newData = {...authData}
        newData[event.target.id] = event.target.value
        setAuthData(newData)
        console.log(newData)
    }
  
    
    return (
        <div className='body' id='lockscreen' style={{ backgroundImage:`url(${img1})`}}>
            <div className="wrapper fadeInDown">
                <div id="formContent">
                    <h2 className="active"> Sign In </h2>
                    
                    <div className="fadeIn first">
                        <img src="./images/jcf_logo3.png" className="jcf-icon" alt="User Icon" />
                    </div>
                
                    <form onSubmit={(e)=>{handleSubmission(e)}}>
                        <input type="text" id="username" value={authData.username} onChange={(e)=>{handleChange(e)}} className="fadeIn second"  placeholder="login"/>
                        <input type="password" id="password" value={authData.password} onChange={(e)=>{handleChange(e)}} className="fadeIn third" placeholder="password"/>
                        <input type="submit" className="fadeIn fourth" value="Log In"/>
                    </form>
                    
                    <div id="formFooter">
                        <p className="error-message">{errorMessage}</p> 
                    </div>

                </div>
            </div>
        </div>
    )
}
