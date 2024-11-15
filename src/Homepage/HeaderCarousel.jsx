import React, { useEffect, useState } from 'react'
import { Carousel, Col, Card } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './HeaderCarousel.css'
// import logostrip from '/Headercarousel/logo strip.avif'
import Btnform from '../components/Btnform'
import { Button } from 'react-bootstrap'
const TEXTS1 = [
  'Connect Your Dots with  SAP Expertise',
  'Connect Your Dots with Data Science',
  'Connect Your Dots in IT Excellence',
  'Connect Your Dots in Digital Marketing',
]

const IMAGES = [
  '/Headercarousel/SAP module1.avif',
  '/Headercarousel/DSh.avif',
  '/Headercarousel/IT.avif',
  '/Headercarousel/DGM.avif',
]

const HeaderCarousel = ({ scrollToPopCourses }) => {
  const [isMobileView, setIsMobileView] = useState(false)
  const [index, setIndex] = useState(0)
  const [textVisible, setTextVisible] = useState(true)
  const [showForm, setShowForm] = useState(false)

  const [question, setQuestion] = useState({
    title: "Welcome to the <span class='highlight'>Quiz!</span>",
    text: 'Hover me or click on a question button to see the question here.',
  })
  // Function to check if the viewport is mobile-sized
  const checkMobileView = () => {
    setIsMobileView(window.innerWidth <= 768)
  }
  useEffect(() => {
    checkMobileView()

    // Add event listener to monitor window resizing
    window.addEventListener('resize', checkMobileView)

    return () => window.removeEventListener('resize', checkMobileView)
  }, [])

  const questionData = {
    Q1: {
      title:
        "Q.What is the function of an <span class='highlight'>HR Payroll</span> system?",
      text: "The function of an <span class='highlight'>HR payroll system</span> is to automate and manage employee compensation processes, including calculating wages, withholding taxes, and ensuring compliance with labor laws. It streamlines payroll operations, reduces errors, and provides accurate and timely payments to employees.",
    },
    Q2: {
      title:
        "Q.What is the purpose of the <span class='highlight'>CO</span> module in <span class='highlight'>SAP FICO</span>?",
      text: "The <span class='highlight'>CO (Controlling)</span> module in <span class='highlight'>SAP FICO</span> helps manage and monitor internal costs. It supports internal reporting by tracking and analyzing costs and revenues, aiding in budgeting, planning, and controlling operations to ensure effective cost management within an organization.",
    },
    Q3: {
      title:
        "Q.What is the role of <span class='highlight'>Express.js</span> in the <span class='highlight'>MERN</span> stack?",
      text: "<span class='highlight'>Express.js</span> is a lightweight web application framework for Node.js, used in the <span class='highlight'>MERN</span> stack. It simplifies the development of server-side applications by providing robust features for web and mobile applications, such as routing, middleware integration, and handling HTTP requests and responses.",
    },
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTextVisible(false)
      setTimeout(() => {
        setIndex((index) => (index + 1) % TEXTS1.length)
        setTextVisible(true)
      }, 500)
    }, 3000) // 3 seconds
    return () => clearInterval(intervalId)
  }, [])

  useEffect(() => {
    const link = document.createElement('link')
    link.href = 'https://fonts.googleapis.com/css2?family=Lato&display=swap'
    link.rel = 'stylesheet'
    document.head.appendChild(link)
  }, [])

  const FormButtons = ({ text, onClick }) => (
    <button className="custom-btn btn-3" onClick={onClick}>
      <span>{text}</span>
    </button>
  )

  const handleButtonClick = () => {
    setShowForm(true) // Show form on button click
  }

  const handleCloseForm = () => {
    setShowForm(false) // Close form
  }
  const getImageStyle = (index) => {
    return {
      width: '100%',
      height: 'auto',
    }
  }

  return (
    <>
      <div>
        <Carousel>
          <Carousel.Item>
            <div className="carousel-slide">
              <div className="carousel-text">
                <h2>
                  Unlock your <span className="highlight">Career</span>{' '}
                  potential
                </h2>
                <h3>
                  <span className="highlight">No.1 Training &</span> Placement
                  Center{' '}
                </h3>
                <p>
                  For more than 10 years, we've been passionate about providing
                  engaging, instructor-led training that helps professionals
                  around the world grow and succeed.
                </p>
                <Col>
                  <p>
                    Est. 2013 Trusted by{' '}
                    <span className="highlight">10000+</span> Students
                  </p>
                </Col>
                <FormButtons
                  text="Free Consultation"
                  onClick={handleButtonClick}
                />
                <div className="logostrip">
                  <img src="/public/Headercarousel/logo strip.avif" alt="companies" />
                </div>
              </div>
              <div className="carousel-image">
                <img
                  src="/Headercarousel/headerManimg.avif"
                  alt="Career Potential"
                />
              </div>
            </div>
          </Carousel.Item>
          {/* Second Slide */}
          <Carousel.Item>
            <div className="carousel-slide2">
              <div className="carousel-text2">
                <h2>
                  All Our <span className="highlight">Top Programs</span>{' '}
                  Include <br></br>
                  <span className="highlight">Genrative AI </span>Components
                </h2>
                <br></br>
                <h1>
                  Be a Leader<span className="highlight"></span> in your field{' '}
                  <br></br>
                  <span className="highlight">
                    Change, Adapt and Build
                  </span>{' '}
                  with AI.
                </h1>
                <br></br>
                <div className="mb-3">
                  <Button className="slide-2-btn" onClick={scrollToPopCourses}>
                    Explore Our Top Programs
                  </Button>
                </div>
              </div>
              <div className="cardBox2">
                <div className="cardH2">
                  <div className="content2">
                    <Card.Img
                      className="transition-image"
                      style={getImageStyle(index)}
                      variant="top"
                      src={IMAGES[index]}
                      alt="Future Starts Here"
                    />
                  </div>
                </div>
              </div>
            </div>
          </Carousel.Item>
          {/* Third Slide */}
          {!isMobileView && (
            <Carousel.Item>
              <div className="carousel-slide3">
                <div className="left-sideH3">
                  <h1>
                    Secure your <span className="highlight">Dream Career</span>{' '}
                    with <span className="bold">Live Classes</span> From
                    Industry Experts.
                  </h1>
                  <br></br>
                  <br></br>
                  <h2>
                    Our <span className="highlight">Mentors</span> Come From Top{' '}
                    <span className="highlight">MNCs</span>
                  </h2>
                  <br></br>
                  <br></br>
                  <h2>
                    <img
                      src="/Headercarousel/assurance.avif"
                      alt="Assurance badge"
                      className="assured-placement-image"
                    />
                    Assured Placement Opportunity*
                  </h2>
                </div>
                <div className="cardBox3">
                  <div className="cardH3">
                    <h2>Our Mentors Come From</h2>
                    <div className="content3">
                      <div className="image-grid">
                        <img
                          src="/Headercarousel/ibm1.avif"
                          alt="ibm logo"
                          className="grid-image grid-image-ibm"
                        />
                        <img
                          src="/Headercarousel/tcs1.avif"
                          alt="tcs logo"
                          className="grid-image grid-image-tcs"
                        />
                        <img
                          src="/Headercarousel/LnT.avif"
                          alt="Lnt logo"
                          className="grid-image grid-image-Lnt"
                        />
                        <img
                          src="/Headercarousel/amdocs1.avif"
                          alt="amdocs logo"
                          className="grid-image grid-image-amd"
                        />
                        <img
                          src="/Headercarousel/infosys2.avif"
                          alt="Infosys logo"
                          className="grid-image grid-image-info"
                        />
                        <img
                          src="/Headercarousel/wipro.avif"
                          alt="wipro logo"
                          className="grid-image grid-image-wip"
                        />
                        <img
                          src="/Headercarousel/deloitte.avif"
                          alt="deloitte logo"
                          className="grid-image grid-image-del"
                        />
                        <img
                          src="/Headercarousel/accenture1.avif"
                          alt="accenture logo"
                          className="grid-image grid-image-acc"
                        />
                        <img
                          src="/Headercarousel/BMW.avif"
                          alt="bmw logo"
                          className="grid-image grid-image-bmw"
                        />
                        <img
                          src="/Headercarousel/cognizant1.avif"
                          alt="cognizant logo"
                          className="grid-image grid-image-cog"
                          loading="lazy"
                        />
                        <img
                          src="/Headercarousel/Cisco.avif"
                          alt="cisco logo"
                          className="grid-image grid-image-cis"
                        />
                        <img
                          src="/Headercarousel/TechM.avif"
                          alt="tech mahindra logo"
                          className="grid-image grid-image-tec"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Carousel.Item>
          )}
          {/* Fourth Slide */}
          <Carousel.Item>
            <div className="carousel-slide4">
              <div className="left-sideH">
                <h1 dangerouslySetInnerHTML={{ __html: question.title }}></h1>
                <p dangerouslySetInnerHTML={{ __html: question.text }}></p>
                <div className="quiz-options">
                  <div className="quiz-option">
                    <button
                      className="circular-button"
                      onMouseEnter={() => setQuestion(questionData.Q1)}
                      onClick={() => setQuestion(questionData.Q1)}
                    >
                      Q1
                    </button>
                  </div>
                  <div className="quiz-option">
                    <button
                      className="circular-button"
                      onMouseEnter={() => setQuestion(questionData.Q2)}
                      onClick={() => setQuestion(questionData.Q2)}
                    >
                      Q2
                    </button>
                  </div>
                  <div className="quiz-option">
                    <button
                      className="circular-button"
                      onMouseEnter={() => setQuestion(questionData.Q3)}
                      onClick={() => setQuestion(questionData.Q3)}
                    >
                      Q3
                    </button>
                  </div>
                </div>
              </div>
              <div className="right-sideH">
                <img
                  src="/Headercarousel/quizbg.avif"
                  alt="quiz"
                  className="plants-image"
                />
                <button className="go-button">Quiz→</button>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>

        {showForm && <Btnform onClose={handleCloseForm} />}
      </div>
    </>
  )
}

export default HeaderCarousel
