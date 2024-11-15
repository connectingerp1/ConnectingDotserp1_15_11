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


const SAPQM = () => {
  

  return (
   

      <main>
        <ScrollToTop />
        <Header pageId="QMHeader" pageType="qmheader" />
        <Why pageId="WhyQM" pageType="Whyqm" />
        <SAPMOD pageId="SAPQM" />
        <Councelor />
        <Trustus />
        <Certificate pageId="sap-qmCERT" />
        <Program />
        <Description pageId="sap-qm" />
        <FAQ pageId="QMFAQ" pageType="qmfaq" />
        <RelatedCourses pageId="QMrelcourses" />
      </main>
    
  )
}

export default SAPQM
