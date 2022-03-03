// external libraries
import { useSelector} from 'react-redux'
import {BrowserRouter as Router, Navigate, Route, Routes, useNavigate} from 'react-router-dom'

//stylesheet
import './App.css'

//components
import Login from './components/layout/Login'
import About from './components/layout/About'
import Home from './components/layout/Home'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Officer from './components/officers/Officer'
import AddOfficer from './components/officers/AddOfficer'
import OfficerInfo from './components/officers/OfficerInfo';
import Schedule from './components/schedule/Schedule'
import Duty from './components/duty/Duty'
import CreateDuty from './components/duty/CreateDuty'
import Vehicle from './components/vehicles/Vehicle'
import VehicleAssignment from './components/vehicles/VehicleAssignment'
import Radio from './components/radios/Radio'
import Firearm from './components/firearms/Firearm'
import Leave from './components/leave/Leave'
import AddRole from './components/role/AddRole'
import Admin from './components/admin/Admin'
import { useEffect, useLayoutEffect} from 'react'


function App() {

  const isAuth = useSelector(state => state.user.isAuth)
  const authenticateComponent = authComponent =>isAuth?authComponent:<Login/>
  const navigate = useNavigate()

 useEffect(()=>{
      while(!isAuth){
          console.log('not Auth')
      }
 },[isAuth])

  return (
      <div className="App">
          <Router>
                <Header/>
                <Routes>
                    <Route exact path="/" element={authenticateComponent(<Home/>)}/>
                    <Route exact path="/home" element={authenticateComponent(<Home/>)}/>
                    <Route exact path="/officers" element={authenticateComponent(<Officer/>)}/>
                    <Route exact path="/schedule" element={authenticateComponent(<Schedule/>)}/>
                    <Route exact path="/duty" element={authenticateComponent(<Duty/>)}/>
                    <Route exact path="/create-duty" element={authenticateComponent(<CreateDuty/>)}/>
                    <Route exact path="/vehicles" element={authenticateComponent(<Vehicle/>)}/>
                    <Route exact path="/radios" element={authenticateComponent(<Radio/>)}/>
                    <Route exact path="/firearms" element={authenticateComponent(<Firearm/>)}/>
                    <Route exact path="/leave" element={authenticateComponent(<Leave/>)}/>
                    <Route exact path="/about" element={authenticateComponent(<About/>)}/>
                    <Route exact path="/admin" element={authenticateComponent(<Admin/>)}/>
                    <Route exact path="/add-officer" element={authenticateComponent(<AddOfficer/>)}/>
                    <Route exact path="/add-role" element={authenticateComponent(<AddRole/>)}/>
                    <Route exact path="/officer-info/:regNo" element={authenticateComponent(<OfficerInfo/>)}/>
                    <Route exact path="/vehicle-assignment" element={authenticateComponent(<VehicleAssignment/>)}/>
                </Routes>
                <Footer/>
        </Router>
      </div>     
  )
}

export default App
