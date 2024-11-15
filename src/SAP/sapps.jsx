import React, { useContext } from 'react'
import { HelmetProvider, Helmet } from 'react-helmet-async' // Import Helmet
import Header from '../CoursesComponents/Header'
import Why from '../CoursesComponents/Why'
import Certificate from '../Homepage/Certificate'
import FAQ from '../CoursesComponents/FAQ'
import RelatedCourses from '../CoursesComponents/RelatedCourses'
import Trustus from '../CoursesComponents/Trustus'
import Councelor from '../CoursesComponents/Councelor'
import ScrollToTop from '../components/ScrollToTop'
import Program from '../CoursesComponents/ProgramHighlights'
import Description from '../CoursesComponents/Description'
import SAPMOD from '../CoursesComponents/sapmod'


const SAPPS = () => {
 

  return (
    
      <main>
        <ScrollToTop />
        <Header pageId="PSHeader" pageType="psheader" />
        <Why pageId="WhyPS" pageType="Whyps" />
        <SAPMOD pageId="SAPPS" />

        <Councelor />
        <Trustus />
        <Certificate pageId="sap-psCERT" />
        <Program />
        <Description pageId="sap-ps" />
        <FAQ pageId="PSFAQ" pageType="psfaq" />
        <RelatedCourses pageId="PSrelcourses" />
      </main>
    
  )
}

export default SAPPS
