import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import Header from '../CoursesComponents/Header'
import Why from '../CoursesComponents/Why'
import Certificate from '../Homepage/Certificate'
import FAQ from '../CoursesComponents/FAQ'
import RelatedCourses from '../CoursesComponents/RelatedCourses'
import Trustus from '../CoursesComponents/Trustus'
import Councelor from '../CoursesComponents/Councelor'
import SAPMOD from '../CoursesComponents/sapmod'
import ScrollToTop from '../components/ScrollToTop'
import Program from '../CoursesComponents/ProgramHighlights'
import Description from '../CoursesComponents/Description'

const SAPFICO = ({ city = 'defaultCity' }) => {
  return (
   

        <main>
          <ScrollToTop />
          <Header pageId="FICOHeader" pageType="ficoheader" />
          <Why pageId="WhyFICO" pageType="Whyfico" />
          <SAPMOD pageId="SAPFICO" />
          <Councelor />
          <Trustus />
          <Certificate pageId="sap-ficoCERT" />
          <Program />
          <Description pageId="sap-fico" />
          <FAQ pageId="FICOFAQ" pageType="ficofaq" />
          <RelatedCourses pageId="FICOrelcourses" />
        </main>
     
  )
}

export default SAPFICO;
