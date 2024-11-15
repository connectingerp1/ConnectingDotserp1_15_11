import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Navbar, Container, Nav, Button } from 'react-bootstrap'
import logo from '/Navbar/connecting dot erp logo.avif'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Navbar.css'
import '@fortawesome/fontawesome-free/css/all.min.css'

const Header = () => {
  const [activeLink, setActiveLink] = useState('')
  const [isDropdownVisible, setIsDropdownVisible] = useState({
    dropdown2: false,
    dropdown3: false,
    dropdown4: false,
    dropdown5: false,
    dropdown6: false,
  })
  const [isSidebarVisible, setIsSidebarVisible] = useState(false)

  const location = useLocation()
  const navigate = useNavigate()

  const handleNavClick = (link) => {
    setActiveLink(link)
    setIsSidebarVisible(false)
  }

  const handleMouseEnter = (dropdown) =>
    setIsDropdownVisible((prev) => ({ ...prev, [dropdown]: true }))

  const handleMouseLeave = (dropdown) =>
    setIsDropdownVisible((prev) => ({ ...prev, [dropdown]: false }))

  const handleNavigation = (link, section) => {
    if (location.pathname !== link) {
      navigate(link, { replace: false })
      setTimeout(() => {
        window.location.hash = section
        setIsSidebarVisible(false) 
      }, 100)
    } else {
      window.location.hash = section
      setIsSidebarVisible(false) 
    }
  }

  const renderDropdownSAP = () => (
    <div
      className="dropdown2"
      onMouseEnter={() => handleMouseEnter('dropdown2')}
      onMouseLeave={() => handleMouseLeave('dropdown2')}
      style={{ position: 'relative', marginLeft: '20px' }}
    >
      <Nav.Link
      className={`mx-lg-2 dropdown-toggle ${
        activeLink === 'dropdown2' ? 'active' : ''
      }`}
      href="#"
      id="dropdownMenuButton2"
      data-bs-toggle="dropdown"
      aria-expanded="false"
      onClick={(e) => {
        e.preventDefault();  // Prevent default anchor behavior
        handleNavigation('/sap');  // Update '/sap' to the specific route of the page
      }}
    >
      SAP
    </Nav.Link>
      {isDropdownVisible.dropdown2 && (
        <ul
          className="dropdown-menu show"
          aria-labelledby="dropdownMenuButton2"
          style={{ display: 'block' }}
        >
          {[
            {
              title: 'SAP Functional',

              items: [
                { name: 'SAP FICO', link: '/sap-fico-course-in-pune' },
                { name: 'SAP MM', link: '/sap-mm-course-in-pune' },
                { name: 'SAP SD', link: '/sap-sd-course-in-pune' },
                { name: 'SAP HR/HCM', link: '/sap-hcm-course-in-pune' },

                { name: 'SAP PP', link: '/sap-pp-course-in-pune' },
                { name: 'SAP QM', link: '/sap-qm-course-in-pune' },
                { name: 'SAP PM', link: '/sap-pm-course-in-pune' },
                { name: 'SAP PS', link: '/sap-ps-course-in-pune' },

                { name: 'SAP EWM', link: '/sap-ewm-course-in-pune' },
                { name: 'SAP SCM', link: '/sap-scm-course-in-pune' },
                {
                  name: 'SAP SUCCESSFACTOR',
                  link: '/sap-successfactors-course-in-pune',
                },
              ],
            },
            {
              title: 'SAP Technical',

              items: [
                { name: 'SAP ABAP', link: '/sap-abap-course-in-pune' },
                { name: 'SAP S/4 HANA', link: '/sap-s4-hana-course-in-pune' },
                {
                  name: 'SAP NetWeaver',
                  link: '/sap-netweaver-course-in-pune',
                },
                { name: 'SAP BW/BI', link: '/sap-bwbi-course-in-pune' },
                { name: 'SAP BASIS', link: '/sap-basis-course-in-pune' },
              ],
            },
          ].map((submenu, index) => (
            <li key={index}>
              <Link className="dropdown-item" to={submenu.link}>
                {submenu.title} &raquo;
              </Link>
              <ul className="dropdown-menu dropdown-submenu">
                {submenu.items.map((item, subIndex) => (
                  <li key={subIndex}>
                    <Link
                      className="dropdown-item"
                      to={item.link}
                      onClick={() => handleNavClick(item.link)} // Close sidebar after navigating
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      )}
    </div>
  )

  const renderDropdownITCourses = () => (
    <div
      className="dropdown2"
      onMouseEnter={() => handleMouseEnter('dropdown3')}
      onMouseLeave={() => handleMouseLeave('dropdown3')}
      style={{ position: 'relative', marginLeft: '20px' }}
    >
      <Nav.Link
        className={`mx-lg-2 dropdown-toggle ${
          activeLink === 'dropdown3' ? 'active' : ''
        }`}
        href="#"
        id="dropdownMenuButton3"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        onClick={(e) => {
          e.preventDefault();
          handleNavigation('/it-courses');  // Replace with the actual route for the IT Courses page
        }}
      >
        IT Courses
      </Nav.Link>
      {isDropdownVisible.dropdown3 && (
        <ul
          className="dropdown-menu show"
          aria-labelledby="dropdownMenuButton3"
          style={{ display: 'block' }}
        >
          {[
            {
              title: 'Data Science',
              items: [
                {
                  name: 'MASTERS IN DATA ANALYTICS',
                  link: '/data-analytics-course-in-pune',
                },
                {
                  name: 'MASTERS IN DATA SCIENCE',
                  link: '/data-science-course-in-pune',
                },
                {
                  name: 'MASTERS IN BUSINESS ANALYTICS',
                  link: '/business-analytics-course-in-pune',
                },
                { name: 'CHAT GPT & AI', link: '/chatgpt-course-in-pune' },
              ],
            },
            {
              title: 'Full Stack Training',
              link: '/full-stack-developer-course-in-pune',
            },
            {
              title: 'JAVA',
              link: '/java-course-in-pune',
            },
            {
              title: 'MERN Stack',
              link: '/mern-stack-course-in-pune',
            },
            {
              title: 'UI/UX Design',
              link: '/ui-ux-course-in-pune',
            },
            {
              title: 'Python',
              link: '/python-course-in-pune',
            },
            {
              title: 'Salesforce',
              link: '/salesforce-training-in-pune',
            },
          ].map((submenu, index) => (
            <li key={index}>
              <Link
                className="dropdown-item"
                to={submenu.link || '#'}
                onClick={() => handleNavClick(submenu.link)} // Close sidebar after navigating
              >
                {submenu.title} {submenu.items && ' »'}
              </Link>
              {submenu.items && (
                <ul className="dropdown-menu dropdown-submenu">
                  {submenu.items.map((item, subIndex) => (
                    <li key={subIndex}>
                      <Link
                        className="dropdown-item"
                        to={item.link}
                        onClick={() => handleNavClick(item.link)} // Close sidebar after navigating
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  )

  const renderDropdownDataVisualisation = () => (
    <div
      className="dropdown2"
      onMouseEnter={() => handleMouseEnter('dropdown4')}
      onMouseLeave={() => handleMouseLeave('dropdown4')}
      style={{ position: 'relative', marginLeft: '20px' }}
    >
       <Nav.Link
        className={`mx-lg-2 dropdown-toggle ${
          activeLink === 'dropdown4' ? 'active' : ''
        }`}
        href="#"
        id="dropdownMenuButton4"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        onClick={(e) => {
          e.preventDefault();
          handleNavigation('/data-visualisation');  // Replace with the actual route for Data Visualisation page
        }}
      >
        Data Visualisation
      </Nav.Link>
      {isDropdownVisible.dropdown4 && (
        <ul
          className="dropdown-menu show"
          aria-labelledby="dropdownMenuButton4"
          style={{ display: 'block' }}
        >
          {[
            { name: 'Tableau', link: '/tableau-training-in-pune' }, //training
            { name: 'Power BI', link: '/powerbi-course-in-pune' },
            { name: 'SQL', link: '/sql-course-in-pune' },
          ].map((item, index) => (
            <li key={index}>
              <Link
                className="dropdown-item"
                to={item.link}
                onClick={() => handleNavClick(item.link)} // Close sidebar after navigating
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  )

  const renderDropdownDigitalMarketing = () => (
    <div
      className="dropdown2"
      onMouseEnter={() => handleMouseEnter('dropdown5')}
      onMouseLeave={() => handleMouseLeave('dropdown5')}
      style={{ position: 'relative', marginLeft: '20px' }}
    >
      <Nav.Link
        className={`mx-lg-2 dropdown-toggle ${
          activeLink === 'dropdown5' ? 'active' : ''
        }`}
        href="#"
        id="dropdownMenuButton5"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        onClick={(e) => {
          e.preventDefault();
          handleNavigation('/digital-marketing');  // Replace with the actual route for Digital Marketing page
        }}
      >
        Digital Marketing
      </Nav.Link>
      {isDropdownVisible.dropdown5 && (
        <ul
          className="dropdown-menu show"
          aria-labelledby="dropdownMenuButton5"
          style={{ display: 'block' }}
        >
          {[
            {
              name: 'Advance Digital Marketing',
              link: '/digital-marketing-course-in-pune',
            },
            {
              name: 'Pay Per Click Training',
              link: '/digital-marketing',
              section: 'pay-per-click',
            },
            {
              name: 'Search Engine Optimization',
              link: '/digital-marketing',
              section: 'search-engine-opti',
            },
            {
              name: 'Social Media Marketing',
              link: '/digital-marketing',
              section: 'social-media',
            },
            {
              name: 'Advance Analytics Training',
              link: '/digital-marketing',
              section: 'advance-analytics',
            },
          ].map((item, index) => (
            <li key={index}>
              {item.section ? (
                <span
                  className="dropdown-item"
                  onClick={() => handleNavigation(item.link, item.section)}
                  style={{ cursor: 'pointer' }}
                >
                  {item.name}
                </span>
              ) : (
                <Link
                  className="dropdown-item"
                  to={item.link}
                  onClick={() => handleNavClick(item.link)} // Close sidebar after navigating
                >
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
  const renderDropdownHRCourses = () => (
    <div
      className="dropdown2"
      onMouseEnter={() => handleMouseEnter('dropdown6')}
      onMouseLeave={() => handleMouseLeave('dropdown6')}
      style={{ position: 'relative', marginLeft: '20px' }}
    >
      <Nav.Link
        className={`mx-lg-2 dropdown-toggle ${
          activeLink === 'dropdown6' ? 'active' : ''
        }`}
        href="#"
        id="dropdownMenuButton6"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        onClick={(e) => {
          e.preventDefault();
          handleNavigation('/hr-courses');  // Replace with the actual route for HR Courses page
        }}
      >
        HR Courses
      </Nav.Link>
      {isDropdownVisible.dropdown6 && (
        <ul
          className="dropdown-menu show"
          aria-labelledby="dropdownMenuButton6"
          style={{ display: 'block' }}
        >
          {[
            { name: 'HR Training', link: '/hr-training-course-in-pune' },
            { name: 'Core HR', link: '/core-hr-course-in-pune' },
            { name: 'HR Payroll', link: '/hr-payroll-course-in-pune' },
            { name: 'HR Management', link: '/hr-management-course-in-pune' },
            { name: 'HR Generalist', link: '/hr-generalist-course-in-pune' },
            { name: 'HR Analytics', link: '/hr-analytics-course-in-pune' },
          ].map((item, index) => (
            <li key={index}>
              <Link
                className="dropdown-item"
                to={item.link}
                onClick={() => handleNavClick(item.link)} // Close sidebar after navigating
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  )

  return (
    <>
      <Navbar expand="lg" className="header-nav">
        <Container fluid className="align-items-center justify-content-between">
          <div className="logo">
            <Link to="/">
              <img src= {logo} alt="Connecting Dots ERP Logo" />
            </Link>
          </div>

          {/* Hamburger Button */}
          <Button
            className="navbar-toggler"
            aria-controls="basic-navbar-nav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setIsSidebarVisible(!isSidebarVisible)}
          >
            <span className="navbar-toggler-icon"></span>
          </Button>

          <Nav className="navbar-nav justify-content-end flex-grow-1 pe-3 d-none d-lg-flex">
            {renderDropdownSAP()}
            {renderDropdownITCourses()}
            {renderDropdownDataVisualisation()}
            {renderDropdownDigitalMarketing()}
            {renderDropdownHRCourses()}
            <div className="dropdown2">
              <Nav.Link
                className={`mx-lg-2 ${activeLink === 'link1' ? 'active' : ''}`}
                href="/about-us"
                onClick={() => handleNavClick('link1')}
              >
                About us
              </Nav.Link>
            </div>
          </Nav>
        </Container>
      </Navbar>

      {/* Sidebar for Smaller Screens */}
      {isSidebarVisible && (
        <div className="sidebar">
          <div className="sidebar-header">
            <Button
              className="btn-close"
              onClick={() => setIsSidebarVisible(false)}
            />
          </div>
          <Nav className="flex-column">
            <Link
              className="nav-link"
              to="/about-us"
              onClick={() => handleNavClick('link1')}
            >
              About us
            </Link>
            <Link
              className="nav-link"
              to="/AdminLogin"
              onClick={() => handleNavClick('login')}
            >
              Login
            </Link>
            {renderDropdownSAP()}
            {renderDropdownITCourses()}
            {renderDropdownDataVisualisation()}
            {renderDropdownDigitalMarketing()}
            {renderDropdownHRCourses()}
          </Nav>
        </div>
      )}
    </>
  )
}

export default Header
