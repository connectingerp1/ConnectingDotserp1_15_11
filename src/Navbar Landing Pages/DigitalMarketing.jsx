import React, { useContext } from 'react'
import { HelmetProvider, Helmet } from 'react-helmet-async'
import Header from '../CoursesComponents/Header'
import Why from '../CoursesComponents/Why'
import Certificate from '../Homepage/Certificate'
import Description from '../CoursesComponents/Description'
import ScrollToTop from '../components/ScrollToTop'


const SAP = () => {
    return (
        <main>
        <ScrollToTop />
        <Header pageId="DigitalMarketingHeader" pageType="digitalmarketingheader" />
        <Why pageId="WhyDigiM" pageType="Whydigim" />
        <Certificate pageId="DigitalM-CERT" />
        <Description pageId="digim-landing" />
        </main>
    
  )
}

export default SAP
