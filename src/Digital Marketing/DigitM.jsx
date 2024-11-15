import { useEffect } from 'react'
import { Element, scroller } from 'react-scroll' // Import scroller from react-scroll
import { useLocation } from 'react-router-dom' // To get the URL hash
import ScrollToTop from '../components/ScrollToTop'
import Header from '../CoursesComponents/Header'
import Why from '../CoursesComponents/Why'
// import Modules from '../CoursesComponents/Modules';
import Certificate from '../Homepage/Certificate'
import FAQ from '../CoursesComponents/FAQ'
import RelatedCourses from '../CoursesComponents/RelatedCourses'
import Trustus from '../CoursesComponents/Trustus'
import Councelor from '../CoursesComponents/Councelor'
import Certif from '../CoursesComponents/Certificate'
import Program from '../CoursesComponents/ProgramHighlights'
import Description from '../CoursesComponents/Description'
import SAPMOD from '../CoursesComponents/sapmod'

const DIGITALMARKETING = () => {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const sectionName = location.hash.replace('#', '')

      scroller.scrollTo(sectionName, {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart',
        offset: -50,
      })
    }
  }, [location])

  return (
    <div>
      <main>
        <ScrollToTop />
        <Header pageId="DIGIMHeader" pageType="digimheader" />

        <Why pageId="WhyDIGIM" pageType="Whydigim" />
        <SAPMOD pageId="DIGIM" />

        <Councelor />

        <Element name="pay-per-click">
          <Description pageId="digim" sectionIndex={0} />
        </Element>

        {/* <Modules pageId="DIGIMmodule" /> */}

        <Trustus />
        <Element name="search-engine-opti">
          <Description pageId="digim2" sectionIndex={1} />
        </Element>

        <Certificate pageId="DgimCERT" />
        <Certif />
        <Program />

        <Element name="social-media">
          <Description pageId="digim3" sectionIndex={0} />
        </Element>

        <Element name="advance-analytics">
          <Description pageId="digim4" sectionIndex={1} />
        </Element>

        <FAQ pageId="DGMFAQ" pageType="dgmfaq" />
        <RelatedCourses pageId="DGMrelated" />
      </main>
    </div>
  )
}

export default DIGITALMARKETING
