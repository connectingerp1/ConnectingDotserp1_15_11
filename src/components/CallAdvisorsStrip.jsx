import React, { useState, useEffect } from 'react'
import './CallAdvisorsStrip.css' // Add your styling here

const CallAdvisorsStrip = () => {
  const [advisorsContact, setAdvisorsContact] = useState('')
  const [location, setLocation] = useState('default')

  useEffect(() => {
    fetch('Jsonfolder/datacontact.json')
      .then((response) => response.json())
      .then((data) => {
        setAdvisorsContact(
          data[location]?.advisorsContact || data['default'].advisorsContact
        )
      })
  }, [location])

  return (
    <div className="call-advisors-strip">
      {/* Left side content */}
      <div className="right-strip-content">
        <div>
          <div className="social-icons-strip">
            <a href="https://www.facebook.com/sapinstallation.pune.9">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://wa.me/919004002941">
              <i className="fab fa-whatsapp"></i>
            </a>
            <a href="https://m.youtube.com/@connectingdotserp4991">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="https://in.linkedin.com/in/connecting-dots-erp-043039171">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://www.instagram.com/connecting_dots_sap_training?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Right side content (Call Advisors) */}
      <div className="left-strip-content">
        <span className="phone-icon">
          <i className="fa fa-phone"></i>
        </span>
        <span className="advisor-text">Get Free Career counselling: </span>
        <a href={`tel:${advisorsContact}`} className="advisor-number">
          {advisorsContact}
        </a>
      </div>
    </div>
  )
}

export default CallAdvisorsStrip
