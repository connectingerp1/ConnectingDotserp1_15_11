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


const SAPPP = () => {
  

  return (
 

      <main>
        <ScrollToTop />
        <Header pageId="PPHeader" pageType="ppheader" />
        <Why pageId="WhyPP" pageType="Whypp" />
        <SAPMOD pageId="SAPPP" />

        <Councelor />
        <Trustus />
        <Certificate pageId="sap-ppCERT" />
        <Program />
        <Description pageId="sap-pp" />
        <FAQ pageId="PPFAQ" pageType="ppfaq" />
        <RelatedCourses pageId="PPrelcourses" />
      </main>
   
  )
}

export default SAPPP
