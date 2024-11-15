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

const PAYROLL = () => {
  return (
    <div>
      <main>
        <ScrollToTop />
        <Header pageId="PAYROLLHeader" pageType="payrollmanpage" />

        {/* <DSHeader pageId="MDAHeader" /> */}
        <Why pageId="WhyPAY" pageType="Whypay" />
        <Councelor />
        <Modules pageId="PAYCurriculum" />
        <Trustus />
        <Program />
        <Certificate pageId="HRPayrollCERT" />
        <Description pageId="pay" />
        <FAQ pageId="PAYFAQ" pageType="payfaq" />
        <RelatedCourses pageId="PAYrelated" />
      </main>
    </div>
  )
}

export default PAYROLL
