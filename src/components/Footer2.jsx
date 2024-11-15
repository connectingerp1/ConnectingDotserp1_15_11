import React, { useState, useEffect } from 'react'
import './Footer2.css'
import { Link } from 'react-router-dom'

const Footer = () => {
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 768)

  const handleResize = () => {
    setIsMobileView(window.innerWidth <= 768)
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <footer id="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-logo">
            <img src={'/Footer/cdots.avif'} alt="Connecting Dots ERP Logo" />
          </div>
          <div className="social-icons">
            <Link to="https://www.facebook.com/sapinstallation.pune.9">
              <i className="fab fa-facebook-f"></i>
            </Link>
            <Link to="https://wa.me/919004002941">
              <i className="fab fa-whatsapp"></i>
            </Link>
            <Link to="https://m.youtube.com/@connectingdotserp4991">
              <i className="fab fa-youtube"></i>
            </Link>
            <Link to="https://in.linkedin.com/in/connecting-dots-erp-043039171">
              <i className="fab fa-linkedin-in"></i>
            </Link>
            <Link to="https://www.instagram.com/connecting_dots_sap_training?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
              <i className="fab fa-instagram"></i>
            </Link>
          </div>
        </div>
        <div className="columns">
          {/* SAP COURSES */}
          <div className="widget">
            <div className="headline">
              <h3>SAP COURSES</h3>
            </div>
            <div
              className={`footer-dropdown ${isMobileView ? 'mobile-view' : ''}`}
            >
              <div className="course-categories">
                <div className="sap-functional">
                  <h6>SAP FUNCTIONAL COURSES</h6>
                  <ul className="menu">
                    <li className="menu-item">
                      <Link to="/sap-fico-course-in-pune">SAP FICO COURSE</Link>
                    </li>
                    <li className="menu-item">
                      <Link to="/sap-sd-course-in-pune">SAP SD COURSE</Link>
                    </li>
                    <li className="menu-item">
                      <Link to="/sap-mm-course-in-pune">SAP MM COURSE</Link>
                    </li>
                    <li className="menu-item">
                      <Link to="/sap-pp-course-in-pune">SAP PP COURSE</Link>
                    </li>
                    <li className="menu-item">
                      <Link to="/sap-hcm-course-in-pune">
                        SAP HR/HCM COURSE
                      </Link>
                    </li>
                    <li className="menu-item">
                      <Link to="/sap-qm-course-in-pune">SAP QM COURSE</Link>
                    </li>
                    <li className="menu-item">
                      <Link to="/sap-pm-course-in-pune">SAP PM COURSE</Link>
                    </li>
                    <li className="menu-item">
                      <Link to="/sap-scm-course-in-pune">SAP SCM COURSE</Link>
                    </li>
                    <li className="menu-item">
                      <Link to="/sap-ewm-course-in-pune">SAP EWM COURSE</Link>
                    </li>
                    <li className="menu-item">
                      <Link to="/sap-successfactors-course-in-pune">
                        SAP SUCCESSFACTOR COURSE
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="sap-technical">
                  <h6>SAP TECHNICAL COURSES</h6>
                  <ul className="menu">
                    <li className="menu-item">
                      <Link to="/sap-abap-course-in-pune">SAP ABAP COURSE</Link>
                    </li>
                    <li className="menu-item">
                      <Link to="/sap-basis-course-in-pune">
                        SAP BASIS COURSE
                      </Link>
                    </li>
                    <li className="menu-item">
                      <Link to="/sap-bi-course-in-pune">SAP BW/BI COURSE</Link>
                    </li>
                    <li className="menu-item">
                      <Link to="/sap-s4-hana-course-in-pune">
                        SAP S/4 HANA COURSE
                      </Link>
                    </li>
                    <li className="menu-item">
                      <Link to="/sap-net-course-in-pune">
                        SAP NETWEAVER COURSE
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* IT COURSES */}
          <div className="widget">
            <div className="headline">
              <h3>IT COURSES</h3>
            </div>
            <div
              className={`footer-dropdown ${isMobileView ? 'mobile-view' : ''}`}
            >
              <ul className="menu">
                <li className="menu-item">
                  <Link to="/full-stack-developer-course-in-pune">
                    FULL STACK TRAINING
                  </Link>
                </li>
                <li className="menu-item">
                  <Link to="/java-course-in-pune">JAVA</Link>
                </li>
                <li className="menu-item">
                  <Link to="/mern-stack-course-in-pune">MERN STACK</Link>
                </li>
                <li className="menu-item">
                  <Link to="/uiux-course-in-pune">UI/UX DESIGN</Link>
                </li>
                <li className="menu-item">
                  <Link to="/python-course-in-pune">PYTHON</Link>
                </li>
                <li className="menu-item">
                  <Link to="/salesforce-training-in-pune">SALESFORCE</Link>
                </li>
              </ul>
            </div>
          </div>

          {/* DIGITAL MARKETING COURSES */}
          <div className="widget">
            <div className="headline">
              <h3>DIGITAL MARKETING COURSES</h3>
            </div>
            <div
              className={`footer-dropdown ${isMobileView ? 'mobile-view' : ''}`}
            >
              <ul className="menu">
                <li className="menu-item">
                  <Link to="digital-marketing-course-in-pune">
                    ADVANCE DIGITAL MARKETING
                  </Link>
                </li>
                <li className="menu-item">
                  <Link to="#">PAY PER CLICK TRAINING</Link>
                </li>
                <li className="menu-item">
                  <Link to="#">SEARCH ENGINE OPTIMIZATION</Link>
                </li>
                <li className="menu-item">
                  <Link to="#">SOCIAL MEDIA MARKETING</Link>
                </li>
                <li className="menu-item">
                  <Link to="#">ADVANCE ANALYTICS TRAINING</Link>
                </li>
              </ul>
            </div>
          </div>

          {/* DATA SCIENCE COURSES */}
          <div className="widget">
            <div className="headline">
              <h3>DATA SCIENCE COURSES</h3>
            </div>
            <div
              className={`footer-dropdown ${isMobileView ? 'mobile-view' : ''}`}
            >
              <ul className="menu">
                <li className="menu-item">
                  <Link to="/data-science-course-in-pune">
                    MASTERS IN DATA ANALYTICS
                  </Link>
                </li>
                <li className="menu-item">
                  <Link to="/data-analytics-course-in-pune">
                    MASTERS IN DATA SCIENCE
                  </Link>
                </li>
                <li className="menu-item">
                  <Link to="/business-analytics-course-in-pune">
                    MASTERS IN BUSINESS ANALYTICS
                  </Link>
                </li>
                <li className="menu-item">
                  <Link to="/chatgpt-course-in-pune">CHAT GPT & AI</Link>
                </li>
              </ul>
            </div>
          </div>

          {/* DATA VISUALISATION COURSES */}
          <div className="widget">
            <div className="headline">
              <h3>DATA VISUALISATION COURSES</h3>
            </div>
            <div
              className={`footer-dropdown ${isMobileView ? 'mobile-view' : ''}`}
            >
              <ul className="menu">
                <li className="menu-item">
                  <Link to="/powerbi-course-in-pune">POWER BI</Link>
                </li>
                <li className="menu-item">
                  <Link to="/tableau-training-in-pune">TABLEAU</Link>
                </li>
                <li className="menu-item">
                  <Link to="/sql-course-in-pune">SQL</Link>
                </li>
              </ul>
            </div>
          </div>

          {/* HR COURSES */}

          <div className="widget">
            <div className="headline-HR">
              <h3>HR COURSES</h3>
            </div>

            <ul className="menu-HR">
              <li className="menu-item">
                <Link to="/hr-training-course-in-pune">HR TRAINING</Link>
              </li>
              <li className="menu-item">
                <Link to="/core-hr-course-in-pune">CORE HR</Link>
              </li>
              <li className="menu-item">
                <Link to="/hr-payroll-course-in-pune">HR PAYROLL</Link>
              </li>
              <li className="menu-item">
                <Link to="/hr-management-course-in-pune">HR MANAGEMENT</Link>
              </li>
              <li className="menu-item">
                <Link to="/sap-hr-hcm-course-in-pune">SAP HR/HCM</Link>
              </li>
              <li className="menu-item">
                <Link to="/hr-analytics-course-in-pune">HR ANALYTICS</Link>
              </li>
            </ul>
          </div>
        </div>
        {/* CONTACT US */}
        <div className="contact-us">
          <ul className="menu-contact-us">
            {/* <li className="menu-item"><>About us</></li>
            <li className="menu-item"><>|</></li>
                <li className="menu-item"><>Privacy Policy</></li>
                <li className="menu-item"><>|</></li>
                <li className="menu-item"><>Blog</></li>
                <li className="menu-item"><>|</></li>
                <li className="menu-item"><>Contact Us</></li>
                <li className="menu-item"><>|</></li>
                <li className="menu-item"><>HR ANALYTICS</></li>
                <li className="menu-item"><>|</></li> */}
          </ul>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Connecting Dots ERP. All Rights Reserved.</p>
          <li className="menu-item">
            Address: 1st Floor,101, Police, Wireless Colony, Vishal Nagar,
            Pimple Nilakh, Pune, Pimpri-Chinchwad, Maharashtra 411027
          </li>
        </div>
      </div>
    </footer>
  )
}

export default Footer
