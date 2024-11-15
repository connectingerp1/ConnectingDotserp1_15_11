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
        <Header pageId="DataVisualHeader" pageType="datavisualheader" />
        <Why pageId="WhyDataVisual" pageType="Whyvisual" />
        <Certificate pageId="DataVisual-CERT" />
        <Description pageId="DataVisual-landing" />
        </main>
    
  )
}

export default SAP
