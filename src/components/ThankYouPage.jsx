import React, { useEffect } from 'react'
import './ThankYouPage.css'

const ThankYouPage = ({ isVisible, onClose }) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose() // Close after 3 seconds
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [isVisible, onClose])

  if (!isVisible) return null

  return (
    <div className="thank-you-content">
      <div className="thank-you-wrapper-1">
        <div className="thank-you-wrapper-2">
          <h1>Thank you!</h1>
          <p>Thanks for subscribing to our newsletter.</p>
          <p>You should receive a confirmation email soon.</p>
        </div>
      </div>
    </div>
  )
}

export default ThankYouPage
