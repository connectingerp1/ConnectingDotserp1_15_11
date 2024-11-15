import React from 'react'
import Header from '../CoursesComponents/Header'
import Why from '../CoursesComponents/Why'
import Modules from '../CoursesComponents/Modules'
import Certificate from '../Homepage/Certificate'
import FAQ from '../CoursesComponents/FAQ'
import RelatedCourses from '../CoursesComponents/RelatedCourses'
import Trustus from '../CoursesComponents/Trustus'
import Councelor from '../CoursesComponents/Councelor'
import ScrollToTop from '../components/ScrollToTop'
import Program from '../CoursesComponents/ProgramHighlights'
import Description from '../CoursesComponents/Description'

const SAPHCM = () => {
  return (
    <div>
      <main>
        <ScrollToTop />
        <Header pageId="GENHeader" pageType="genpage" />

        {/* <DSHeader pageId="MDAHeader" /> */}
        <Why pageId="WhyGEN" pageType="Whygen" />
        <Councelor />
        <Modules pageId="HCMCurriculum" />
        <Trustus />
        <Program />
        <Certificate pageId="HRHCMCERT" />
        <Description pageId="gen" />
        <FAQ pageId="GENFAQ" pageType="genfaq" />
        <RelatedCourses pageId="HCMrelated" />
      </main>
    </div>
  )
}

export default SAPHCM
