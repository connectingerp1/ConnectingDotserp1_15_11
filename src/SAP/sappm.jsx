import React, { useContext } from 'react';
import { HelmetProvider, Helmet } from 'react-helmet-async'; // Import Helmet
import Header from '../CoursesComponents/Header';
import Why from '../CoursesComponents/Why';
import Certificate from '../Homepage/Certificate';
import FAQ from '../CoursesComponents/FAQ';
import RelatedCourses from '../CoursesComponents/RelatedCourses';
import Trustus from '../CoursesComponents/Trustus';
import Councelor from '../CoursesComponents/Councelor';
import ScrollToTop from '../components/ScrollToTop';
import Program from '../CoursesComponents/ProgramHighlights';
import Description from '../CoursesComponents/Description';
import SAPMOD from '../CoursesComponents/sapmod';

const SAPPM = () => {
 

  return (
    
      <main>
        <ScrollToTop />
        <Header pageId="PMHeader" pageType="pmheader" />
        <Why pageId="WhyPM" pageType="Whypm" />
        <SAPMOD pageId="SAPPM" />
        
        <Councelor />
        <Trustus />
        <Certificate pageId="sap-pmCERT" />
        <Program />
        <Description pageId="sap-pm" />
        <FAQ pageId="PMFAQ" pageType="pmfaq" />
        <RelatedCourses pageId="PMrelcourses" />
      </main>
    
  );
};

export default SAPPM;
