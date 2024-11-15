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
import HRCard from '../CoursesComponents/HRCard'

const HRTraining = () => {
  return (
    <div>
      <main>
        <ScrollToTop />
        <Header pageId="HRTrainingHeader" pageType="hrtraining" />

        {/* <DSHeader pageId="MDAHeader" /> */}
        <Why pageId="WhyHRTRAIN" pageType="Whyhrtrain" />
        <Councelor />
        <Modules pageId="HRTrainCurriculum" />
        <Trustus />
        <HRCard />
        <Program />
        <Certificate pageId="HrtrainCERT" />
        <Description pageId="hrtrain" />
        <FAQ pageId="HRTRAINFAQ" pageType="hrtrainfaq" />
        <RelatedCourses pageId="Hrtrainrelated" />
      </main>
    </div>
  )
}

export default HRTraining
