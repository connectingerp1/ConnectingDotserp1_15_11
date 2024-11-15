import React from 'react'
import { Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Ourclients.css'

import amdocsLogo from '/Ourclients/Artboard 2.avif'
import Logo from '/Ourclients/Artboard 10.avif'
import Logo1 from '/Ourclients/Artboard 11.avif'
import Logo2 from '/Ourclients/Artboard 12.avif'
import Logo3 from '/Ourclients/Artboard 13.avif'
import Logo4 from '/Ourclients/Artboard 14.avif'
import Logo5 from '/Ourclients/Artboard 15.avif'
import Logo6 from '/Ourclients/Artboard 16.avif'
import Logo7 from '/Ourclients/Artboard 17.avif'
import Logo8 from '/Ourclients/Artboard 18.avif'
import Logo9 from '/Ourclients/Artboard 19.avif'
import Logo10 from '/Ourclients/Artboard 20.avif'
import Logo11 from '/Ourclients/Artboard 21.avif'
import Logo12 from '/Ourclients/Artboard 22.avif'
import Logo13 from '/Ourclients/Artboard 23.avif'
import Logo14 from '/Ourclients/Artboard 24.avif'
import Logo15 from '/Ourclients/Artboard 25.avif'
import Logo16 from '/Ourclients/Artboard 26.avif'
import Logo17 from '/Ourclients/Artboard 40.avif'
import Logo18 from '/Ourclients/Artboard 41.avif'
import Logo19 from '/Ourclients/Artboard 42.avif'
import Logo20 from '/Ourclients/Artboard 43.avif'
import Logo21 from '/Ourclients/Artboard 44.avif'
import Logo22 from '/Ourclients/Artboard 45.avif'
import Logo23 from '/Ourclients/Artboard 46.avif'
import Logo24 from '/Ourclients/Artboard 47.avif'
import Logo25 from '/Ourclients/Artboard 48.avif'
import Logo26 from '/Ourclients/Artboard 49.avif'
import Logo27 from '/Ourclients/Artboard 50.avif'
import Logo28 from '/Ourclients/Artboard 51.avif'
import Logo29 from '/Ourclients/Artboard 52.avif'
import Logo30 from '/Ourclients/Artboard 53.avif'
import Logo31 from '/Ourclients/Artboard 54.avif'

const clients = [
  { name: 'Amdocs', logo: amdocsLogo },

  { name: 'hdfc logo', logo: Logo },
  { name: 'genius logo', logo: Logo1 },
  { name: 'johndeere logo', logo: Logo2 },
  { name: 'volkswagen logo', logo: Logo3 },
  { name: 'capita logo', logo: Logo4 },
  { name: 'crisil logo ', logo: Logo5 },
  { name: 'exl logo', logo: Logo6 },
  { name: 'jindal logo', logo: Logo7 },
  { name: 'cummins logo', logo: Logo8 },
  { name: 'iss logo', logo: Logo9 },
  { name: 'Monginis logo', logo: Logo10 },
  { name: 'weber logo', logo: Logo11 },
  { name: 'syntel logo', logo: Logo12 },
  { name: 'ask logo', logo: Logo13 },
  { name: 'pizzahut logo', logo: Logo14 },
  { name: 'kelly services logo', logo: Logo15 },
  { name: 'godrej logo', logo: Logo16 },
  { name: 'zensar logo', logo: Logo17 },
  { name: 'swiggy logo', logo: Logo18 },
  { name: 'paytm logo', logo: Logo19 },
  { name: 'vyapar logo', logo: Logo21 },
  { name: 'airmeet logo', logo: Logo22 },
  { name: 'moneytap logo', logo: Logo23 },
  { name: 'bharatpe logo', logo: Logo24 },
  { name: 'homelane logo', logo: Logo25 },
  { name: 'ibm logo', logo: Logo26 },
  { name: 'leapfinance logo', logo: Logo27 },
  { name: 'dream11 logo', logo: Logo28 },
  { name: 'sharechat logo', logo: Logo29 },
  { name: 'bharatagri logo', logo: Logo30 },
  { name: 'eatfit logo', logo: Logo31 },
  { name: 'whitehatjr logo', logo: Logo20 },
]

const OurClients = () => {
  console.log(clients)
  return (
    <Container fluid className="our-clients-section text-center">
      <h2 className="section-titleC">OUR CLIENTS</h2>
      <div className="marquee-container">
        <div className="marquee marquee1">
          <div className="marquee-content">
            {clients.concat(clients).map((client, index) => (
              <div key={index} className="client-logo-container">
                <img
                  src={client.logo}
                  alt={client.name}
                  className="client-logo"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="marquee marquee2 reverse">
          <div className="marquee-content">
            {clients.concat(clients).map((client, index) => (
              <div
                key={index + clients.length}
                className="client-logo-container"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="client-logo"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="marquee marquee3">
          <div className="marquee-content">
            {clients.concat(clients).map((client, index) => (
              <div key={index} className="client-logo-container">
                <img
                  src={client.logo}
                  alt={client.name}
                  className="client-logo"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  )
}

export default OurClients
