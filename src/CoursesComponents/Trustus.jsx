import React from 'react'
import './Trustus.css'
import Logos from '/Ourclients/Artboard 10.avif'
import Logos1 from '/Ourclients/Artboard 11.avif'
import Logos2 from '/Ourclients/Artboard 12.avif'
import Logos3 from '/Ourclients/Artboard 13.avif'
import Logos4 from '/Ourclients/Artboard 14.avif'
import Logos5 from '/Ourclients/Artboard 15.avif'
import Logos6 from '/Ourclients/Artboard 16.avif'
import Logos7 from '/Ourclients/Artboard 17.avif'
import Logos8 from '/Ourclients/Artboard 18.avif'
import Logos9 from '/Ourclients/Artboard 19.avif'
import Logos10 from '/Ourclients/Artboard 20.avif'
import Logos11 from '/Ourclients/Artboard 21.avif'
import Logos12 from '/Ourclients/Artboard 22.avif'
import Logos13 from '/Ourclients/Artboard 23.avif'
import Logos14 from '/Ourclients/Artboard 24.avif'
import Logos15 from '/Ourclients/Artboard 25.avif'
import Logos16 from '/Ourclients/Artboard 26.avif'
import Logos17 from '/Ourclients/Artboard 40.avif'
import Logos18 from '/Ourclients/Artboard 41.avif'
import Logos19 from '/Ourclients/Artboard 42.avif'
import Logos20 from '/Ourclients/Artboard 43.avif'
import Logos21 from '/Ourclients/Artboard 44.avif'
import Logos22 from '/Ourclients/Artboard 45.avif'
import Logos23 from '/Ourclients/Artboard 46.avif'
import Logos24 from '/Ourclients/Artboard 47.avif'
import Logos25 from '/Ourclients/Artboard 48.avif'
import Logos26 from '/Ourclients/Artboard 49.avif'
import Logos27 from '/Ourclients/Artboard 50.avif'
import Logos28 from '/Ourclients/Artboard 51.avif'
import Logos29 from '/Ourclients/Artboard 52.avif'

const Trustus = () => {
  const logos1 = [
    Logos,
    Logos1,
    Logos2,
    Logos3,
    Logos4,
    Logos15,
    Logos16,
    Logos17,
    Logos18,
    Logos19,
  ]

  const logos2 = [
    Logos5,
    Logos6,
    Logos7,
    Logos8,
    Logos9,
    Logos20,
    Logos21,
    Logos22,
    Logos23,
    Logos24,
  ]

  const logos3 = [
    Logos10,
    Logos11,
    Logos12,
    Logos13,
    Logos14,
    Logos25,
    Logos26,
    Logos27,
    Logos28,
    Logos29,
  ]

  const duplicateLogos = (logos) => {
    return [...logos, ...logos]
  }

  return (
    <div className="container-it-ds">
      <div className="logos-it-ds">
        <div className="marquee-it-ds">
          <div className="marquee-content-it-ds">
            {duplicateLogos(logos1).map((src, index) => (
              <img
                src={src}
                alt={`Logo ${index}`}
                className="logo-it-ds"
                key={index}
              />
            ))}
          </div>
        </div>
        <div className="marquee-it-ds">
          <div className="marquee-content-it-ds">
            {duplicateLogos(logos2).map((src, index) => (
              <img
                src={src}
                alt={`Logo ${index}`}
                className="logo-it-ds"
                key={index}
              />
            ))}
          </div>
        </div>
        <div className="marquee-it-ds">
          <div className="marquee-content-it-ds">
            {duplicateLogos(logos3).map((src, index) => (
              <img
                src={src}
                alt={`Logo ${index}`}
                className="logo-it-ds"
                key={index}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="info-it-ds">
        <div className="container-it-ds-title">
          <h2>ORGANISATIONS TRUST US </h2>
        </div>
        <h2 className="title-it-ds">
          {' '}
          <span className="highlight-span-cards">1000+</span> Organizations
          <br></br> TRUST US WITH THEIR <br></br>Openings
        </h2>
        <p className="description-it-ds">
          <span className="highlight-span-cards">Organizations</span>, across
          the globe trust our students and their brilliant{' '}
          <span className="highlight-span-cards">technical skills</span> in Full
          Stack Development,{' '}
          <span className="highlight-span-cards">
            Data Science & Analytics with AI
          </span>
          , Java Full Stack Developer, Digital Marketing Course, AWS Cloud
          Technology, which results in them getting hired at excellent companies
          with impressive pay scales.
          <span className="highlight-span-cards">Connecting Dots ERP</span>,
          India’s fastest-growing{' '}
          <span className="highlight-span-cards">
            Software Training Institute
          </span>{' '}
          provides a range of IT Courses helping to shape the future of our
          students in every way possible. The Coding Courses provided by our
          Institute are highly valuable and worthy for the students.
        </p>
        <div className="statistics-it-ds">
          <div className="stat-it-ds">
            <span className="number-it-ds">1000+</span>{' '}
            <span className="label-it-ds">Hiring companies</span>
          </div>
          <div className="stat-it-ds">
            <span className="number-it-ds">100+</span>{' '}
            <span className="label-it-ds">Students already placed</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Trustus
