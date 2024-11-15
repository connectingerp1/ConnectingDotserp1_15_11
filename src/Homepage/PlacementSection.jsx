import React, { useEffect, useState } from 'react'
import { Carousel, Container, Row, Col, Card } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './PlacementSection.css'

const placementStories = [
  {
    name: 'Preetesh Pardeshi',
    salary: '24 LPA',
    degree: 'Trained on- SAP ABAP',
    company: 'Placed in',
    logo: '/Placementsection/agconsultancy.avif', // URL of the company logo
    topImage: '/Placementsection/pic1pp.avif', // URL of the top image
  },
  {
    name: 'Nikhilesh Landge',
    salary: '12 LPA',
    degree: 'Trained on- SAP SD',
    company: 'Placed in',
    logo: '/Placementsection/cltech.avif',
    topImage: '/Placementsection/pic2pp.avif',
  },
  {
    name: 'Shubham Desale',
    salary: '9 LPA',
    degree: 'Trained on- SAP MM',
    company: 'Placed in',
    logo: '/Placementsection/deloitte1.avif',
    topImage: '/Placementsection/pic3pp.avif',
  },
  {
    name: 'Nitesh Kumar',
    salary: '15 LPA',
    degree: 'Trained on- SAP FICO',
    company: 'Placed in',
    logo: '/Placementsection/marketlegos.avif',
    topImage: '/Placementsection/pic4pp.avif',
  },
  {
    name: 'Seshu Tamma',
    salary: '11 LPA',
    degree: 'Trained on- SAP Security',
    company: 'Placed in',
    logo: '/Placementsection/deloitte1.avif',
    topImage: '/Placementsection/pic5pp.avif',
  },
  {
    name: 'Sai Srujan',
    salary: '18 LPA',
    degree: 'Trained on- SAP FICO',
    company: 'Placed in',
    logo: '/Placementsection/deloitte1.avif',
    topImage: '/FeedbacksandReviews/review image 5.avif',
  },
]

const chunkArray = (array, size) => {
  const chunked = []
  for (let i = 0; i < array.length; i += size) {
    chunked.push(array.slice(i, size + i))
  }
  return chunked
}

const PlacementSection = () => {
  const [index, setIndex] = useState(0)
  const chunkedStoriesDesktop = chunkArray(placementStories, 3)
  const chunkedStoriesMobile = chunkArray(placementStories, 1)

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex)
  }

  return (
    <Container fluid className="placement-section text-center">
      <h2 className="section-titleP">OUR STUDENTS PLACED AT</h2>
      <Carousel
        indicators={false}
        controls={true}
        className="d-none d-md-block"
        activeIndex={index}
        onSelect={handleSelect}
      >
        {chunkedStoriesDesktop.map((storyChunk, chunkIndex) => (
          <Carousel.Item key={chunkIndex}>
            <Row>
              {storyChunk.map((story, storyIndex) => {
                const cardClassName = `student-placement-card card-${chunkIndex * 3 + storyIndex}`
                return (
                  <Col key={storyIndex} md={4} className="p-2">
                    <Card className={cardClassName}>
                      <Card.Img
                        variant="top"
                        src={story.topImage}
                        className="top-image"
                      />
                      <Card.Body>
                        <Card.Title>{story.name}</Card.Title>
                        <div className="dotted-underline"></div>
                        <Card.Text>
                          <p>
                            <strong>Salary:</strong> {story.salary}
                          </p>
                          <p>{story.degree}</p>
                          <p>{story.company}</p>
                          <p>
                            <img
                              src={story.logo}
                              alt={story.company}
                              className="company-icon"
                            />
                          </p>
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                )
              })}
            </Row>
          </Carousel.Item>
        ))}
      </Carousel>
      <Carousel
        indicators={false}
        controls={false}
        interval={3000}
        className="d-block d-md-none"
        activeIndex={index}
        onSelect={handleSelect}
      >
        {chunkedStoriesMobile.map((storyChunk, index) => (
          <Carousel.Item key={index}>
            <Row>
              {storyChunk.map((story, storyIndex) => {
                const cardClassName = `student-placement-card card-${index * 1 + storyIndex}`
                return (
                  <Col key={storyIndex} xs={12} className="p-2">
                    <Card className={cardClassName}>
                      <Card.Img
                        variant="top"
                        src={story.topImage}
                        className="top-image"
                      />
                      <Card.Body>
                        <Card.Title>{story.name}</Card.Title>
                        <div className="dotted-underline"></div>
                        <Card.Text>
                          <p>
                            <strong>Salary:</strong> {story.salary}
                          </p>
                          <p>{story.degree}</p>
                          <p>{story.company}</p>
                          <p>
                            <img
                              src={story.logo}
                              alt={story.company}
                              className="company-icon"
                            />
                          </p>
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                )
              })}
            </Row>
          </Carousel.Item>
        ))}
      </Carousel>
      <div className="radio-buttons">
        {chunkedStoriesDesktop.map((_, btnIndex) => (
          <input
            type="radio"
            name="carousel-btn"
            key={btnIndex}
            checked={index === btnIndex}
            onChange={() => handleSelect(btnIndex)}
          />
        ))}
      </div>
    </Container>
  )
}

export default PlacementSection
