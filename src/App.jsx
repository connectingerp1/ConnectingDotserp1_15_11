import React, { useState, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Marquee1 from './Homepage/Marquee1.jsx'
import Navbar from './components/Navbar.jsx'
import Wave from './components/Wave.jsx'
import Footer2 from './components/Footer2.jsx'
import Stickyform from './components/Stickyform.jsx'
import Whatsapp from './Homepage/FloatingWhatsApp.jsx'
import Homepage from './Homepage.jsx'
import Datascience from './IT/Datascience.jsx'
import DataAnalytics from './IT/DataAnalytics.jsx'
import BussinessAnalytics from './IT/BussinessA.jsx'
import GptAi from './IT/GptAi.jsx'
import Fullstack from './IT/Fullstack.jsx'
import Java from './IT/Java.jsx'
import Mern from './IT/MernStack.jsx'
import UIUX from './IT/UIUX.jsx'
import Python from './IT/Python.jsx'
import Sales from './IT/Salesforce.jsx'
import Chatbot from './components/Chatbot.jsx'
import SAPEWM from './SAP/sapewm.jsx'
import SAPABAP from './SAP/sapabap.jsx'
import SAPBASIS from './SAP/sapbasis.jsx'
import SAPBI from './SAP/sapbi.jsx'
import SAPFICO from './SAP/sapfico.jsx'
import SAPHANA from './SAP/saphana.jsx'
import SAPHRHCM from './SAP/saphrhcm.jsx'
import SAPMM from './SAP/sapmm.jsx'
import SAPNET from './SAP/sapnetweaver.jsx'
import SAPPM from './SAP/sappm.jsx'
import SAPPP from './SAP/sappp.jsx'
import SAPPS from './SAP/sapps.jsx'
import SAPQM from './SAP/sapqm.jsx'
import SAPSCM from './SAP/sapscm.jsx'
import SAPSD from './SAP/sapsd.jsx'
import SAPSUCC from './SAP/sapsuccess.jsx'
import POWERBI from './Data Visual/powerbi.jsx'
import SQL from './Data Visual/sql.jsx'
import TABLEAU from './Data Visual/tableau.jsx'
import DIGITALMARKETING from './Digital Marketing/DigitM.jsx'
import AdminLogin from './components/AdminLogin.jsx'
import Dashboard from './components/Dashboard.jsx'
import PopupForm from './components/PopupForm.jsx'
import HRAnalytics from './Hr Courses/HRAnalytics.jsx'
import Core from './Hr Courses/Core.jsx'
import Manage from './Hr Courses/Management.jsx'
import Payroll from './Hr Courses/Payroll.jsx'
import SAPHCM from './Hr Courses/SAPHCM.jsx'
import HRTraining from './Hr Courses/HRTraining.jsx'
import Pagenotfound from './components/NotFoundPage.jsx'
import CallAdvisorsStrip from './components/CallAdvisorsStrip.jsx'
import { generateSlug } from './utils/slugHelper.js' // Slug generation function
import { useCity } from './CityContext.jsx'
import Floatingcontact from './components/Floatingcontact.jsx'
import BlogsPage from './components/BlogsPage.jsx'

function App() {
  const { city } = useCity()
  const [isFooterVisible, setIsFooterVisible] = useState(false)
  const [temporaryLeads, setTemporaryLeads] = useState([])
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const handleLogin = () => {
    setIsAuthenticated(true)
    localStorage.setItem('isAuthenticated', true)
  }

  const handleFormData = (formData) => {
    console.log('Form data received:', formData) // Debugging line
    setTemporaryLeads((prevLeads) => [...prevLeads, formData])
  }

  const ProtectedRoute = ({ children }) => {
    const isAuthenticated = localStorage.getItem('isAuthenticated')

    if (!isAuthenticated) {
      return <Navigate to="/AdminLogin" />
    }

    return children
  }

  useEffect(() => {
    // Define the handleScroll function
    const handleScroll = () => {
      const footerElement = document.getElementById('footer') // Make sure the ID matches
      if (footerElement) {
        const footerRect = footerElement.getBoundingClientRect()
        const isVisible =
          footerRect.top < window.innerHeight && footerRect.bottom >= 0
        setIsFooterVisible(isVisible)
      }
    }

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll)

    // Call handleScroll initially to set the visibility correctly
    handleScroll()

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className="App">
      <div className="background-animation">
        <div className="starsec"></div>
        <div className="starthird"></div>
        <div className="starfourth"></div>
        <div className="starfifth"></div>
      </div>
      <CallAdvisorsStrip />
      <Marquee1 />
      <Navbar />
      <PopupForm onSubmitData={handleFormData} />

      <main>
        <Chatbot />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route
            path="/AdminLogin"
            element={<AdminLogin onLogin={handleLogin} />}
          />
          <Route path="/Blogs"  element={<BlogsPage/>}/>
          {isAuthenticated && (
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard temporaryLeads={temporaryLeads} />
                </ProtectedRoute>
              }
            />
          )}
          {/* IT PAGE */}
          <Route
            path={`/${generateSlug('Data-science-course', city)}`}
            element={<Datascience />}
          />
          <Route
            path={`/${generateSlug('Data-Analytics-course', city)}`}
            element={<DataAnalytics />}
          />
          <Route
            path={`/${generateSlug('Business-Analytics-course', city)}`}
            element={<BussinessAnalytics />}
          />
          <Route
            path={`/${generateSlug('chatGPT-course', city)}`}
            element={<GptAi />}
          />
          <Route
            path={`/${generateSlug('Full-Stack-developer-course', city)}`}
            element={<Fullstack />}
          />
          <Route
            path={`/${generateSlug('Java-course', city)}`}
            element={<Java />}
          />
          <Route
            path={`/${generateSlug('Mern-stack-course', city)}`}
            element={<Mern />}
          />
          <Route
            path={`/${generateSlug('Python-course', city)}`}
            element={<Python />}
          />
          <Route
            path={`/${generateSlug('Salesforce-training', city)}`}
            element={<Sales />}
          />
          <Route
            path={`/${generateSlug('UI-UX-course', city)}`}
            element={<UIUX />}
          />
          {/* SAP PAGE */}
          <Route
            path={`/${generateSlug('SAP-EWM-course', city)}`}
            element={<SAPEWM />}
          />
          <Route
            path={`/${generateSlug('SAP-ABAP-course', city)}`}
            element={<SAPABAP />}
          />
          <Route
            path={`/${generateSlug('SAP-BASIS-course', city)}`}
            element={<SAPBASIS />}
          />
          <Route
            path={`/${generateSlug('SAP-BWBI-course', city)}`}
            element={<SAPBI />}
          />
          <Route
            path={`/${generateSlug('SAP-FICO-course', city)}`}
            element={<SAPFICO />}
          />
          <Route
            path={`/${generateSlug('SAP-S4-HANA-course', city)}`}
            element={<SAPHANA />}
          />
          <Route
            path={`/${generateSlug('SAP-HCM-course', city)}`}
            element={<SAPHRHCM />}
          />
          <Route
            path={`/${generateSlug('SAP-MM-course', city)}`}
            element={<SAPMM />}
          />
          <Route
            path={`/${generateSlug('SAP-netweaver-course', city)}`}
            element={<SAPNET />}
          />
          <Route
            path={`/${generateSlug('SAP-PM-course', city)}`}
            element={<SAPPM />}
          />
          <Route
            path={`/${generateSlug('SAP-PP-course', city)}`}
            element={<SAPPP />}
          />
          <Route
            path={`/${generateSlug('SAP-PS-course', city)}`}
            element={<SAPPS />}
          />
          <Route
            path={`/${generateSlug('SAP-QM-course', city)}`}
            element={<SAPQM />}
          />
          <Route
            path={`/${generateSlug('SAP-SCM-course', city)}`}
            element={<SAPSCM />}
          />
          <Route
            path={`/${generateSlug('SAP-SD-course', city)}`}
            element={<SAPSD />}
          />
          <Route
            path={`/${generateSlug('SAP-SUCCESSFACTORS-course', city)}`}
            element={<SAPSUCC />}
          />
          {/* DATA VISUALIZATION */}
          <Route
            path={`/${generateSlug('POWERBI-course', city)}`}
            element={<POWERBI />}
          />
          <Route
            path={`/${generateSlug('SQL-course', city)}`}
            element={<SQL />}
          />
          <Route
            path={`/${generateSlug('TABLEAU-training', city)}`}
            element={<TABLEAU />}
          />
          {/* Digital Marketing */}
          <Route
            path={`/${generateSlug('Digital-Marketing-course', city)}`}
            element={<DIGITALMARKETING />}
          />
          {/* HR courses */}
          <Route
            path={`/${generateSlug('HR-Analytics-course', city)}`}
            element={<HRAnalytics />}
          />
          <Route
            path={`/${generateSlug('HR-Training-course', city)}`}
            element={<HRTraining />}
          />
          <Route
            path={`/${generateSlug('Core-HR-course', city)}`}
            element={<Core />}
          />
          <Route
            path={`/${generateSlug('HR-Management-course', city)}`}
            element={<Manage />}
          />
          <Route
            path={`/${generateSlug('HR-Payroll-course', city)}`}
            element={<Payroll />}
          />
          <Route
            path={`/${generateSlug('hr-generalist-course', city)}`}
            element={<SAPHCM />}
          />
          <Route path="*" element={<Pagenotfound />} />{' '}
          {/* Fixed comment format */}
        </Routes>
      </main>
      <Stickyform isFooterVisible={isFooterVisible} />
      <Wave />
      <Footer2 id="footer" />

      <Floatingcontact phoneNumber="+919004002958" />
      <Whatsapp phoneNumber="+919004002958" />
    </div>
  )
}

export default App;
