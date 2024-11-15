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


const SAPSCM = () => {
  

  return (
    

      <main>
        <ScrollToTop />
        <Header pageId="SCMHeader" pageType="scmheader" />
        <Why pageId="WhySCM" pageType="WhySCM" />
        <SAPMOD pageId="SAPSCM" />
        <Councelor />
        <Trustus />
        <Certificate pageId="sap-scmCERT" />
        <Program />
        <Description pageId="sap-scm" />
        <FAQ pageId="SCMFAQ" pageType="scmfaq" />
        <RelatedCourses pageId="SCMrelcourses" />
      </main>
   
  )
}

export default SAPSCM
