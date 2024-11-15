import React, { useState, useEffect, useRef } from 'react'
import './ContactForm.css'
import axios from 'axios'
import { IonIcon } from '@ionic/react' // Import IonIcon
import { personOutline, mailOutline, callOutline } from 'ionicons/icons' // Import specific icons
// import ThankYouPage from '../components/ThankYouPage'; // Import the ThankYouPage component

const ContactForm = ({ course, formData, onClose }) => {
  const [formValues, setFormValues] = useState({})
  const [isThankYouVisible, setThankYouVisible] = useState(false) // State to control Thank You popup
  const formRef = useRef(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    if (formData && formData.fields) {
      const initialFormValues = {}
      formData.fields.forEach((field) => {
        initialFormValues[field.name] = ''
      })
      setFormValues(initialFormValues)
    }
  }, [formData])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    if (formRef.current) {
      observer.observe(formRef.current)
    }

    return () => {
      if (observer) {
        observer.disconnect()
      }
    }
  }, [])

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormValues({ ...formValues, [name]: value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const response = await axios.post(
        'https://serverbackend-0nvg.onrender.com/api/submit',
        formValues
      )
      console.log('Form Submitted:', response.data)

      // Show Thank You popup after successful submission
      setThankYouVisible(true)
      setTimeout(() => {
        setThankYouVisible(false)
        onClose() // Close the form after the Thank You popup
      }, 3000)
    } catch (error) {
      console.error('Error submitting form:', error)
      alert('An error occurred while submitting the form.') // You can customize this behavior as well
    }
  }

  if (!formData) return null

  const buttonText = formData.submitButton.includes('Demo')
    ? formData.submitButton.replace(/Demo\s*Demo/, 'Demo')
    : formData.submitButton

  return (
    <div className="modal-overlay">
      <div
        className={`modal-content ${isInView ? 'background-loaded' : ''}`}
        ref={formRef}
      >
        <span className="close-btn-contact" onClick={onClose}>
          &times;
        </span>

        <form className="contact-form" onSubmit={handleSubmit}>
          {formData.fields
            .filter((field) => field.name !== 'message')
            .map((field, index) => (
              <div className="contact-form-group" key={index}>
                <div className="input-with-icon">
                  <input
                    type={field.type}
                    id={field.name}
                    name={field.name}
                    value={formValues[field.name] || ''}
                    onChange={handleChange}
                    placeholder={field.label}
                    required
                  />
                  <IonIcon
                    icon={field.name === 'name' ? personOutline : mailOutline}
                  />
                </div>
              </div>
            ))}

          <div className="contact-form-group">
            <div className="input-with-icon">
              <input
                type="text"
                id="contact"
                name="contact"
                value={formValues['contact'] || ''}
                onChange={handleChange}
                placeholder="Contact Number"
                required
              />
              <IonIcon icon={callOutline} />
            </div>
          </div>

          <button type="submit" className="submit-btn-contact">
            {buttonText}
          </button>
        </form>

        {/* Render Thank You popup */}
        {/* <ThankYouPage isVisible={isThankYouVisible} onClose={() => setThankYouVisible(false)} /> */}
      </div>
    </div>
  )
}

export default ContactForm
