import React, { useEffect, useState } from 'react' // Added useState import
import './Councelor.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Btnform from '../components/Btnform'

const CallbackComponent = () => {
  const [showForm, setShowForm] = useState(false) // useState is now correctly imported

  const handleButtonClick = () => {
    setShowForm(true) // Show form on button click
  }

  const handleCloseForm = () => {
    setShowForm(false) // Close form
  }

  useEffect(() => {
    AOS.init({ duration: 1000 }) // Initialize AOS with a 1-second duration for animations
  }, [])

  return (
    <div>
      <div className="counselor-container-it-ds" data-aos="fade-up">
        <video
          className="background-video"
          src="https://i.imgur.com/OKLCgpA.mp4"
          autoPlay
          muted
          loop
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: -1,
          }}
        />
        <div className="counselor-content-it-ds" data-aos="zoom-in">
          <div className="counselor-text-it-ds" data-aos="fade-right">
            {/* Your text or other content goes here */}
          </div>
          <div className="button-container-it-ds-counc" data-aos="fade-left">
            <button
              className="request-button-it-ds-counc"
              onClick={handleButtonClick}
            >
              Request Callback
            </button>
          </div>
        </div>
      </div>
      {showForm && <Btnform onClose={handleCloseForm} />}
    </div>
  )
}

export default CallbackComponent
