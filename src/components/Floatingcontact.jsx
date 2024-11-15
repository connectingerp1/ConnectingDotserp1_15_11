import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'

import './Floatingcontact.css'

const Floatingcontact = ({ phoneNumber }) => {
  const handlecontactClick = () => {
    const formattedPhoneNumber = phoneNumber.replace(/[^0-9]/g, '')
    window.open(`tel:${formattedPhoneNumber}`, '_self') // Initiates the phone call
  }

  return (
    <div className="floating-contact-container">
      <div className="floating-contact" onClick={handlecontactClick}>
        <FontAwesomeIcon icon={faPhone} size="2x" />
      </div>
    </div>
  )
}

export default Floatingcontact
