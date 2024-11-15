import React, { useContext } from 'react'
import { HelmetProvider, Helmet } from 'react-helmet-async'
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


const SAPSD = () => {
  

  return (
   

      <main>
        <ScrollToTop />
        <Header pageId="SDHeader" pageType="sdheader" />
        <Why pageId="WhySD" pageType="WhySD" />
        <SAPMOD pageId="SAPSD" />
        <Councelor />
        <Trustus />
        <Certificate pageId="sap-sdCERT" />
        <Program />
        <Description pageId="sap-sd" />
        <FAQ pageId="SDFAQ" pageType="sdfaq" />
        <RelatedCourses pageId="SDrelcourses" />
      </main>
    
  )
}

export default SAPSD
